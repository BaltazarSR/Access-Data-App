export interface CovidCountry {
    country: string 
    flag: string
    cases: number
    deaths: number
    recovered: number
    population: number
}

export interface CovidCountryHistorical {
    country: string
    cases: { [date: string]: number }
}

export interface ChartData {
    labels: string[]
    datasets: [{
        data: number[]
    }]
}

export interface CovidHistoricalWithChart {
    country: string
    chartData: ChartData
}