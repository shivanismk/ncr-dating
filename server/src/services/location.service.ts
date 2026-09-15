import { INDIA } from "../data/india";

export function getStates() {
  return Object.keys(INDIA).sort();
}

export function getCities(state: string) {
  return INDIA[state as keyof typeof INDIA] || [];
}