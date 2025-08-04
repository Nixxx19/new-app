import { useRef } from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
  Button,
  Image,
  ScrollView,
  Pressable,
} from 'native-base';
import { router } from 'expo-router';
import { Animated, SafeAreaView } from 'react-native';

export default function Welcome() {
  /* ---------- tiny press-scale animation ---------- */
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const pressIn  = () =>
    Animated.spring(scaleAnim, { toValue: 0.97, useNativeDriver: true }).start();
  const pressOut = () =>
    Animated.spring(scaleAnim, { toValue: 1,    useNativeDriver: true }).start();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <Box flex={1} px={6} justifyContent="center">
          <VStack space={10} alignItems="center" w="100%" maxW="400px" alignSelf="center">
            {/* Illustration */}
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80',
              }}
              alt="Packing bags"
              resizeMode="contain"
              height={250}
              borderRadius={20}
              fadeDuration={300}
            />

            {/* Headline */}
            <VStack space={2} alignItems="center">
              <Heading size="xl" color="gray.800" textAlign="center">
                Ready to pack?
              </Heading>
              <Text color="gray.500" textAlign="center" fontSize="md">
                Let’s start organizing your next adventure.
              </Text>
            </VStack>

            {/* Get-Started button with press animation */}
            <Pressable
              onPressIn={pressIn}
              onPressOut={pressOut}
              onPress={() => router.replace('/(tabs)/trips')}
            >
              <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                <Button
                  size="lg"
                  rounded="xl"
                  bg="blue.500"
                  _pressed={{ bg: 'blue.600' }}
                  w="100%"
                >
                  Get Started
                </Button>
              </Animated.View>
            </Pressable>
          </VStack>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}
