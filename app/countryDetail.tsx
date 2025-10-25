import CountryDetailView from '@/src/views/countryDetailView';
import { useLocalSearchParams } from 'expo-router';

export default function CountryDetailScreen() {
  const params = useLocalSearchParams();
  const country = params.country ? JSON.parse(params.country as string) : null;
  
  return <CountryDetailView country={country} />;
}
