import { Box, Flex, FlexProps, Text } from '@chakra-ui/layout';
import { useChallengesContext } from '../hooks/useHooks';

type ExperienceBarProps = FlexProps

export function ExperienceBar({...rest}:ExperienceBarProps) {
  const { currentExperience, experienceToNextLevel } = useChallengesContext()
  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return (
    <Flex as="header"
      alignItems="center" py="4" px={["2","4"]} maxW="992px"
      {...rest}
    >
      <Text as="span" fontSize="1rem">0 xp</Text>
      <Box h="4px" flex="1" my="0" mx="1.5rem"
        position="relative"
        borderRadius="4px"
        background="gray.300"
      >
        <Box h="4px" borderRadius="4px" background="green"
          style={{ width: `${percentToNextLevel}%` }}
        />
        <Text as="span" top="3"
          pos="absolute"
          style={{
            left: `${percentToNextLevel}%`, transform: "translateX(-50%)"
          }}
        >
          {currentExperience} xp
        </Text>
      </Box>
      <span>{experienceToNextLevel} xp</span>
    </Flex>
  );
}