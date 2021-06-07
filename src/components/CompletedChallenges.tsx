import { Box, Flex, Text } from '@chakra-ui/layout';
import { useChallengesContext } from '../hooks/useHooks';
export function CompletedChallenges() {
  const { challengesCompleted } = useChallengesContext()
  return (
    <Box>
      <Flex px={["1","0"]}
        alignItems="center" justifyContent="space-between"
        m="2rem 0" pb="4" borderBottom="1px" borderColor="gray.350"
      >
        <Text fontSize="1.25rem">Desfios completos </Text>
        <Text fontSize="1.5rem">{challengesCompleted}</Text>
      </Flex>
    </Box>
  );
}