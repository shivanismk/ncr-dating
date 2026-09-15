// const API = "http://localhost:5000/api/profiles";

// export async function createProfile(profile: any) {
//   const res = await fetch(API, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(profile),
//   });

//   if (!res.ok) {
//     throw new Error("Failed to create profile");
//   }

//   return res.json();
// }

// export async function getProfiles() {
//   const res = await fetch(API, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to load profiles");
//   }

//   return res.json();
// }

// export async function getCategories() {
//   const res = await fetch(`${API}/categories`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to load categories");
//   }

//   return res.json();
// }


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


// export async function searchProfiles(
//   category?: string,
//   state?: string,
//   city?: string,
//   page: number = 1,
//   limit: number = 10
// ) {
//   const params = new URLSearchParams();

//   if (category) params.append("category", category);
//   if (state) params.append("state", state);
//   if (city) params.append("city", city);

//   params.append("page", String(page));
//   params.append("limit", String(limit));

//   const res = await fetch(
//     `${API}/search?${params.toString()}`,
//     {
//       cache: "no-store",
//     }
//   );

//   if (!res.ok) {
//     throw new Error("Search failed");
//   }

//   return res.json();
// }


// export async function deleteProfile(id: number) {
//   const res = await fetch(`${API}/${id}`, {
//     method: "DELETE",
//   });

//   return res.json();
// }

// export async function getDashboardStats() {
//   const res = await fetch(
//     `${API}/dashboard/stats`
//   );

//   return res.json();
// }

// export async function getProfileById(id: number) {
//   const res = await fetch(`${API}/${id}`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch profile");
//   }

//   return res.json();
// }



// export async function getPopularLocations() {
//   const res = await fetch(
//     `${API}/popular-locations`,
//     {
//       cache: "no-store",
//     }
//   );

//   if (!res.ok) {
//     throw new Error("Failed");
//   }

//   return res.json();
// }




// ---------------------



// const API = "http://localhost:5000/api/profiles";
const API = `${process.env.NEXT_PUBLIC_API_URL}/api/profiles`;

/*
|--------------------------------------------------------------------------
| Create Profile - ADMIN ONLY
|--------------------------------------------------------------------------
*/

export async function createProfile(profile: any) {
  const res = await fetch(API, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    credentials: "include",

    body: JSON.stringify(profile),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      data.message || "Failed to create profile"
    );
  }

  return data;
}


/*
|--------------------------------------------------------------------------
| Get Profiles - PUBLIC
|--------------------------------------------------------------------------
*/

export async function getProfiles() {
  const res = await fetch(API, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to load profiles");
  }

  return res.json();
}


/*
|--------------------------------------------------------------------------
| Get Categories - PUBLIC
|--------------------------------------------------------------------------
*/

export async function getCategories() {
  const res = await fetch(`${API}/categories`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to load categories");
  }

  return res.json();
}


/*
|--------------------------------------------------------------------------
| Get States - PUBLIC
|--------------------------------------------------------------------------
*/

export async function getStates() {
  const res = await fetch(`${API}/states`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to load states");
  }

  return res.json();
}


/*
|--------------------------------------------------------------------------
| Get Cities - PUBLIC
|--------------------------------------------------------------------------
*/

export async function getCities(state: string) {
  const res = await fetch(
    `${API}/cities?state=${encodeURIComponent(state)}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to load cities");
  }

  return res.json();
}


/*
|--------------------------------------------------------------------------
| Search Profiles - PUBLIC
|--------------------------------------------------------------------------
*/

export async function searchProfiles(
  category?: string,
  state?: string,
  city?: string,
  page: number = 1,
  limit: number = 10
) {
  const params = new URLSearchParams();

  if (category) {
    params.append("category", category);
  }

  if (state) {
    params.append("state", state);
  }

  if (city) {
    params.append("city", city);
  }

  params.append("page", String(page));
  params.append("limit", String(limit));

  const res = await fetch(
    `${API}/search?${params.toString()}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Search failed");
  }

  return res.json();
}


/*
|--------------------------------------------------------------------------
| Delete Profile - ADMIN ONLY
|--------------------------------------------------------------------------
*/

export async function deleteProfile(id: number) {
  const res = await fetch(`${API}/${id}`, {
    method: "DELETE",
    credentials: "include",
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      data.message || "Failed to delete profile"
    );
  }

  return data;
}


/*
|--------------------------------------------------------------------------
| Profile Dashboard Stats - PUBLIC
|--------------------------------------------------------------------------
*/

export async function getDashboardStats() {
  const res = await fetch(
    `${API}/dashboard/stats`
  );

  if (!res.ok) {
    throw new Error(
      "Failed to load profile statistics"
    );
  }

  return res.json();
}


/*
|--------------------------------------------------------------------------
| Get Profile By ID - PUBLIC
|--------------------------------------------------------------------------
*/

export async function getProfileById(id: number) {
  const res = await fetch(`${API}/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch profile");
  }

  return res.json();
}


/*
|--------------------------------------------------------------------------
| Popular Locations - PUBLIC
|--------------------------------------------------------------------------
*/

export async function getPopularLocations() {
  const res = await fetch(
    `${API}/popular-locations`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to load popular locations");
  }

  return res.json();
}