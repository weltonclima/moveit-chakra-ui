import {
  Avatar, Box, Flex, Heading, Img, Table,
  Tbody, Text, Thead, Tr, useBreakpointValue
} from "@chakra-ui/react";
import { Td } from "./Td";
import { Th } from "./Th";

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

interface LoaderBoardProps {
  users: User[];
}

export function LoaderBoard({ users }: LoaderBoardProps) {
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  })
  return (
    <Flex justifyContent="center" h="100vh" w="100vw" mx={["1", "0"]} >
      <Box w="100%" mx={0} my="auto" maxW="992px">
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
                  borderRight="4px" borderRightColor="gray.200"
                  borderTopLeftRadius="xl"
                  borderBottomLeftRadius="xl"
                  borderBottomWidth="8px"
                >
                  {index + 1}
                </Td>
                <Td lineHeight="4"
                  fontSize="xl"
                  fontWeight="bold"
                  fontStyle="normal"
                  bl={true}
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
                    <Td
                      borderTopRightRadius="xl"
                      borderBottomRightRadius="xl"
                      borderBottomWidth="8px"
                    >
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