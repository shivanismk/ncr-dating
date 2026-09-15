// "use client";

// import { Eye, EyeOff, Lock, Mail } from "lucide-react";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function AdminLoginPage() {
//   const [showPassword, setShowPassword] = useState(false);
//   const router = useRouter();

//   return (
//     <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4">

//       <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">

//         <div className="mb-8 text-center">

//           <h1 className="text-3xl font-bold">
//             Admin Login
//           </h1>

//           <p className="mt-2 text-gray-500">
//             Login to manage your directory
//           </p>

//         </div>

//         {/* <form className="space-y-6"> */}

//         <form
//   className="space-y-6"
//   // onSubmit={(e) => {
//   //   e.preventDefault();
//   //   router.push("/admin/dashboard");
//   // }}

//   onSubmit={(e) => {
//   e.preventDefault();

//   // Temporary Login Token
//   localStorage.setItem("adminToken", "admin_logged_in");

//   router.replace("/admin/dashboard");
// }}



// >

//           <div>

//             <label className="mb-2 block font-medium">
//               Email
//             </label>

//             <div className="flex items-center rounded-xl border px-3">

//               <Mail size={18} className="text-gray-400" />

//               <input
//                 type="email"
//                 placeholder="admin@example.com"
//                 className="w-full border-none p-3 outline-none"
//               />

//             </div>

//           </div>

//           <div>

//             <label className="mb-2 block font-medium">
//               Password
//             </label>

//             <div className="flex items-center rounded-xl border px-3">

//               <Lock size={18} className="text-gray-400" />

//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Enter password"
//                 className="w-full border-none p-3 outline-none"
//               />

//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//               >
//                 {showPassword ? (
//                   <EyeOff size={18} />
//                 ) : (
//                   <Eye size={18} />
//                 )}
//               </button>

//             </div>

//           </div>

//           <div className="flex items-center justify-between">

//             <label className="flex items-center gap-2">

//               <input type="checkbox" />

//               Remember Me

//             </label>

//             <button
//               type="button"
//               className="text-blue-600"
//             >
//               Forgot Password?
//             </button>

//           </div>

//           {/* <button
//             className="w-full rounded-xl bg-blue-600 p-3 font-semibold text-white transition hover:bg-blue-700"
//           >
//             Login
//           </button> */}
          
//           <button
//   type="submit"
//   className="w-full rounded-xl bg-blue-600 p-3 font-semibold text-white transition hover:bg-blue-700"
// >
//   Login
// </button>




//         </form>

//       </div>

//     </main>
//   );
// }



// ------------------


// "use client";

// import { Eye, EyeOff, Lock, Mail } from "lucide-react";
// import { useState } from "react";
// import { useRouter } from "next/navigation";

// export default function AdminLoginPage() {
//   const router = useRouter();

//   const [showPassword, setShowPassword] = useState(false);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Admin Credentials
//     if (
//       email === "admin@allindiacgs.com" &&
//       password === "Admin@123"
//     ) {
//       // Save Login Token
//       localStorage.setItem("adminToken", "admin_logged_in");

//       // Redirect
//       router.replace("/admin/dashboard");
//     } else {
//       alert("Invalid Email or Password");
//     }
//   };

//   return (
//     <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-red-50 via-white to-red-100 px-4">

//       <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">

//         <div className="mb-8 text-center">

//           <h1 className="text-3xl font-bold text-red-600">
//             Admin Login
//           </h1>

//           <p className="mt-2 text-gray-500">
//             Login to manage All India CGs
//           </p>

//         </div>

//         <form
//           className="space-y-6"
//           onSubmit={handleLogin}
//         >

//           {/* Email */}

//           <div>

//             <label className="mb-2 block font-medium">
//               Email
//             </label>

//             <div className="flex items-center rounded-xl border px-3">

//               <Mail
//                 size={18}
//                 className="text-gray-400"
//               />

