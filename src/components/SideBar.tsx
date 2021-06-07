import {
  Icon, Flex, Img, useBreakpointValue, Drawer, DrawerOverlay,
  DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody,
  FlexProps, Link, Text, Stack
} from "@chakra-ui/react";
import { getSession, signOut } from "next-auth/client";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { FaGithub } from 'react-icons/fa';
import { FiHome, FiLogOut } from 'react-icons/fi';
import { RiMedalLine } from 'react-icons/ri';
import { useSidebarDrawer } from "../contexts/SidebarDrawerContext";
import { api } from "../services/api";

type SideBarProp = FlexProps

export function SideBar({ ...rest }: SideBarProp) {
  const router = useRouter();
  const [home, setHome] = useState(true);
  const [provider, setProvider] = useState('');

  useEffect(() => {
    async function getUser() {
      const session = await getSession();
      if (!session) {
        return
      }
      const res = await api.get('/user');
      console.log(res.data)
      setProvider(res.data.provider)
    }
    getUser()
  }, [])
  const { isOpen, onClose } = useSidebarDrawer();
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  })

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} >
        <DrawerOverlay>
          <DrawerContent bg="gray.200">
            <DrawerCloseButton mt="6" />
            <DrawerHeader>Move.It</DrawerHeader>
            <DrawerBody>
              <Stack spacing="4" mt="8" align="stretch" >
                <Link display="flex" align="center"
                  onClick={() => router.push("/app")}
                >
                  <Icon as={FiHome} fontSize="20" />
                  <Text ml="4" fontWeight="medium">Início</Text>
                </Link>
                <Link display="flex" align="center"
                  onClick={() => router.push("/loaderboard")}
                >
                  <Icon as={RiMedalLine} fontSize="20" />
                  <Text ml="4" fontWeight="medium">Ranking</Text>
                </Link>
                <Link display="flex" align="center"
                  onClick={() => signOut()}
                >
                  <Icon as={FiLogOut} fontSize="20" />
                  <Text ml="4" fontWeight="medium">Sair</Text>
                </Link>
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    )
  }
  return (
    <Flex as="aside" py="2" px="4" {...rest}
      bg="gray.100"
      style={{ borderRadius: "0 5px 5px 0" }}
      flexDirection="column"
      justifyContent="space-between"
      boxShadow="md"
      alignItems="center">
      <Img src="LogoSideBar.svg" alt="Logo" w="8" />
      <Flex flexDirection="column">
        <Icon as={FiHome} fontSize="2xl" color="gray.360"
          onClick={() => router.push("/app")} my="2"
          _hover={{ color: "blue.800", cursor: "pointer" }}
        />
        <Icon as={RiMedalLine} fontSize="2xl" color="gray.360"
          onClick={() => router.push("/loaderboard")} my="2"
          _hover={{ color: "blue.800", cursor: "pointer" }}
        />
      </Flex>
      <Icon
        as={FiLogOut}
        fontSize="3xl"
        background="white"
        color="blue.800"
        borderRadius="md"
        onClick={() => signOut()}
        _hover={{
          background: "blue.800", color: "white", cursor: "pointer"
        }} />
    </Flex>
  );
}