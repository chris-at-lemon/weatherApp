export interface ISavedSearch {
  temperature: number;
  name: string;
  descr: string;
  feelsLike: number;
  icon: string;
  mainCondition: string;
  id: number;
  coord: {
    lat: number;
    lon: number;
  };
  date: string;
}
