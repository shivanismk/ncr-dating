// const API = "http://localhost:5000/api/auth";

// export async function login(email: string, password: string) {
//   const res = await fetch(`${API}/login`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       email,
//       password,
//     }),
//   });

//   const data = await res.json();

//   if (!res.ok) {
//     throw new Error(data.message);
//   }

//   return data;
// }



// -----------------------------


// const API = "http://localhost:5000/api/auth";


// const API = `${process.env.NEXT_PUBLIC_API_URL}/api/auth`;

// export async function login(
//   email: string,
//   password: string
// ) {
//   const res = await fetch(`${API}/login`, {
//     method: "POST",

//     headers: {
//       "Content-Type": "application/json",
//     },

//     credentials: "include",

//     body: JSON.stringify({
//       email,
//       password,
//     }),
//   });

//   const data = await res.json();

//   if (!res.ok) {
//     throw new Error(
//       data.message || "Login failed"
//     );
//   }

//   return data;
// }


// // const API = "http://localhost:5000/api/auth";

// export async function logout() {
//   const res = await fetch(`${API}/logout`, {
//     method: "POST",
//     credentials: "include",
//   });

//   const data = await res.json();

//   if (!res.ok) {
//     throw new Error(data.message || "Logout failed");
//   }

//   return data;
// }




// const API = "https://all-india-cgs-production.up.railway.app/api/auth";

// const API = "https://api.connectncr.in/api/auth";

// export async function login(email: string, password: string) {
//   const res = await fetch(`${API}/login`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     credentials: "include",
//     body: JSON.stringify({
//       email,
//       password,
//     }),
//   });

//   const response = await res.json();

//   if (!res.ok || !response.success) {
//     throw new Error(response.message || "Login failed");
//   }

//   return response.data;
// }

// export async function logout() {
//   const res = await fetch(`${API}/logout`, {
//     method: "POST",
//     credentials: "include",
//   });

//   const response = await res.json();

//   if (!res.ok) {
//     throw new Error(response.message || "Logout failed");
//   }

//   return response;
// }


// ----------------

// const API = "https://api.connectncr.in/api/auth";

// export async function login(email: string, password: string) {
//   const res = await fetch(`${API}/login`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     credentials: "include",
//     body: JSON.stringify({
//       email: email.trim(),
//       password,
//     }),
//   });

//   const response = await res.json();

//   console.log("LOGIN RESPONSE:", response);

//   if (!res.ok) {
//     throw new Error(response.message || "Invalid email or password");
//   }

//   if (!response.success) {
//     throw new Error(response.message || "Login failed");
//   }

//   if (!response.data?.token) {
//     throw new Error("Login successful but token was not received");
//   }

//   return response.data;
// }

// export async function logout() {
//   const res = await fetch(`${API}/logout`, {
//     method: "POST",
//     credentials: "include",
//   });

//   const response = await res.json();

//   if (!res.ok) {
//     throw new Error(response.message || "Logout failed");
//   }

//   return response;
// }



//-----------------------------------



// const API = "https://api.connectncr.in/api/auth";

// export async function login(email: string, password: string) {
//   const res = await fetch(`${API}/login`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     credentials: "include",
//     body: JSON.stringify({
//       email,
//       password,
//     }),
//   });

//   const response = await res.json();

//   if (!res.ok || !response.success) {
//     throw new Error(response.message || "Login failed");
//   }

//   return response.data;
// }

// export async function logout() {
//   const res = await fetch(`${API}/logout`, {
//     method: "POST",
//     credentials: "include",
//   });

//   const response = await res.json();

//   if (!res.ok) {
//     throw new Error(response.message || "Logout failed");
//   }

//   return response;
// }


// ---------------------------------

const API = `${process.env.NEXT_PUBLIC_API_URL}/api/auth`;

export async function login(
  email: string,
  password: string
) {
  const res = await fetch(`${API}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const response = await res.json();

  if (!res.ok || !response.success) {
    throw new Error(
      response.message || "Login failed"
    );
  }

  return response.data;
}

export async function logout() {
  const res = await fetch(`${API}/logout`, {
    method: "POST",
    credentials: "include",
  });

  const response = await res.json();

  if (!res.ok) {
    throw new Error(
      response.message || "Logout failed"
    );
  }

  return response;
}

