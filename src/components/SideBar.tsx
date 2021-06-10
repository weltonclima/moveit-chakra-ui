import { Icon, Flex, Img, FlexProps } from "@chakra-ui/react";
import { signOut } from "next-auth/client";
import { useRouter } from "next/dist/client/router";
import { FiHome, FiLogOut } from 'react-icons/fi';
import { RiMedalLine } from 'react-icons/ri';

type SideBarProp = FlexProps

export function SideBar({ ...rest }: SideBarProp) {
  const router = useRouter();

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