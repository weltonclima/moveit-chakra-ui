import Head from "next/head";
import { useEffect, useState } from "react";
import { SideBar } from "../components/SideBar";
import { Avatar, Box, Flex, Heading, Img, Table, Tbody, Text, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import { api } from "../services/api";
import { getSession } from "next-auth/client";
import { GetServerSideProps } from "next";
import { Th } from "../components/LeaderBoard/Th";
import { Td } from "../components/LeaderBoard/Td";
import { useSidebarDrawer } from "../contexts/SidebarDrawerContext";

interface User {
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

export default function LoaderBoard() {
  const { onOpen } = useSidebarDrawer();
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
      <Box>
        {isDrawerSidebar &&
          <Img w="6" m="2"
            src="LogoSideBar.svg" alt="Logo"
            onClick={onOpen}
          />
        }
        <SideBar h="100vh" />
        <LoaderBoard/>
      </Box>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!!!session) {
    console.log('App')
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