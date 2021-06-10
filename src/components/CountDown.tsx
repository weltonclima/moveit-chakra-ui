import { Button } from '@chakra-ui/button';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { useCountDownContext } from '../hooks/useHooks';
import { LevelUpModal } from './LevelUpModal';

export function CountDown() {
  const { minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountdown,
    startCountdown
  } = useCountDownContext()
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <Box px={["1","0"]}>
      <Flex
        alignItems="center" fontFamily="Rajdhani"
        fontWeight="600" color="gray.500"
      >
        <Flex flex="1" alignItems="center" justifyContent="space-evenly"
          background="gray.100" boxShadow="md" borderRadius="md"
          fontSize="8.5rem" textAlign="center"
        >
          <Text flex="1" borderRight="1px" borderColor="gray.200">
            {minuteLeft}
          </Text>
          <Text flex="1" borderLeft="1px" borderColor="gray.200">
            {minuteRight}
          </Text>
        </Flex>

        <Text fontSize="6.25rem" m="0 0.5rem">:</Text>
        <Flex flex="1" alignItems="center" justifyContent="space-evenly"
          background="gray.100" boxShadow="md" borderRadius="md"
          fontSize="8.5rem" textAlign="center"
        >
          <Text flex="1" borderRight="1px" borderColor="gray.200">
            {secondLeft}
          </Text>
          <Text flex="1" borderLeft="1px" borderColor="gray.200">
            {secondRight}
          </Text>
        </Flex>
      </Flex>

      {hasFinished ? (
        <Button
          w="100%" h="20" m="2rem 0 1rem 0"
          border="0" borderRadius="md"
          fontSize="x-large" fontWeight="extrabold"
          _hover={{ color: "gray.500", background: "gray.100" }}
          disabled
        >
          Ciclo encerrado
        </Button>
      ) : (
        <>
          {isActive ? (
            <Button
              w="100%" h="20" m="2rem 0 1rem 0"
              border="0" borderRadius="md"
              fontSize="x-large" fontWeight="extrabold"
              _hover={{ color: "gray.100", background: "red" }}
              onClick={resetCountdown}
            >
              Abandonar ciclo
            </Button>
          ) : (
            <Button
              w="100%" h="20" m="2rem 0 1rem 0"
              background="blue.800" color="gray.100"
              border="0" borderRadius="md"
              fontSize="x-large" fontWeight="extrabold"
              _hover={{ color: "gray.100", background: "blue.900" }}
              onClick={startCountdown}
            >
              Iniciar um Ciclo
            </Button>
          )}
        </>
      )}
      <LevelUpModal />
    </Box>
  );
}