const API = "http://localhost:5000/api/locations";

export async function getStates() {
  const res = await fetch(`${API}/states`);
  return res.json();
}

export async function getCities(state: string) {
  const res = await fetch(
    `${API}/cities?state=${encodeURIComponent(state)}`
  );

  return res.json();
}