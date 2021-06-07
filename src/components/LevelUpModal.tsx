import {
  Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text
} from '@chakra-ui/react';
import { useChallengesContext } from '../hooks/useHooks';

export function LevelUpModal() {
  const { level, isOpen, onClose } = useChallengesContext();
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="400px">
        <ModalCloseButton />
        <ModalBody w="100%" textAlign="center">
          <Text fontSize="8.75rem" fontWeight="600" color="blue.800"
            style={{ background: "url('/icons/levelup.svg') no-repeat center" }}
          >
            {level}
          </Text>

          <Text fontSize="2.25rem" color="gray.500" as="strong" mb="4">
            Parabéns
            </Text>
          <Text fontSize="1.25rem" color="gray.500">
            Você alcançou um novo level.
            </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}