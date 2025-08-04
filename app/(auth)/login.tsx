import {
  Box,
  VStack,
  Heading,
  Text,
  Button,
  Center,
  Pressable,
} from 'native-base';
import { router } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

export default function Login() {
  return (
    <Box flex={1} bg="white" safeAreaTop>
      <Center flex={1} px={6}>
        <VStack space={8} alignItems="center" w="100%">

          {/* Logo area */}
          <VStack space={4} alignItems="center">
            <Box
              w={20}
              h={20}
              bg="blue.500"
              rounded="2xl"
              justifyContent="center"
              alignItems="center"
            >
              <MaterialIcons name="luggage" size={48} color="white" />
            </Box>

            <Heading size="xl" color="gray.800">
              Trekester
            </Heading>

            <Text color="gray.500" textAlign="center" fontSize="md">
              Smart packing for every adventure
            </Text>
          </VStack>

          {/* Auth buttons */}
          <VStack space={4} w="100%">
            <Button
              size="lg"
              bg="blue.500"
              _pressed={{ bg: 'blue.600' }}
              rounded="xl"
              onPress={() => router.push('/(auth)/signin')}
            >
              <Text color="white" fontSize="md" fontWeight="medium">
                Sign In
              </Text>
            </Button>

            <Button
              size="lg"
              variant="outline"
              borderColor="gray.300"
              _pressed={{ bg: 'gray.50' }}
              rounded="xl"
              onPress={() => router.push('/(auth)/signup')}
            >
              <Text color="gray.700" fontSize="md" fontWeight="medium">
                Create Account
              </Text>
            </Button>
          </VStack>

          {/* Forgot password */}
          <Pressable onPress={() => router.push('/(auth)/forgot')}>
            <Text color="blue.500" fontSize="sm" fontWeight="medium">
              Forgot Password?
            </Text>
          </Pressable>
        </VStack>
      </Center>
    </Box>
  );
}
