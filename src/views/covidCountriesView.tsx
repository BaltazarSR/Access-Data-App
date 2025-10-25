import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { CovidController } from '../controllers/covidController';
import { CovidCountry } from '../models/CovidCountry';

export default function covidCountriesView() {
  const router = useRouter();
  const [countries, setCountries] = useState<CovidCountry[]>([])
  const [error, setError] = useState<string>('')

  const loadCountries = async () => {
    try{
      const data = await CovidController.getAllCountries();
      setCountries(data);
    } catch (error) {
      setError("Failed to load countries");
    }
  }

  useEffect(() => {
    loadCountries();
  }, [])

  const CountryInfo = ({ country }: { country: CovidCountry }) => (
    <TouchableOpacity 
      onPress={() => router.push({
        pathname: '/countryDetail',
        params: { country: JSON.stringify(country) }
      })}
      activeOpacity={0.7}
    >
      <ImageBackground 
        source={{ uri: country.flag }} 
        style={styles.countryContainer}
        imageStyle={styles.backgroundImage}
      >
        <Text style={styles.nameText}>
          {country.country}
        </Text>
        <Text style={styles.deathText}>
          {country.cases}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
  
  return (
    <ScrollView style={styles.mainContainer}>
      {error ? (
        <Text style={styles.text}>{error}</Text>
      ) : (
        countries.length > 0 ? (
          countries.map((country, index) => (
            <CountryInfo key={index} country={country} />
          ))
        ) : (
          <Text style={styles.text}>Loading...</Text>
        )
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 60,
    paddingHorizontal: 30,
  },
  countryContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderColor: '#6c6c6cff',
    borderRadius: 20,
    padding: 30,
    margin: 10,
    overflow: 'hidden',
    minHeight: 200
  },
  backgroundImage: {
    opacity: 0.4,
    borderRadius: 20
  },
  nameText: {
    color: '#000000ff',
    fontWeight: '500',
    fontSize: 36,
    fontFamily: 'Helvetica',
  },
  deathText: {
    color: '#000000ff',
    fontSize: 16,
    fontFamily: 'Helvetica',
  },
  text: {
    color: '#000000ff',
    fontWeight: '500',
    fontSize: 36,
    fontFamily: 'Helvetica',
  }
});
