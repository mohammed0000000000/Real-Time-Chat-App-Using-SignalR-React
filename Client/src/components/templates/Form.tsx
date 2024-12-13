"use client";
import { Flex, Input, Stack, Button, Heading, Text } from "@chakra-ui/react";
import { useColorModeValue } from "../ui/color-mode";
import {
  FormControl,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/form-control";
import { ChangeEvent, FormEvent, useState } from "react";
import { AppDispatch } from "@/app/store";
import { useDispatch } from "react-redux";
import { addUser } from "@/app/features/userSlice";
import { useNavigate } from "react-router-dom";
import cookiesServices from "@/services/cookiesServices";
const JoinCard = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate(); // useNavigate hook for navigation

  // * State
  const [data, setData] = useState<{ name: string; chatRoom: string }>({
    name: "",
    chatRoom: "",
  });
  const [errors, setErrors] = useState<{ name: string; chatRoom: string }>({
    name: "",
    chatRoom: "",
  });

  // * Handlers
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    if (value) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
  };
  const validateInput = (): boolean => {
    if (data.name.length === 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "* Name is required",
      }));
      setData((prevData) => ({ ...prevData, chatRoom: "" }));
      return false;
    }
    if (data.name.length < 2) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "* Name Must Be At least 3 characters",
      }));
      setData((prevData) => ({ ...prevData, chatRoom: "" }));
      return false;
    }
    if (data.chatRoom.length === 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        chatRoom: "* Chat Room is required",
      }));
      return false;
    }
    if (data.chatRoom.length < 2) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        chatRoom: "* ChatRoom Must Be At least 3 characters",
      }));
      return false;
    }
    return true;
  };
  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateInput()) return;
    // if

    // some logic
    dispatch(addUser(data.name));
    setData({
      name: "",
      chatRoom: "",
    });
    cookiesServices.setCookie("user", data.name);
    cookiesServices.setCookie("room", data.chatRoom);
    navigate("/room");
  };
  return (
    <Flex
      align="center"
      justify="center"
      bg={useColorModeValue(
        "linear-gradient(to bottom, #e2e8f0, #edf2f7)",
        "linear-gradient(to bottom, #2D3748, #1A202C)"
      )}
      height="100vh"
      p={4}
    >
      <Stack
        mx="auto"
        maxW="lg"
        w="full"
        py={12}
        px={6}
        gap={8}
        bg={useColorModeValue("white", "gray.700")}
        boxShadow="2xl"
        rounded="lg"
      >
        <Stack align={"center"}>
          <Heading
            fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            fontWeight="bold"
            textAlign="center"
          >
            Join to your ChatRoom
          </Heading>
          <Text
            fontSize={{ base: "md", sm: "lg" }}
            color={useColorModeValue("gray.600", "gray.300")}
            textAlign="center"
          >
            to enjoy all of our cool{" "}
            <Text as="span" color="blue.400">
              features
            </Text>{" "}
            ✌️
          </Text>
        </Stack>
        <form
          style={{
            borderRadius: "0.5rem",
            background: useColorModeValue("white", "gray.700"),
            boxShadow: "2xl",
            padding: "2rem",
          }}
          onSubmit={onSubmitHandler}
        >
          <Stack gap={"1.5rem"}>
            <FormControl id="name">
              <FormLabel fontWeight="bold">UserName</FormLabel>
              <Input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                onChange={onChangeHandler}
                bg={useColorModeValue("gray.100", "gray.800")}
                borderColor={useColorModeValue("gray.300", "gray.600")}
                _hover={{ borderColor: "blue.400" }}
                _focus={{
                  borderColor: "blue.500",
                  boxShadow: "0 0 0 1px blue.500",
                }}
              />
              {errors.name && (
                <FormHelperText color="red" fontSize={"small"} py={"2px"}>
                  {errors.name}
                </FormHelperText>
              )}
            </FormControl>
            <FormControl id="ChatRoom">
              <FormLabel fontWeight="bold">ChatRoom</FormLabel>
              <Input
                type="text"
                name="chatRoom"
                placeholder="Enter ChatRoom Name"
                onChange={onChangeHandler}
                bg={useColorModeValue("gray.100", "gray.800")}
                borderColor={useColorModeValue("gray.300", "gray.600")}
                _hover={{ borderColor: "blue.400" }}
                _focus={{
                  borderColor: "blue.500",
                  boxShadow: "0 0 0 1px blue.500",
                }}
              />
              {errors.chatRoom && (
                <FormHelperText color="red" fontSize={"small"} py={"2px"}>
                  {errors.chatRoom}
                </FormHelperText>
              )}
            </FormControl>
            <Stack>
              <Button
                type="submit"
                bg="blue.400"
                color="white"
                fontWeight="bold"
                _hover={{
                  bg: "blue.500",
                  transform: "scale(1.05)",
                }}
                _active={{
                  bg: "blue.600",
                  transform: "scale(0.95)",
                }}
                transition="all 0.2s ease-in-out"
              >
                Join
              </Button>
            </Stack>
          </Stack>
        </form>
      </Stack>
    </Flex>
  );
};

export default JoinCard;
