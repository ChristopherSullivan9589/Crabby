import React from 'react';
import { View, Text, StyleSheet, Pressable, Image, ScrollView, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

export default function AlbumsPage() {
  const router = useRouter();

  const albums = [
    {
      id: '1',
      title: 'Lakers Legacy',
      type: 'Album',
      artist: 'The Lakers',
      imageUrl: require('../Components/LakersAlbum.png')
    },
    {
      id: '2',
      title: 'Cleveland Classics',
      type: 'Album',
      artist: 'The Cavs',
      imageUrl: require('../Components/CavsAlbum.png')
    }
  ];

  const renderAlbumRow = (album) => (
    <View key={album.id} style={styles.albumRow}>
      <View style={styles.albumInfo}>
        <Image
          source={album.imageUrl}
          style={styles.albumImage}
        />
        <View style={styles.albumTextContainer}>
          <Text style={styles.albumTitle}>{album.title}</Text>
          <Text style={styles.albumDetails}>
            {album.type} • {album.artist}
          </Text>
        </View>
      </View>
      <Pressable style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
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
          <Text style={styles.title}>Albums</Text>
        </View>

        <ScrollView style={styles.albumList}>
          {albums.map(album => renderAlbumRow(album))}
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
  albumList: {
    flex: 1,
    paddingHorizontal: 16,
    marginBottom: 80, // Space for navbar
  },
  albumRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  albumInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  albumImage: {
    width: 56,
    height: 56,
    marginRight: 12,
  },
  albumTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  albumTitle: {
    color: '#FDB927',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  albumDetails: {
    color: '#B3B3B3',
    fontSize: 14,
  },
  addButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#FDB927',
    fontSize: 24,
    fontWeight: 'bold',
  },
});