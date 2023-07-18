import { Img } from '@chakra-ui/image';
import { Avatar, Box, Flex, HStack, Stack, Text } from '@chakra-ui/react';
import { useSession } from 'next-auth/client';
import { useChallengesContext } from '../hooks/useHooks';

export function Profile() {
  const { level, challengesCompleted } = useChallengesContext();
  const [session] = useSession()

  return (
    <Box alignItems="center" mt="2" px={["1", "0"]}>
      <HStack>
        <Avatar size="lg" src={session?.user.image} alt={session?.user.name} />
        <Stack>
          <Text as="strong" fontSize="1.5rem" fontWeight="600" color="gray.500">
            {session?.user.name}
          </Text>
          <Text fontSize="1rem" mt="2">
            <Flex>
              <Img mr="2" src="icons/level.svg" alt="Level" />
              Level {level}
            </Flex>
          </Text>
        </Stack>
      </HStack>
      <Flex px={["1", "0"]}
        alignItems="center" justifyContent="space-between"
        m="2rem 0" pb="4" borderBottom="1px" borderColor="gray.350"
      >
        <Text fontSize="1.25rem">Desfios completos </Text>
        <Text fontSize="1.5rem">{challengesCompleted}</Text>
      </Flex>
    </Box>
  );
}
