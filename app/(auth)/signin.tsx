import { useState } from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
  Button,
  HStack,
  Pressable,
  IconButton,
  Alert,
} from 'native-base';
import { router } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSignIn = async () => {
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    setError('');
    setLoading(true);
    try {
      await new Promise(res => setTimeout(res, 800));
      router.replace('/welcome');
    } catch {
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      enableOnAndroid                                 // smoother Android push-up
      extraScrollHeight={Platform.OS === 'ios' ? 30 : 50}
      keyboardShouldPersistTaps="handled"
    >
      <Box flex={1} bg="white" safeAreaTop>
        {/* Header */}
        <HStack alignItems="center" px={6} py={4}>
          <IconButton
            icon={<MaterialIcons name="arrow-back" size={24} color="#374151" />}
            onPress={() => router.back()}
            variant="ghost"
            _pressed={{ bg: 'gray.100' }}
          />
          <Heading size="md" ml={2} color="gray.800">
            Sign In
          </Heading>
        </HStack>

        {/* Form */}
        <Box flex={1} px={6} justifyContent="center">
          <VStack space={6} w="100%" maxW="400px" alignSelf="center">
            <VStack space={2} alignItems="center">
              <Heading size="lg" color="gray.800">
                Welcome back
              </Heading>
              <Text color="gray.500" textAlign="center">
                Sign in to continue your packing journey
              </Text>
            </VStack>

            {error ? (
              <Alert status="error" rounded="md">
                <Alert.Icon />
                <Text color="error.600">{error}</Text>
              </Alert>
            ) : null}

            <VStack space={4}>
              {/* Email */}
              <VStack space={2}>
                <Text fontSize="sm" fontWeight="medium" color="gray.700">
                  Email
                </Text>
                <View style={styles.inputContainer}>
                  <MaterialIcons
                    name="email"
                    size={20}
                    color="#9CA3AF"
                    style={styles.leftIcon}
                  />
                  <TextInput
                    style={styles.textInput}
                    placeholder="you@example.com"
                    placeholderTextColor="#9CA3AF"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    returnKeyType="next"
                    keyboardAppearance="light"          // light keyboard
                    value={email}
                    onChangeText={setEmail}
                  />
                </View>
              </VStack>

              {/* Password */}
              <VStack space={2}>
                <Text fontSize="sm" fontWeight="medium" color="gray.700">
                  Password
                </Text>
                <View style={styles.inputContainer}>
                  <MaterialIcons
                    name="lock"
                    size={20}
                    color="#9CA3AF"
                    style={styles.leftIcon}
                  />
                  <TextInput
                    style={[styles.textInput, { flex: 1 }]}
                    placeholder="Password"
                    placeholderTextColor="#9CA3AF"
                    secureTextEntry={!showPw}
                    returnKeyType="done"
                    keyboardAppearance="light"          // light keyboard
                    value={password}
                    onChangeText={setPassword}
                    onSubmitEditing={handleSignIn}
                  />
                  <TouchableOpacity
                    onPress={() => setShowPw(!showPw)}
                    style={styles.rightIcon}
                    activeOpacity={0.7}
                  >
                    <MaterialIcons
                      name={showPw ? 'visibility' : 'visibility-off'}
                      size={20}
                      color="#9CA3AF"
                    />
                  </TouchableOpacity>
                </View>
              </VStack>
            </VStack>

            <Button
              size="lg"
              bg="blue.500"
              _pressed={{ bg: 'blue.600' }}
              rounded="xl"
              isLoading={loading}
              onPress={handleSignIn}
            >
              Sign In
            </Button>

            <Pressable onPress={() => router.push('/(auth)/forgot')}>
              <Text color="blue.500" textAlign="center">
                Forgot password?
              </Text>
            </Pressable>

            <HStack justifyContent="center" space={1}>
              <Text color="gray.500">Don't have an account?</Text>
              <Pressable onPress={() => router.push('/(auth)/signup')}>
                <Text color="blue.500" fontWeight="medium">
                  Sign Up
                </Text>
              </Pressable>
            </HStack>
          </VStack>
        </Box>
      </Box>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#374151',
    marginLeft: 10,
  },
  leftIcon: {
    marginRight: 6,
  },
  rightIcon: {
    padding: 6,
    marginLeft: 6,
  },
});
