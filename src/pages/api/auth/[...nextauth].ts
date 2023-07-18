import { query as q } from 'faunadb';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { Profile } from '../../../interfaces/Profile';
import { User } from '../../../interfaces/User';
import { fauna } from '../../../services/fauna';

export default NextAuth({

  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      scope: 'read:user'
    })
  ],
  callbacks: {
    async signIn(user, account, profile: Profile) {
      const { id, avatar_url, name, email, login } = profile;
      const { provider } = account

      try {

        const { data } = await fauna.query<User>(
          q.If(q.And(
            q.Not(q.Exists(q.Match(q.Index('user_by_id'), q.Casefold(id)))),
            q.Not(q.Exists(q.Match(q.Index('user_by_email'), q.Casefold(email)))),
          ),
            q.Map(
              [
                [id,
                  {
                    "id": id,
                    "name": name,
                    "provider": provider,
                    "login": login,
                    "email": email,
                    "avatar_url": avatar_url,
                    "level": 1,
                    "currentExperience": 0,
                    "challengesCompleted": 0
                  }
                ]
              ],
              q.Lambda(
                ["dID", "data"],
                q.Create(q.Ref(q.Collection("users"), q.Var("dID")), { data: q.Var("data") })
              )
            ),
            q.Get(
              q.Match(
                q.Index('user_by_email'),
                q.Casefold(email)
              )
            )
          )
        )


        if (data.provider != provider) {
          await fauna.query(
            q.Update(
              q.Ref(q.Collection('users'), data.id),
              {
                data: {
                  provider: provider,
                }
              }
            )
          );
        }

        return true;
      } catch {
        return false;
      }
    }
  }
})