import { Box, Button, ChakraProvider, Flex, Heading, Image, Input, Radio, RadioGroup, Stack, Text, VStack } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaSignInAlt, FaUserPlus, FaPlus } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [loginMode, setLoginMode] = useState("browse"); // 'browse' or 'member'
  const [organizationType, setOrganizationType] = useState("existing"); // 'existing' or 'new'
  const [participantsCount, setParticipantsCount] = useState("alone"); // 'alone', 'plusOne', or 'plusTwo'

  return (
    <ChakraProvider>
      <Box p={8}>
        <Heading mb={4}>Welcome to Eventinder</Heading>
        <Text fontSize="lg" mb={6}>
          Discover and participate in events, or create your own.
        </Text>
        <Flex direction="column" align="center" mb={10}>
          <Button leftIcon={<FaSignInAlt />} colorScheme="teal" variant="solid" onClick={() => setLoginMode("member")} mb={2}>
            Membership Login
          </Button>
          <Button leftIcon={<FaMapMarkerAlt />} colorScheme="gray" variant="outline" onClick={() => setLoginMode("browse")}>
            Browse as Guest
          </Button>
        </Flex>

        {loginMode === "member" && (
          <VStack spacing={4}>
            <Button leftIcon={<FaUserPlus />} colorScheme="pink" onClick={() => setOrganizationType("existing")} isFullWidth>
              Join an Existing Event
            </Button>
            <Button leftIcon={<FaPlus />} colorScheme="purple" onClick={() => setOrganizationType("new")} isFullWidth>
              Create a New Event
            </Button>
            {organizationType === "new" && (
              <Box w="100%">
                <Text mb={2}>How many people will participate?</Text>
                <RadioGroup onChange={setParticipantsCount} value={participantsCount}>
                  <Stack direction="row">
                    <Radio value="alone">Alone</Radio>
                    <Radio value="plusOne">+1 Friend</Radio>
                    <Radio value="plusTwo">+2 Friends</Radio>
                  </Stack>
                </RadioGroup>
              </Box>
            )}
          </VStack>
        )}

        <Box mt={10}>
          <Heading size="md" mb={4}>
            Upcoming Events Map
          </Heading>
          {/* This would be replaced with an actual map component */}
          <Box bg="gray.200" w="100%" h="300px" borderRadius="md">
            <Text p={4}>Map Placeholder</Text>
          </Box>
          <Flex justify="center" mt={4}>
            <Button colorScheme="orange" isFullWidth>
              Participate in an Event
            </Button>
          </Flex>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
