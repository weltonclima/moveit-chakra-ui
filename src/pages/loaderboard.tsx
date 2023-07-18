import { Box, Flex, Img, useBreakpointValue } from "@chakra-ui/react";
import { query as q } from 'faunadb';
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import Head from "next/head";
import { LoaderBoard } from "../components/LeaderBoard";
import { SideBar } from "../components/SideBar";
import { useCountDownContext } from "../hooks/useHooks";
import { FaunaDb } from "../interfaces/FaunaDb";
import { User } from "../interfaces/User";
import { fauna } from "../services/fauna";

interface LoaderBoardPageProps {
  user: string;
}

export default function LoaderBoardPage({ user }: LoaderBoardPageProps) {
  const { onOpen } = useCountDownContext();
  //const [users, setUsers] = useState<User[]>([]);
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  })

  const users: User[] = JSON.parse(user)
  
  /*useEffect(() => {
    async function getUser() {
      const { data } = await api.get<User[]>('/users');
      console.log("data",data)
      setUsers(data)
    }
    getUser()
  }, [])*/

  return (
    <>
      <Head>
        <title>LeaderBoard | move.it</title>
      </Head>
      {
        isDrawerSidebar ?
          <Box>
            <Img w="6" m="2"
              src="LogoSideBar.svg" alt="Logo"
              onClick={onOpen}
            />
            <LoaderBoard
              users={users}
            />
          </Box>
          :
          <Flex>
            <SideBar h="100vh" />
            <LoaderBoard
              users={users}
            />
          </Flex>
      }
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!!!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const getUser = await fauna.query<FaunaDb>(
    q.Map(
      q.Paginate(q.Match(q.Index("sort_by_desc"))),
      q.Lambda(
        [
          "level",
          "currentExperience",
          "Ref"
        ], q.Get(q.Var("Ref")))
    )
  );
  
  if (getUser) {
    return {
      props: {
        user: JSON.stringify(getUser.data)
      }
    }
  }

  return {
    props: {

    }
  }
}