import { 
  Box, 
  VStack, 
  Heading, 
  Text, 
  Button, 
  Center,
  HStack,
  Pressable,
  IconButton
} from 'native-base';
import { router } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

export default function SignUp() {
  return (
    <Box flex={1} bg="white" safeAreaTop>
      
      {/* Header with Back Button */}
      <HStack alignItems="center" px={6} py={4}>
        <IconButton
          icon={<MaterialIcons name="arrow-back" size={24} color="#374151" />}
          onPress={() => router.back()}
          variant="ghost"
          _pressed={{ bg: "gray.100" }}
        />
        <Heading size="md" color="gray.800" ml={2}>
          Create Account
        </Heading>
      </HStack>

      <Center flex={1} px={6}>
        <VStack space={6} alignItems="center" w="100%">
          
          <Text color="gray.600" textAlign="center" fontSize="md">
            Join Trekester and start packing smarter
          </Text>

          {/* Sign Up Form Placeholder */}
          <VStack space={4} w="100%">
            <Button
              size="lg"
              bg="blue.500"
              _pressed={{ bg: "blue.600" }}
              rounded="xl"
              onPress={() => {
                // TODO: Navigate to actual signup form
                console.log('Sign up pressed');
              }}
            >
              <Text color="white" fontSize="md" fontWeight="medium">
                Get Started
              </Text>
            </Button>
          </VStack>

          {/* Already have account */}
          <HStack alignItems="center" space={1}>
            <Text color="gray.500" fontSize="sm">
              Already have an account?
            </Text>
            <Pressable onPress={() => router.replace('/(auth)/login')}>
              <Text color="blue.500" fontSize="sm" fontWeight="medium">
                Sign In
              </Text>
            </Pressable>
          </HStack>

        </VStack>
      </Center>
    </Box>
  );
}
