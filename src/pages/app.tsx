import React from "react";
import Head from "next/head";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CountDown } from "../components/CountDown";
import { ChallengeBox } from "../components/ChallengeBox";
import { getSession } from "next-auth/client";
import { SideBar } from "../components/SideBar";
import { GetServerSideProps } from "next";
import { Box, Flex, SimpleGrid, Stack, useBreakpointValue, Img } from "@chakra-ui/react";
import { useCountDownContext } from "../hooks/useHooks";

export default function Home() {
  const { onOpen } = useCountDownContext();
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  })
  return (
    <>
      <Head>
        <title>Inicio | move.it</title>
      </Head>
      <Flex
      >
        {!isDrawerSidebar &&
          <SideBar h="100vh" />
        }
        <Flex flex="1" alignItems="center" flexDirection="column" w="100vw" h="100vh">
          {isDrawerSidebar ?
            <Flex justifyContent="space-between" w="100vw" maxW="992px">
              <Img w="6" ml="2"
                src="LogoSideBar.svg" alt="Logo"
                onClick={onOpen}
              />
              <ExperienceBar w="100%" />
            </Flex>
            :
            <ExperienceBar w="100%" />
          }
          <Box px={["0", "8"]} py="0" mx={0} my="auto" w="100%" maxW="992px">
            <SimpleGrid columns={2} gap="8" flex="1" minChildWidth={350}>
              <Stack>
                <Profile />
                <CountDown />
              </Stack>
              <ChallengeBox />
            </SimpleGrid>
          </Box>
        </Flex>
      </Flex>
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