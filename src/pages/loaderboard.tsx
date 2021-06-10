import Head from "next/head";
import { useEffect, useState } from "react";
import { SideBar } from "../components/SideBar";
import { Box, Flex, Img, useBreakpointValue } from "@chakra-ui/react";
import { api } from "../services/api";
import { getSession } from "next-auth/client";
import { GetServerSideProps } from "next";
import { LoaderBoard } from "../components/LeaderBoard";
import { useCountDownContext } from "../hooks/useHooks";

export interface User {
  ref: {
    id: string;
  },
  data: {
    id: number;
    name: string;
    avatar_url: string;
    level: number;
    currentExperience: number;
    challengesCompleted: number;
  }
}

export default function LoaderBoardPage() {
  const { onOpen } = useCountDownContext();
  const [users, setUsers] = useState<User[]>([]);
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  })
  useEffect(() => {
    async function getUser() {
      const { data } = await api.get<User[]>('/users');

      setUsers(data)
    }
    getUser()
  }, [])

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

  return {
    props: {

    }
  }
}