import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

export default function HomePage() {
  const router = useRouter();

  // Mock data for recently played
  const recentlyPlayed = [
    { id: '1', title: 'Daily Mix 1', type: 'Playlist' },
    { id: '2', title: 'Liked Songs', type: 'Playlist' },
    { id: '3', title: 'Hip Hop Mix', type: 'Playlist' },
    { id: '4', title: 'Your Top Songs', type: 'Playlist' },
  ];

  // Mock data for made for you
  const madeForYou = [
    { id: '1', title: 'Discover Weekly', description: 'Your weekly mixtape of fresh music' },
    { id: '2', title: 'Release Radar', description: 'Catch all the latest music from artists you follow' },
    { id: '3', title: 'Daily Mix 1', description: 'Kendrick Lamar, J. Cole, Drake and more' },
    { id: '4', title: 'Daily Mix 2', description: 'Travis Scott, Future, 21 Savage and more' },
  ];

  // Mock data for your playlists
  const yourPlaylists = [
    { id: '1', title: 'Workout Mix', description: 'Your favorite workout tracks' },
    { id: '2', title: 'Chill Vibes', description: 'Relaxing beats for your downtime' },
    { id: '3', title: 'Party Mix', description: 'Turn up the volume!' },
    { id: '4', title: 'Focus Flow', description: 'Concentration-enhancing tracks' },
  ];

  const renderHorizontalItem = ({ item, size = 150, showDescription = false }) => (
    <Pressable
      style={[styles.horizontalItem, { width: size }]}
      onPress={() => router.push('/playlists')}
    >
      <View style={[styles.itemImage, { height: size, width: size }]} />
      <Text style={styles.itemTitle} numberOfLines={1}>{item.title}</Text>
      {showDescription && (
        <Text style={styles.itemDescription} numberOfLines={2}>{item.description}</Text>
      )}
    </Pressable>
  );

  const renderSection = ({ title, data, itemSize, showDescription }) => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.horizontalList}>
          {data.map(item => renderHorizontalItem({ item, size: itemSize, showDescription }))}
        </View>
      </ScrollView>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#552583', '#301934']}
        style={styles.gradient}
      >
        <ScrollView style={styles.scrollView}>
          <View style={styles.header}>
            <Text style={styles.greeting}>Good evening</Text>
          </View>

          {renderSection({
            title: 'Recently played',
            data: recentlyPlayed,
            itemSize: 120,
            showDescription: false
          })}

          {renderSection({
            title: 'Made for you',
            data: madeForYou,
            itemSize: 150,
            showDescription: true
          })}

          {renderSection({
            title: 'Your playlists',
            data: yourPlaylists,
            itemSize: 150,
            showDescription: true
          })}
          
          <View style={styles.bottomPadding} />
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  header: {
    padding: 16,
    marginTop: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FDB927', // Lakers gold
    marginBottom: 16,
  },
  section: {
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FDB927', // Lakers gold
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  horizontalList: {
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
  horizontalItem: {
    marginRight: 16,
  },
  itemImage: {
    backgroundColor: '#FDB927', // Lakers gold
    borderRadius: 8,
    marginBottom: 8,
  },
  itemTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  itemDescription: {
    color: '#B3B3B3',
    fontSize: 12,
  },
  scrollView: {
    marginBottom: 80, // Height of the navbar
  },
  bottomPadding: {
    height: 20,
  },
});
