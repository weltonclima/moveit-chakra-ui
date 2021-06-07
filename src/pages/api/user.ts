import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/client";
import { fauna } from "../../services/fauna";
import { Base64 } from 'js-base64';
import { query as q } from 'faunadb';

type User = {
  ref: {
    id: string;
  },
  data: {
    id: number;
    name: string;
    login: string;
    email: string;
    avatar_url: string;
    level: number;
    currentExperience: number;
    challengesCompleted: number;
  }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });
  const getCookies = JSON.stringify(req.cookies).split(',')
  const cookies = getCookies[2].split(':')

  const getUser = Base64.decode(cookies[1]).split('","')
  const email = getUser[1].split('":"')
  const id = getUser[3].split('":"')

  if (!session) {
    return res.status(401).end('Unauthorized');
  }
  
  try {
    const getUser = await fauna.query<User>(
      q.If(
        q.Not(q.Exists(q.Match(q.Index('user_by_email'),q.Casefold(email[1])))),
        q.Get(q.Ref(q.Collection('users'),id[1])),
        q.Get(q.Match(q.Index('user_by_email'), q.Casefold(email[1])))
      ),
    );
    
    if (!getUser) {
      return res.status(404).end('NotFound');
    }

    if (req.method === 'GET') {

      return res.status(200).json(getUser.data);

    } else if (req.method === 'PUT') {

      try {
        const updateUser = await fauna.query(
          q.Update(
            q.Ref(q.Collection('users'), getUser.data.id),
            {
              data: {
                level: req.body.data.level,
                currentExperience: req.body.data.currentExperience,
                challengesCompleted: req.body.data.challengesCompleted,
              }
            }
          )
        );
        return res.status(200).json({ data: updateUser })

      } catch (err) {

        res.setHeader('Unprocessable', err);
        res.status(402).end('Unprocessable');
        return

      }

    } else {

      res.setHeader('Allow', 'GET and PUT');
      res.status(405).end('Method not allowed');
      return

    }
  } catch (err) {
    res.setHeader('Unprocessable', err);
    res.status(402).end('Unprocessable');
    return
  }
}