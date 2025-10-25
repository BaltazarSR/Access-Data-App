import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { HistoricalController } from '../controllers/covidController';
import { CovidCountry, CovidHistoricalWithChart } from '../models/CovidCountry';


interface CountryDetailProps {
  country: CovidCountry | null;
}

export default function countryDetailView({ country }: CountryDetailProps) {
  const router = useRouter(); 

  const [historical, setHistorical] = useState<CovidHistoricalWithChart>()
  const [error, setError] = useState<string>('')

  const loadHistorical = async (country: CovidCountry) => {
    try{
      const data = await HistoricalController.getCountryInfo(country.country);
      setHistorical(data);
    } catch (error) {
      setError("Failed to load countries");
    }
  }

  useEffect(() => {
    if (country) {
      loadHistorical(country);
    }
  }, [country])
  
  if (!country) {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.text}>No country data available</Text>
      </View>
    );
  }

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Ionicons name="chevron-back" size={32} color="#000000ff" />
      </TouchableOpacity>
      <Image 
        source={{ uri: country.flag }} 
        style={styles.flag}
      />
      <Text style={styles.title}>{country.country}</Text>
      <Text style={styles.text}>Cases: {country.cases}</Text>
      <Text style={styles.text}>Deaths: {country.deaths}</Text>
      <Text style={styles.text}>Recovered: {country.recovered}</Text>

      {error ? (
        <Text style={styles.text}>{error}</Text>
      ) : (
        historical ? (
          <View style={styles.chartContainer}>
            <Text style={styles.chartTitle}>COVID-19 Cases Over Time</Text>
            <LineChart
              data={historical.chartData}
              width={Dimensions.get('window').width - 40}
              height={220}
              chartConfig={{
                backgroundGradientFrom: '#d0d0d0ff',
                backgroundGradientTo: '#d0d0d0ff',
                decimalPlaces: 0,
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                strokeWidth: 2,
                propsForBackgroundLines: {
                  strokeDasharray: '',
                  stroke: '#ffffffff',
                  strokeWidth: 1,
                },
                propsForDots: {
                  r: '2',
                  strokeWidth: '2',
                  stroke: '#000000'
                }
              }}
              bezier
              style={styles.chart}
              withVerticalLines={false}
              withHorizontalLines={true}
              withInnerLines={true}
              withOuterLines={true}
            />
          </View>
        ) : (
          <Text style={styles.text}>Loading Chart...</Text>
        )
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 150,
    paddingBottom: 40,
    padding: 20,
  },
  flag: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    color: '#000000ff',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Helvetica',
  },
  text: {
    color: '#000000ff',
    fontSize: 18,
    marginVertical: 5,
    fontFamily: 'Helvetica',
  },
  chartContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  chartTitle: {
    color: '#000000ff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    fontFamily: 'Helvetica',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 1,
    padding: 8,
  }
});
