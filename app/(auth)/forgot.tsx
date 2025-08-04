import { 
  Box, 
  VStack, 
  Heading, 
  Text, 
  Button, 
  Center,
  HStack,
  IconButton
} from 'native-base';
import { router } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

export default function ForgotPassword() {
  return (
    <Box flex={1} bg="white" safeAreaTop>
      
      {/* Header */}
      <HStack alignItems="center" px={6} py={4}>
        <IconButton
          icon={<MaterialIcons name="arrow-back" size={24} color="#374151" />}
          onPress={() => router.back()}
          variant="ghost"
          _pressed={{ bg: "gray.100" }}
        />
        <Heading size="md" color="gray.800" ml={2}>
          Reset Password
        </Heading>
      </HStack>

      <Center flex={1} px={6}>
        <VStack space={6} alignItems="center" w="100%">
          
          {/* Icon */}
          <Box 
            w={16} 
            h={16} 
            bg="blue.100" 
            rounded="full" 
            justifyContent="center" 
            alignItems="center"
          >
            <MaterialIcons name="lock-reset" size={32} color="#3B82F6" />
          </Box>

          <VStack space={2} alignItems="center">
            <Text color="gray.600" textAlign="center" fontSize="md">
              Enter your email and we'll send you a link to reset your password
            </Text>
          </VStack>

          <VStack space={4} w="100%">
            <Button
              size="lg"
              bg="blue.500"
              _pressed={{ bg: "blue.600" }}
              rounded="xl"
              onPress={() => {
                // TODO: Implement reset password
                console.log('Reset password pressed');
              }}
            >
              <Text color="white" fontSize="md" fontWeight="medium">
                Send Reset Link
              </Text>
            </Button>
          </VStack>

        </VStack>
      </Center>
    </Box>
  );
}
