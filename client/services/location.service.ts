// const API = `${process.env.NEXT_PUBLIC_API_URL}/api/locations`;

// export async function getStates() {
//   const res = await fetch(`${API}/states`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to load states");
//   }

//   return res.json();
// }

// export async function getCities(state: string) {
//   const res = await fetch(
//     `${API}/cities?state=${encodeURIComponent(state)}`,
//     {
//       cache: "no-store",
//     }
//   );

//   if (!res.ok) {
//     throw new Error("Failed to load cities");
//   }

//   return res.json();
// }

// export async function getCitiesByState(state: string) {
//   return getCities(state);
// }


// ------------------

const API = `${process.env.NEXT_PUBLIC_API_URL}/api/locations`;

export type State = {
  state_id: number;
  state_name: string;
  state_code: string;
};

export type City = {
  city_id: number;
  city_name: string;
  state_name: string;
  state_code: string;
};

export async function getStates(): Promise<State[]> {
  const res = await fetch(`${API}/states`);

  if (!res.ok) {
    throw new Error("Failed to fetch states");
  }

  return res.json();
}

export async function getCities(
  stateId: string | number
): Promise<City[]> {
  const res = await fetch(
    `${API}/cities?state=${encodeURIComponent(String(stateId))}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch cities");
  }

  return res.json();
}