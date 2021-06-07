import { Img } from '@chakra-ui/image';
import { HStack, Stack, Text, Avatar, Flex, Box } from '@chakra-ui/react';
import { useSession } from 'next-auth/client';
import { useChallengesContext } from '../hooks/useHooks';

export function Profile() {
  const { level } = useChallengesContext();
  const [session] = useSession()

  return (
    <Flex alignItems="center" mt="2" px={["1","0"]}>
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
    </Flex>
  );
}
