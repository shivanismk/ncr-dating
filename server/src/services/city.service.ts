import { INDIA } from "../data/india";

const stateCodeMap: Record<string, string> = {
  "Andhra Pradesh": "AP",
  "Arunachal Pradesh": "AR",
  Assam: "AS",
  Bihar: "BR",
  Chhattisgarh: "CG",
  Goa: "GA",
  Gujarat: "GJ",
  Haryana: "HR",
  "Himachal Pradesh": "HP",
  Jharkhand: "JH",
  Karnataka: "KA",
  Kerala: "KL",
  "Madhya Pradesh": "MP",
  Maharashtra: "MH",
  Manipur: "MN",
  Meghalaya: "ML",
  Mizoram: "MZ",
  Nagaland: "NL",
  Odisha: "OD",
  Punjab: "PB",
  Rajasthan: "RJ",
  Sikkim: "SK",
  "Tamil Nadu": "TN",
  Telangana: "TS",
  Tripura: "TR",
  "Uttar Pradesh": "UP",
  Uttarakhand: "UK",
  "West Bengal": "WB",
};

export const getCitiesByState = (state?: string) => {
  const states = state
    ? [state]
    : Object.keys(INDIA);

  const allCities = states.flatMap((stateName) => {
    const cityList = INDIA[stateName as keyof typeof INDIA] || [];
    return cityList.map((cityName, index) => ({
      city_id: index + 1,
      city_name: cityName,
      state_name: stateName,
      state_code: stateCodeMap[stateName] || "",
    }));
  });

  return allCities.sort((a, b) => a.city_name.localeCompare(b.city_name));
};

export const getStates = () => {
  return Object.keys(INDIA)
    .sort()
    .map((stateName, index) => ({
      state_id: index + 1,
      state_name: stateName,
      state_code: stateCodeMap[stateName] || stateName.slice(0, 2).toUpperCase(),
    }));
};
