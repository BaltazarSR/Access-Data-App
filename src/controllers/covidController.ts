import { CovidHistoricalWithChart } from "../models/CovidCountry";
import { covidAPIService } from "../services/covidAPIService";
import { historicalDataService } from "../services/historicalDataService";

export class CovidController {
  static async getAllCountries() {
    return await covidAPIService.getAllCountries();
  }
}

export class HistoricalController {
  static async getCountryInfo(country: string): Promise<CovidHistoricalWithChart> {
    const rawData = await historicalDataService.getCountryInfo(country);
    
    // Process data for chart
    const dates = Object.keys(rawData.cases);
    const cases = Object.values(rawData.cases);
    
    // Sample every 30th day to avoid overcrowding
    const sampledDates = dates.filter((_, index) => index % 30 === 0);
    const sampledCases = cases.filter((_, index) => index % 30 === 0);
    
    let previousYear = '';
    
    return {
      country: rawData.country,
      chartData: {
        labels: sampledDates.map(date => {
          const parts = date.split('/');
          const year = `20${parts[2]}`;
          
          if (year !== previousYear) {
            previousYear = year;
            return year;
          }
          return '';
        }),
        datasets: [{
          data: sampledCases
        }]
      }
    };
  }
}