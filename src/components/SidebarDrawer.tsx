import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  Link,
  Stack,
  Text
} from "@chakra-ui/react";
import { signOut } from "next-auth/client";
import { useRouter } from "next/router";
import { FiHome, FiLogOut } from "react-icons/fi";
import { RiMedalLine } from "react-icons/ri";
import { useCountDownContext } from "../hooks/useHooks";

export function SidebarDrawer() {
  const router = useRouter();
  const { isOpen, onClose } = useCountDownContext();

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