//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) =>
//                   setEmail(e.target.value)
//                 }
//                 placeholder="admin@allindiacgs.com"
//                 className="w-full border-none p-3 outline-none"
//                 required
//               />

//             </div>

//           </div>

//           {/* Password */}

//           <div>

//             <label className="mb-2 block font-medium">
//               Password
//             </label>

//             <div className="flex items-center rounded-xl border px-3">

//               <Lock
//                 size={18}
//                 className="text-gray-400"
//               />

//               <input
//                 type={
//                   showPassword ? "text" : "password"
//                 }
//                 value={password}
//                 onChange={(e) =>
//                   setPassword(e.target.value)
//                 }
//                 placeholder="Enter Password"
//                 className="w-full border-none p-3 outline-none"
//                 required
//               />

//               <button
//                 type="button"
//                 onClick={() =>
//                   setShowPassword(!showPassword)
//                 }
//               >
//                 {showPassword ? (
//                   <EyeOff size={18} />
//                 ) : (
//                   <Eye size={18} />
//                 )}
//               </button>

//             </div>

//           </div>

//           {/* Remember */}

//           <div className="flex items-center justify-between">

//             <label className="flex items-center gap-2 text-sm">

//               <input type="checkbox" />

//               Remember Me

//             </label>

//             <button
//               type="button"
//               className="text-sm text-red-600"
//             >
//               Forgot Password?
//             </button>

//           </div>

//           {/* Login */}

//           <button
//             type="submit"
//             className="w-full rounded-xl bg-red-600 p-3 font-semibold text-white transition hover:bg-red-700"
//           >
//             Login
//           </button>

//         </form>

//       </div>

//     </main>
//   );
// }



// ---------------------------------------



"use client";

import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { login } from "@/services/auth.service";

export default function AdminLoginPage() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const res = await login(email, password);

      // localStorage.setItem("adminToken", res.data.token);

      // localStorage.setItem(
      //   "adminUser",
      //   JSON.stringify(res.data.user)
      // );


//       localStorage.setItem("adminToken", res.token);

// localStorage.setItem(
//   "adminUser",
//   JSON.stringify(res.user)
// );

//       router.replace("/admin/dashboard");

localStorage.setItem("adminToken", res.token);

localStorage.setItem(
  "adminUser",
  JSON.stringify(res.user)
);

// Proxy ke liye authentication cookie
// document.cookie = `adminToken=${res.token}; path=/; max-age=86400; SameSite=Lax; Secure`;

// router.replace("/admin/dashboard");

document.cookie = `adminToken=${encodeURIComponent(res.token)}; path=/; max-age=86400; SameSite=Lax; Secure`;

window.location.href = "/admin/dashboard";




    } catch (err: any) {
      setError(err.message || "Login Failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4">

      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">

        <div className="mb-8 text-center">

          <h1 className="text-3xl font-bold">
            Admin Login
          </h1>

          <p className="mt-2 text-gray-500">
            Login to manage your directory
          </p>

        </div>

        {error && (
          <div className="mb-4 rounded-lg bg-red-100 p-3 text-red-600">
            {error}
          </div>
        )}

        <form
          className="space-y-6"
          onSubmit={handleLogin}
        >
                    <div>

            <label className="mb-2 block font-medium">
              Email
            </label>

            <div className="flex items-center rounded-xl border px-3">

              <Mail size={18} className="text-gray-400" />

              <input
                type="email"
                placeholder="admin@allindiacgs.com"
                className="w-full border-none p-3 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

            </div>

          </div>

          <div>

            <label className="mb-2 block font-medium">
              Password
            </label>

            <div className="flex items-center rounded-xl border px-3">

              <Lock size={18} className="text-gray-400" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                className="w-full border-none p-3 outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>

            </div>

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-red-600 p-3 font-semibold text-white transition hover:bg-red-700 disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

      </div>

    </main>
  );
}