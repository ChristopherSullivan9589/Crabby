import React from 'react';
import { View, Text, StyleSheet, Pressable, Image, ScrollView, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

export default function GenresPage() {
  const router = useRouter();

  const genres = [
    {
      id: '1',
      title: 'LEBRON JAMES',
      imageUrl: require('../Components/Genre.png')
    },
    
    
  ];

  const renderGenreRow = (genre) => (
    <View key={genre.id} style={styles.genreRow}>
      <View style={styles.genreInfo}>
        <Image
          source={genre.imageUrl}
          style={styles.genreImage}
        />
        <View style={styles.genreTextContainer}>
          <Text style={styles.genreTitle}>{genre.title}</Text>
        </View>
      </View>
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
          <Text style={styles.title}>Genres & Moods</Text>
        </View>

        <ScrollView style={styles.genreList}>
          {genres.map(genre => renderGenreRow(genre))}
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
  genreList: {
    flex: 1,
    paddingHorizontal: 16,
    marginBottom: 80, // Space for navbar
  },
  genreRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  genreInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  genreImage: {
    width: 56,
    height: 56,
    marginRight: 12,
  },
  genreTextContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  genreTitle: {
    color: '#FDB927',
    fontSize: 16,
    fontWeight: '500',
  }
});