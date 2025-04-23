import React from 'react';
import { View, Text, StyleSheet, Pressable, Image, ScrollView, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

export default function ArtistsPage() {
  const router = useRouter();

  const artists = [
    {
      id: '1',
      name: 'Lesmirk',
      verified: true,
      imageUrl: require('../Components/Lesmirk.png')
    },
    {
      id: '2',
      name: 'Le taco',
      verified: true,
      imageUrl: require('../Components/LeTaco.png')
    }
  ];

  const renderArtistRow = (artist) => (
    <View key={artist.id} style={styles.artistRow}>
      <View style={styles.artistInfo}>
        <Image
          source={artist.imageUrl}
          style={styles.artistImage}
        />
        <View style={styles.artistNameContainer}>
          <Text style={styles.artistName}>
            {artist.name}
            {artist.verified && (
              <Text style={styles.verifiedBadge}> 🔵</Text>
            )}
          </Text>
        </View>
      </View>
      <Pressable style={styles.followButton}>
        <Text style={styles.followButtonText}>Follow</Text>
      </Pressable>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#552583', '#301934']}
        style={styles.gradient}
      >
        <View style={styles.header}>
          <Pressable
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backButtonText}>← Back</Text>
          </Pressable>
          <Text style={styles.title}>Artists</Text>
        </View>

        <ScrollView style={styles.artistList}>
          {artists.map(artist => renderArtistRow(artist))}
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#552583',
  },
  gradient: {
    flex: 1,
  },
  header: {
    padding: 16,
    paddingTop: 48,
    marginBottom: 16,
  },
  backButton: {
    marginBottom: 16,
  },
  backButtonText: {
    color: '#FDB927',
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FDB927',
    marginBottom: 8,
  },
  artistList: {
    flex: 1,
    paddingHorizontal: 16,
    marginBottom: 80, // Space for navbar
  },
  artistRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  artistInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  artistImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  artistNameContainer: {
    flex: 1,
  },
  artistName: {
    color: '#FDB927',
    fontSize: 16,
    fontWeight: '500',
  },
  verifiedBadge: {
    fontSize: 14,
  },
  followButton: {
    borderColor: '#FDB927',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  followButtonText: {
    color: '#FDB927',
    fontSize: 14,
    fontWeight: '600',
  },
});