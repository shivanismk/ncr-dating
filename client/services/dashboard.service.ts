// const API = "http://localhost:5000/api/dashboard";

// export async function getDashboardStats() {
//   const res = await fetch(`${API}/stats`);

//   if (!res.ok) {
//     throw new Error("Failed to load dashboard statistics");
//   }

//   return res.json();
// }




// const API = "http://localhost:5000/api/dashboard";

// export async function getDashboardStats() {
//   const token = localStorage.getItem("adminToken");

//   const res = await fetch(`${API}/stats`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   if (!res.ok) {
//     throw new Error("Failed to load dashboard statistics");
//   }

//   return res.json();
// }




// const API = "http://localhost:5000/api/dashboard";

// const API = `${process.env.NEXT_PUBLIC_API_URL}/api/dashboard`;

// export async function getDashboardStats() {
//   const res = await fetch(`${API}/stats`, {
//     method: "GET",
//     credentials: "include",
//   });

//   const data = await res.json();

//   if (!res.ok) {
//     throw new Error(
//       data.message || "Failed to load dashboard statistics"
//     );
//   }

//   return data;
// }




// ---------------------------


// const API = `${process.env.NEXT_PUBLIC_API_URL}/api/dashboard`;

// export async function getDashboardStats() {
//   const token = localStorage.getItem("adminToken");

//   const res = await fetch(`${API}/stats`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     credentials: "include",
//   });

//   const data = await res.json();

//   if (!res.ok) {
//     throw new Error(
//       data.message || "Failed to load dashboard statistics"
//     );
//   }

//   return data;
// }




// --------------------------

const API = `${process.env.NEXT_PUBLIC_API_URL}/api/dashboard`;

export async function getDashboardStats() {
  const token = localStorage.getItem("adminToken");

  const res = await fetch(`${API}/stats`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    credentials: "include",
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      data.message || "Failed to load dashboard statistics"
    );
  }

  return data;
}