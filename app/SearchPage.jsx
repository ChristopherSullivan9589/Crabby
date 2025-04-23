import React from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  StyleSheet,
  FlatList,
  Pressable,
  Text,
  Dimensions,
  ScrollView,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

export default function SearchPage() {
  const router = useRouter();
  
  const gridData = [
    { id: '1', title: 'Artists', route: '/artists' },
    { id: '2', title: 'Albums', route: '/albums' },
    { id: '3', title: 'Playlists', route: '/playlists' },
    { id: '4', title: 'Genres', route: '/genres' },
  ];

  // Top songs data with placeholder titles.
  const topSongsData = [
    { id: '1', title: 'Song One' },
    { id: '2', title: 'Song Two' },
    { id: '3', title: 'Song Three' },
    { id: '4', title: 'Song Four' },
  ];

  // Updated renderGridItem to handle navigation
  const renderGridItem = ({ item }) => (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed,
      ]}
      onPress={() => router.push(item.route)}
    >
      <Text style={styles.cardText}>{item.title}</Text>
    </Pressable>
  );

  // Render top song item as a card.
  const renderTopSongItem = ({ item }) => (
    <View style={styles.songCard}>
      {/* Song title overlay */}
      <Text style={styles.songCardTitle}>{item.title}</Text>
      {/* Play button in the bottom right */}
      <Pressable style={styles.playButton}>
        <Text style={styles.playButtonText}>▶</Text>
      </Pressable>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#552583', '#301934']}
        style={styles.gradient}
      >
        <ScrollView contentContainerStyle={[styles.scrollViewContent, { paddingBottom: 100 }]}>
          <View style={styles.header}>
            <Text style={styles.title}>Search</Text>
          </View>
          <TextInput
            style={styles.searchBar}
            placeholder="What do you want to listen to?"
            placeholderTextColor="#888"
          />
          <FlatList
            data={gridData}
            renderItem={renderGridItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
            contentContainerStyle={styles.flatListContent}
            scrollEnabled={false}
          />
          <Text style={styles.sectionHeader}>Top Songs</Text>
          <FlatList
            data={topSongsData}
            renderItem={renderTopSongItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
            contentContainerStyle={styles.topSongsList}
            scrollEnabled={false}
          />
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}

const screenWidth = Dimensions.get('window').width;
const cardWidth = (screenWidth - 48) / 2; // For the grid cards.
const songCardWidth = (screenWidth - 48) / 2; // For the top song cards (2 columns).

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  scrollViewContent: {
    paddingVertical: 16,
    paddingBottom: 100,
  },
  header: {
    padding: 16,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FDB927',
    marginBottom: 16,
  },
  searchBar: {
    height: 50,
    margin: 16,
    backgroundColor: 'white',
    borderRadius: 25,
    paddingHorizontal: 20,
    color: 'black',
    fontSize: 16,
  },
  flatListContent: {
    paddingHorizontal: 8,
    paddingBottom: 16,
  },
  card: {
    width: cardWidth,
    height: 50,
    margin: 8,
    backgroundColor: '#FDB927',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardPressed: {
    backgroundColor: '#282828',
  },
  cardText: {
    color: '#282828',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    marginVertical: 16,
  },
  topSongsList: {
    paddingHorizontal: 8,
    paddingBottom: 16,
  },
  songCard: {
    width: songCardWidth,
    height: songCardWidth,
    margin: 8,
    backgroundColor: '#FDB927', // Yellow placeholder
    borderRadius: 12,
    position: 'relative',
    overflow: 'hidden',
  },
  songCardTitle: {
    position: 'absolute',
    top: 8,
    left: 8,
    color: '#282828',
    fontWeight: 'bold',
  },
  playButton: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 6,
    borderRadius: 20,
  },
  playButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export { SearchPage };
