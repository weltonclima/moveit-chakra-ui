import {
  Avatar, Box, Flex, Heading, Img, Table,
  Tbody, Text, Thead, Tr, useBreakpointValue
} from "@chakra-ui/react";
import { User } from "../../pages/loaderboard";
import { Td } from "./Td";
import { Th } from "./Th";

interface LoaderBoardProps {
  users: User[];
}

export function LoaderBoard({ users }: LoaderBoardProps) {
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  })
  return (
    <Flex justifyContent="center" h="100vh" w="100vw">
      <Box w="100%" my="auto" maxW="992px" mx={["0", "1"]} >
        <Heading my="4" lineHeight="8" color="gray.500" fontSize="3xl">
          LeaderBoard
        </Heading>
        <Table variant="unstyled">
          <Thead>
            <Tr>
              <Th textAlign="center" p="0" >POSIÇÃO</Th>
              <Th>USUÁRIO</Th>
              {!isDrawerSidebar &&
                <>
                  <Th>DESAFIOS</Th>
                  <Th>EXPERIÊNCIA</Th>
                </>
              }
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user, index) => (
              <Tr key={user.data.id}>
                <Td
                  textAlign="center"
                  borderRightWidth="4px" borderRightColor="gray.200"
                  bl={true}
                >
                  {index + 1}
                </Td>
                <Td lineHeight="4"
                  fontSize="xl"
                  fontWeight="bold"
                  fontStyle="normal"
                >
                  <Flex>
                    <Avatar src={user.data.avatar_url} alt={user.data.name} mr="2" />
                    <Box>
                      <Text>{user.data.name}</Text>
                      <Flex alignItems="flex-start" mt="2">
                        <Img src="icons/level.svg" alt="Level" mr="2" />
                        <Text as="small">{user.data.level}</Text>
                      </Flex>
                    </Box>
                  </Flex>
                </Td>
                {!isDrawerSidebar &&
                  <>
                    <Td>
                      <Text as="span" color="blue.800">
                        {user.data.challengesCompleted}
                      </Text> completados
                        </Td>
                    <Td br={true} >
                      <Text as="span" color="blue.800">
                        {user.data.currentExperience}
                      </Text> xp
                    </Td>
                  </>
                }
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Flex>
  )
}