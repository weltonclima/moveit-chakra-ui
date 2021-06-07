import { getSession, signIn } from "next-auth/client";
import { FaGithub } from 'react-icons/fa';
import React from 'react'
import { Box, Flex, Icon, Image, Img, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import Head from "next/head";
import { GetServerSideProps } from "next";

export default function Login() {
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  })

  return (
    <Flex h="100vh" w="100vw"
      background="blue.900" justifyContent="center" >
      <Head>
        <title>Login | move.it</title>
      </Head>
      <Flex px="10" py="8" mx={0} my="auto" borderRadius="md"
        background="blue.800" maxW={1000} >
        {!isDrawerSidebar &&
          <Box>
            <Img w="33.6rem" h="28.87rem"
              src="Simbolo.svg" alt="Logo do Login"
            />
          </Box>}
        <Stack mt="12">
          <Image w="64" h="14" mt="12"
            src="Logo.svg" alt="Logo move.it"
          />
          <Text
            color="gray.100"
            lineHeight="8"
            fontSize="1.57rem"
            fontWeight="bold"
          >
            Bem-vindo
          </Text>
          <Box>
            <Text
              as="small"
              display="inline-block"
              fontStyle="normal"
              fontWeight="bold"
              color="purple"
              fontSize="1.40rem"
              lineHeight="8" mt="6" mb="9"
            >
              Faça login para começar
        </Text>
          </Box>
          <Box>

            <Icon
              as={FaGithub}
              fontSize="5xl"
              background="blue.800"
              color="white"
              borderRadius="full"
              onClick={() => signIn('github')}
              _hover={{
                background: "white", color: "blue.800", cursor: "pointer"
              }} />
          </Box>
        </Stack>
      </Flex>
    </Flex>
  )
}
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  if (!!session) {
    console.log('Index')
    return {
      redirect: {
        destination: '/app',
        permanent: false
      }
    }
  }

  return {
    props: {

    }
  }
}