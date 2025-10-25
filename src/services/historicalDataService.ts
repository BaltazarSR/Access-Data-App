import axios from 'axios';
import { CovidCountryHistorical } from '../models/CovidCountry';

const API_BASE_URL = 'https://disease.sh/v3/covid-19'

export class historicalDataService {
    static async getCountryInfo(country: string): Promise<CovidCountryHistorical> {
        const response = await axios.get(`${API_BASE_URL}/historical/${country}?lastdays=all`);

        const historicalData: CovidCountryHistorical = {
            country: response.data.country,
            cases: response.data.timeline.cases,
        };

        return historicalData;
    }
}