import { Link as ChakraLink, Flex, FlexProps, Icon, Img } from "@chakra-ui/react";
import { signOut } from "next-auth/client";
import { FiHome, FiLogOut } from 'react-icons/fi';
import { RiMedalLine } from 'react-icons/ri';
import { ActiveLink } from "./ActiveLink";

type SideBarProp = FlexProps

export function SideBar({ ...rest }: SideBarProp) {

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
        <ActiveLink href="/app" passHref>
          <ChakraLink my="2">
            <Icon as={FiHome} fontSize="2xl" />
          </ChakraLink>
        </ActiveLink>
        <ActiveLink href="/loaderboard" passHref>
          <ChakraLink my="2">
            <Icon as={RiMedalLine} fontSize="2xl" />
          </ChakraLink>
        </ActiveLink>
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