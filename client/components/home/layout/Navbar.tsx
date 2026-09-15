// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { Menu, UserCircle } from "lucide-react";
// import { useState } from "react";

// export default function Navbar() {

//     const [open, setOpen] = useState(false);

//     return (

//         <header className="sticky top-0 z-50 bg-white shadow-sm">

//             <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">

//                 <Link
//                     href="/"
//                     className="flex items-center gap-3"
//                 >

//                     <img
//                         src="/images/logo/allindiacgslogo.png"
//                         alt="All India CGs"
//                         width={52}
//                         height={52}
//                         className="rounded-full"
//                     />

//                     <div>

//                         <h1 className="text-2xl font-extrabold text-red-600">
//                             ALL INDIA CGs
//                         </h1>

//                         <p className="text-xs text-gray-500">
//                             Find Verified Profiles
//                         </p>

//                     </div>

//                 </Link>

//                 <nav className="hidden items-center gap-8 md:flex font-bold text-red-600">

//                     <Link href="/">Home</Link>


//                     <Link href="/about">About</Link>

//                     <Link href="/contact">Contact</Link>

//                 </nav>

//                 <div className="hidden items-center gap-4 md:flex">

//                     <Link
//                         href="/admin/login"
//                         className="rounded-full p-2 transition duration-300 hover:bg-blue-100 hover:text-blue-600"
//                         title="Admin Login"
//                     >
//                         <UserCircle size={28} />
//                     </Link>

//                 </div>

//                 <button
//                     className="md:hidden"
//                     onClick={() => setOpen(!open)}
//                 >

//                     <Menu />

//                 </button>

//             </div>

//             {
//                 open && (

//                     <div className="border-t bg-white md:hidden">

//                         <nav className="flex flex-col p-4 gap-4 font-bold text-red-600">

//                             <Link href="/">Home</Link>

//                             <Link href="/about">About</Link>

//                             <Link href="/contact">Contact</Link>

//                             <Link
//                                 href="/admin/login"
//                                 className="rounded-full p-2 transition duration-300 hover:bg-blue-100 hover:text-blue-600"
//                                 title="Admin Login"
//                             >
//                                 <UserCircle size={28} />
//                             </Link>

//                         </nav>

//                     </div>

//                 )

//             }

//         </header>

//     );
// }



// ----------------------------------


"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-10">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-7"
        >
          <Image
            src="/images/logo/allindiacgslogo.png"
            alt="All India CGs - Verified Profiles"
            width={52}
            height={52}
            className="rounded-full"
          />

          <div>
            <h1 className="text-1xl font-extrabold text-red-600">
              ALL INDIA CGs
            </h1>

            <p className="text-xs text-gray-500">
              Verified Profiles in   <span className="font-extrabold text-red-600">Delhi NCR</span>
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 font-bold text-red-600 md:flex">
          
          <Link
            href="/"
            className="transition hover:text-red-800"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="transition hover:text-red-800"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="transition hover:text-red-800"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="text-red-600 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Open menu"
        >
          <Menu size={26} />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t bg-white md:hidden">
          <nav className="flex flex-col gap-4 p-4 font-bold text-red-600">

            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="transition hover:text-red-800"
            >
              Home
            </Link>

            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="transition hover:text-red-800"
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="transition hover:text-red-800"
            >
              Contact
            </Link>

          </nav>
        </div>
      )}
    </header>
  );
}