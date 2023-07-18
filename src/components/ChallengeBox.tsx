import {
  Box,
  Button,
  Flex, Heading,
  Img,
  SimpleGrid, Stack, Text
} from '@chakra-ui/react';
import { useChallengesContext, useCountDownContext } from '../hooks/useHooks';

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useChallengesContext();
  const { resetCountdown } = useCountDownContext();

  function handleChallengeSucceeded() {
    completeChallenge()
    resetCountdown();
  }
  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <Flex px={["1","0"]}>
      <Box
        bg="gray.100"
        borderRadius="md"
        boxShadow="md"
        p="1.5rem 2rem"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
      >
        {activeChallenge ? (
          <Flex h="100%">
            <Stack>
              <Heading
                color="blue.800"
                fontWeight="black"
                fontSize="1.25rem"
                p="0 2rem 1.5rem"
                borderTop="1px"
                borderColor="gray.300"
              >Ganhe {activeChallenge.amount}</Heading>
              <Flex
                as="main"
                flex="1"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <img src={`icons/${activeChallenge.type}.svg`} />
                <Text
                  as="strong"
                  fontSize="2rem"
                  fontWeight="600"
                  color="gray.500"
                  m="1.5rem 0 1rem"
                >
                  Novo desafio
              </Text>
                <Text lineHeight="1.5" maxW="70%" mb="4">
                  {activeChallenge.description}
                </Text>
              </Flex>
              <SimpleGrid columns={2} gap="4" >
                <Button h="12"
                  type="button"
                  bg="red"
                  color="gray.100"
                  onClick={handleChallengeFailed}
                  style={{ transition: "filter 0.2s", }}
                  _hover={{ filter: "brightness(0.9)" }}
                >
                  Falhei
              </Button>
                <Button h="12"
                  type="button"
                  bg="green"
                  color="gray.100"
                  onClick={handleChallengeSucceeded}
                  style={{ transition: "filter 0.2s", }}
                  _hover={{ filter: "brightness(0.9)" }}
                >
                  Completei
              </Button>
              </SimpleGrid>
            </Stack>
          </Flex>
        ) : (
          <Flex flexDirection="column" alignItems="center" textAlign="center" >
            <Text as="strong" fontSize="1.5rem" lineHeight="1.4" marginBottom="40">
              Finalize um ciclo para receber um desafio
            </Text>
            <Flex
              flexDirection="column"
              alignItems="center"
              lineHeight="1.4"
              maxW="70%"
            >
              <Img mb="4" src="icons/level-up.svg" alt="Level Up" />
              Avance de level completando desafios.
            </Flex>
          </Flex>
        )}
      </Box>
    </Flex>
  );
}