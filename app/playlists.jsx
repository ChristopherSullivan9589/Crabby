import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

export default function PlaylistsPage() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#552583', '#301934']}
        style={styles.gradient}
      >
        <Pressable
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>← Back</Text>
        </Pressable>
        <Text style={styles.title}>Playlists</Text>
        {/* Add your playlists content here */}
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FDB927',
    marginTop: 48,
    marginBottom: 24,
  },
  backButton: {
    position: 'absolute',
    top: 48,
    left: 16,
    zIndex: 1,
  },
  backButtonText: {
    color: '#FDB927',
    fontSize: 16,
    fontWeight: 'bold',
  },
});