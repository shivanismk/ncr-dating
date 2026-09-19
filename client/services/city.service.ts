const API = "/api/cities";

export async function getCitiesByState(state: string) {
  const res = await fetch(`${API}/${encodeURIComponent(state)}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to load cities");
  }

  return res.json();
}
