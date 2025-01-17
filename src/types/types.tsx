import { SelectProps } from "antd";

export interface IOpenWeatherResponse {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust?: number;
  };
  clouds: {
    all: number;
  };
  rain?: {
    "1h"?: number;
    "3h"?: number;
  };
  snow?: {
    "1h"?: number;
    "3h"?: number;
  };
  dt: number;
  sys: {
    type?: number;
    id?: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface ISelectedCityContextType {
  selectedCity: IOpenWeatherResponse;
  setSelectedCity: React.Dispatch<React.SetStateAction<IOpenWeatherResponse>>;
}

export interface ICitySelect extends SelectProps {
  setVisibleContent: React.Dispatch<React.SetStateAction<string | undefined>>;
  setSelectedCity: React.Dispatch<React.SetStateAction<IOpenWeatherResponse>>;
}

export interface ICityWeatherInformations {
  selectedCity: IOpenWeatherResponse;
}

export interface IGoBackHomeButton {
  setVisibleContent: React.Dispatch<React.SetStateAction<string | undefined>>;
  setSelectedCity: React.Dispatch<React.SetStateAction<IOpenWeatherResponse>>;
}
