import { Box, Text, VStack } from "@chakra-ui/react";

interface IProp {
  messages: Array<{ content: string; isMine: boolean }>;
}
const ChatMessages = ({ messages }: IProp) => {
  return (
    <Box
      flex={1}
      bg="white"
      p={4}
      borderRadius="md"
      overflowY="auto"
      boxShadow="sm"
    >
      <VStack align="stretch">
        {messages &&
          messages.map((msg, idx) => (
            <Box
              key={idx}
              p={3}
              bg="blue.50"
              borderRadius="md"
              boxShadow="sm"
              alignSelf={msg.isMine ? "flex-end" : "flex-start"}
            >
              <Text fontSize="md" color="gray.800">
                {msg.content}
              </Text>
            </Box>
          ))}
      </VStack>
    </Box>
  );
};

export default ChatMessages;
