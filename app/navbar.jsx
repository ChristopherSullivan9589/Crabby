import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter, usePathname } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <View style={styles.navbar}>
      <Pressable
        style={styles.navItem}
        onPress={() => router.push('/')}
      >
        <FontAwesome 
          name="home" 
          size={24} 
          color={isActive('/') ? '#FDB927' : '#FFFFFF'} 
        />
        <Text style={[
          styles.navText,
          isActive('/') && styles.activeText
        ]}>
          Home
        </Text>
      </Pressable>

      <Pressable
        style={styles.navItem}
        onPress={() => router.push('/SearchPage')}
      >
        <FontAwesome 
          name="search" 
          size={24} 
          color={isActive('/SearchPage') ? '#FDB927' : '#FFFFFF'} 
        />
        <Text style={[
          styles.navText,
          isActive('/SearchPage') && styles.activeText
        ]}>
          Search
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    backgroundColor: '#552583',
    paddingVertical: 10,
    paddingBottom: 25, // Extra padding for bottom safe area
    borderTopWidth: 1,
    borderTopColor: '#301934',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navText: {
    color: '#FFFFFF',
    marginTop: 4,
    fontSize: 12,
  },
  activeText: {
    color: '#FDB927', // Lakers gold
  },
});
