import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import {
  NativeBaseProvider,
  Box,
  HStack,
  Pressable,
  Text,
} from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import 'react-native-reanimated';

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  
  // Simple state for active tab instead of usePathname/useSegments
  const [activeTab, setActiveTab] = useState<string>('login');

  // Always call the same number of hooks
  if (!loaded) {
    return null;
  }

  const Tab = ({
    route,
    icon,
    label,
  }: {
    route: string;
    icon: keyof typeof MaterialIcons.glyphMap;
    label: string;
  }) => {
    const isActive = activeTab === label.toLowerCase();
    
    return (
      <Pressable
        flex={1}
        alignItems="center"
        py={3}
        _pressed={{ opacity: 0.7 }}
        onPress={() => {
          setActiveTab(label.toLowerCase());
          router.replace(route as any);
        }}
      >
        <MaterialIcons
          name={icon}
          size={22}
          color={isActive ? '#3B82F6' : '#9CA3AF'}
        />
        <Text
          mt={1}
          fontSize="xs"
          fontWeight="500"
          color={isActive ? '#3B82F6' : '#9CA3AF'}
        >
          {label}
        </Text>
      </Pressable>
    );
  };

  return (
    <NativeBaseProvider>
      <ThemeProvider value={DefaultTheme}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="welcome" />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>

      {/* DEV NAV - Simple fixed version */}
      <Box
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        bg="white"
        borderTopWidth={1}
        borderTopColor="#E5E7EB"
        shadow={2}
      >
        <HStack>
          <Tab route="/(auth)/login" icon="login" label="Login" />
          <Tab route="/welcome" icon="home" label="Welcome" />
          <Tab route="/(tabs)/trips" icon="folder" label="Trips" />
        </HStack>
      </Box>
    </NativeBaseProvider>
  );
}
