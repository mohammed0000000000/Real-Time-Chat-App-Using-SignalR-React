import { Grid, GridItem } from "@chakra-ui/react";

const ChatPage = () => {
  return (
    <center>
      <Grid
        h="100vh"
        w={"80%"}
        templateRows="repeat(4, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={1}
        padding={"3rem"}
      >
        <GridItem rowSpan={1} colSpan={5} background={"orange"}>
          <h1>Chat Room</h1>
        </GridItem>
        <GridItem colSpan={1} rowSpan={3} background={"red"}>
          <h3>Online User</h3>
        </GridItem>
        <GridItem colSpan={4} rowSpan={3} background={"green"}>
          <h3>chat</h3>
        </GridItem>
      </Grid>
      )
    </center>
  );
};

export default ChatPage;
