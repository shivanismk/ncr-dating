// "use client";

// import { useRouter } from "next/navigation";
// import Link from "next/link";
// // import { logout } from "@/services/auth.service";

// import {
//   LayoutDashboard,
//   Users,
//   PlusCircle,
//   LogOut,
// } from "lucide-react";

// const menu = [
//   {
//     title: "Dashboard",
//     href: "/admin/dashboard",
//     icon: LayoutDashboard,
//   },
//   {
//     title: "Profiles",
//     href: "/admin/profiles",
//     icon: Users,
//   },
//   {
//     title: "Add Profile",
//     href: "/admin/profiles/add",
//     icon: PlusCircle,
//   },
// ];

// export default function Sidebar() {
//   const router = useRouter();




//   const handleLogout = () => {
    
//     localStorage.removeItem("adminToken");

   
//     sessionStorage.removeItem("adminToken");

   
//     document.cookie =
//       "adminToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    
//     router.replace("/");
//   };

//   return (
//     <aside className="h-screen w-72 bg-slate-900 text-white">

//       <div className="border-b border-slate-700 p-6">
//         <h1 className="text-2xl font-bold">
//           Admin Panel
//         </h1>
//       </div>

//       <nav className="p-4">

//         {menu.map((item) => {
//           const Icon = item.icon;

//           return (
//             <Link
//               key={item.title}
//               href={item.href}
//               className="mb-2 flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-slate-800"
//             >
//               <Icon size={20} />
//               {item.title}
//             </Link>
//           );
//         })}

//         <button
//           onClick={handleLogout}
//           className="mt-8 flex w-full items-center gap-3 rounded-xl bg-red-600 px-4 py-3 transition hover:bg-red-700"
//         >
//           <LogOut size={20} />
//           Logout
//         </button>

//       </nav>

//     </aside>
//   );
// }



// ----------------------------------





"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { logout } from "@/services/auth.service";

import {
  LayoutDashboard,
  Users,
  PlusCircle,
  LogOut,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Profiles",
    href: "/admin/profiles",
    icon: Users,
  },
  {
    title: "Add Profile",
    href: "/admin/profiles/add",
    icon: PlusCircle,
  },
];

export default function Sidebar() {
  const router = useRouter();

  async function handleLogout() {
    try {
      // Backend se adminToken cookie delete hogi
      await logout();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      // Purane local/session storage tokens bhi remove kar do
      localStorage.removeItem("adminToken");
      localStorage.removeItem("adminUser");

      sessionStorage.removeItem("adminToken");
      sessionStorage.removeItem("adminUser");

      // Home page par bhejo
      router.replace("/");
    }
  }

  return (
    <aside className="h-screen w-72 bg-slate-900 text-white">

      {/* Admin Panel Header */}
      <div className="border-b border-slate-700 p-6">
        <h1 className="text-2xl font-bold">
          Admin Panel
        </h1>
      </div>

      {/* Menu */}
      <nav className="p-4">

        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              href={item.href}
              className="mb-2 flex items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-slate-800"
            >
              <Icon size={20} />

              {item.title}
            </Link>
          );
        })}

        {/* Logout */}
        <button
          type="button"
          onClick={handleLogout}
          className="mt-8 flex w-full items-center gap-3 rounded-xl bg-red-600 px-4 py-3 transition hover:bg-red-700"
        >
          <LogOut size={20} />

          Logout
        </button>

      </nav>

    </aside>
  );
}