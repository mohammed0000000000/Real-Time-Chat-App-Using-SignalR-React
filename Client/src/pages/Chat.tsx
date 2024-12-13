import ChatInput from "@/components/ChatInput";
import ChatMessages from "@/components/ChatMessage";
import OnlineUser from "@/components/OnlineUser";
import { Grid, GridItem, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";

interface Message {
  content: string;
  isMine: boolean;
}
const ChatPage = () => {
  // Define styles for reusability
  const styles = {
    gridContainer: {
      h: "100vh",
      w: "80%",
      templateRows: "repeat(4, 1fr)",
      templateColumns: "repeat(5, 1fr)",
      gap: 4,
      p: "3rem",
    },
    header: {
      bg: "blue.500", // Header with a professional accent color
      color: "white", // White text for contrast
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "md",
      borderRadius: "md",
    },
    onlineUser: {
      bg: "gray.100", // Light neutral background for online users
      p: 4,
      borderRadius: "md",
      boxShadow: "md",
    },
    chatArea: {
      bg: "white", // White for the main chat area to keep it clean and minimal
      p: 4,
      borderRadius: "md",
      boxShadow: "md",
    },
  };

  const [messages, setMessages] = useState<Message[]>([]);

  const handleSendMessage = (newMessage: string) => {
    setMessages([...messages, { content: newMessage, isMine: true }]);
  };
  return (
    <Flex justifyContent="center" alignItems="center" bg="gray.50">
      <Grid {...styles.gridContainer}>
        {/* Header */}
        <GridItem rowSpan={1} colSpan={5} {...styles.header}>
          <Heading size="2xl">Chat Room</Heading>
        </GridItem>

        {/* Online Users */}
        <GridItem colSpan={1} rowSpan={3} {...styles.onlineUser}>
          <OnlineUser />
        </GridItem>

        {/* Chat Area */}
        <GridItem
          colSpan={4}
          rowSpan={3}
          {...styles.chatArea}
          display={"flex"}
          flexDirection={"column"}
        >
          {/* Add chat content here */}
          <ChatMessages messages={messages} />
          <ChatInput onSendMessage={handleSendMessage} />
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default ChatPage;
