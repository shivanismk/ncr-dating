
// "use client";

// import { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
// import Link from "next/link";

// import { searchProfiles } from "@/services/profile.service";

// type Profile = {
//   id: number;
//   name: string;
//   state: string;
//   city: string;
//   category: string;
//   phone: string;
//   whatsapp: string;
//   description?: string;
//   image?: string;
// };

// export default function ProfilesPage() {
//   const params = useSearchParams();

//   const category = params.get("category") || "";
//   const state = params.get("state") || "";
//   const city = params.get("city") || "";
//   const page = Number(params.get("page") || 1);

//   const [profiles, setProfiles] = useState<Profile[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [totalPages, setTotalPages] = useState(1);

//   useEffect(() => {
//     async function loadProfiles() {
//       try {
//         setLoading(true);

//         const data = await searchProfiles(
//           category,
//           state,
//           city,
//           page,
//           10
//         );

//         setProfiles(data.profiles);
//         setTotalPages(data.totalPages);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     loadProfiles();
//   }, [category, state, city, page]);

//   if (loading) {
//     return (
//       <div className="mx-auto max-w-7xl py-24 text-center">
//         <h2 className="text-2xl font-bold">
//           Loading Profiles...
//         </h2>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 py-10">

//       <div className="mx-auto max-w-7xl px-5">

//         <div className="mb-10">

//           <h1 className="text-4xl font-extrabold text-gray-900">
//             Search Results
//           </h1>

//           <p className="mt-2 text-gray-500">
//             {profiles.length} Profiles Found
//           </p>

//           <div className="mt-4 flex flex-wrap gap-3">

//             {category && (
//               <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
//                 Category : {category}
//               </span>
//             )}

//             {state && (
//               <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
//                 State : {state}
//               </span>
//             )}

//             {city && (
//               <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
//                 City : {city}
//               </span>
//             )}

//           </div>

//         </div>

//         {profiles.length === 0 && (

//           <div className="rounded-2xl bg-white p-16 text-center shadow">

//             <h2 className="text-3xl font-bold">
//               No Profiles Found
//             </h2>

//             <p className="mt-3 text-gray-500">
//               Try another Category, State or City.
//             </p>

//           </div>

//         )}

//         <div className="space-y-8">

//           {profiles.map((profile) => (

//             <div
//               key={profile.id}
//               className=" h-[320px] w-full overflow-hidden rounded-3xl bg-white shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
//             >

//               <div className="flex h-full flex-row flex-col-reverse md:flex-row">


//                 <div className="flex h-full flex-1 flex-col justify-between p-2">

//                   <div>

//                     <span className="inline-block rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
//                       {profile.category}
//                     </span>

//                     <h2 className="mt-5 text-3xl font-bold text-gray-900">
//                       {profile.name}
//                     </h2>

//                     <p className="mt-2 text-lg font-medium text-gray-500">
//                       📍 {profile.city}, {profile.state}
//                     </p>

//                     {profile.description && (

//                       <div className="mt-6 rounded-xl bg-gray-50 p-5">

//                         <p className="leading-8 text-gray-600 line-clamp-3">
//                           {profile.description}
//                         </p>

//                       </div>

//                     )}

//                   </div>

//                   <div className="mt-8 flex flex-wrap gap-3">
//                                         <a
//                       href={`tel:${profile.phone}`}
//                       className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
//                     >
//                       📞 Call Now
//                     </a>

//                     <a
//                       href={`https://wa.me/${profile.whatsapp}`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
//                     >
//                       💬 WhatsApp
//                     </a>

//                     <Link
//                       href={`/profiles/${profile.id}`}
//                       className="rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white transition hover:bg-black"
//                     >
//                       View Details →
//                     </Link>

//                   </div>

//                 </div>


//                 {/* <div className="md:w-[340px] lg:w-[380px] flex-shrink-0"> */}
                
//                 <div className="h-full w-[340px] flex-shrink-0">


//                   <img
//                     src={
//                       profile.image ||
//                       "https://placehold.co/600x800?text=No+Image"
//                     }
//                     alt={profile.name}
//                     // className="h-[320px] w-full object-cover md:h-full"
//                      className="h-full w-full object-cover"

//                  />

//                 </div>

//               </div>

//             </div>

//           ))}

//         </div>


//         {totalPages > 1 && (

//           <div className="mt-14 flex items-center justify-center gap-2">

//             <Link
//               href={`/profiles?category=${category}&state=${state}&city=${city}&page=${page - 1}`}
//               className={`rounded-xl border px-5 py-3 font-semibold transition ${
//                 page === 1
//                   ? "pointer-events-none bg-gray-200 text-gray-400"
//                   : "bg-white hover:bg-red-50"
//               }`}
//             >
//               ← Previous
//             </Link>

//             {Array.from({ length: totalPages }).map((_, index) => (

//               <Link
//                 key={index}
//                 href={`/profiles?category=${category}&state=${state}&city=${city}&page=${index + 1}`}
//                 className={`rounded-xl border px-5 py-3 font-semibold transition ${
//                   page === index + 1
//                     ? "bg-red-600 text-white"
//                     : "bg-white hover:bg-red-50"
//                 }`}
//               >
//                 {index + 1}
//               </Link>

//             ))}

//             <Link
//               href={`/profiles?category=${category}&state=${state}&city=${city}&page=${page + 1}`}
//               className={`rounded-xl border px-5 py-3 font-semibold transition ${
//                 page === totalPages
//                   ? "pointer-events-none bg-gray-200 text-gray-400"
//                   : "bg-white hover:bg-red-50"
//               }`}
//             >
//               Next →
//             </Link>

//           </div>

//         )}

//       </div>

//     </div>
//   );
// }









// -----------------------------








// "use client";

// import { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
// import Link from "next/link";

// import { searchProfiles } from "@/services/profile.service";

// type Profile = {
//   id: number;
//   name: string;
//   state: string;
//   city: string;
//   category: string;
//   phone: string;
//   whatsapp: string;
//   description?: string;
//   image?: string;
// };

// export default function ProfilesPage() {
//   const params = useSearchParams();

//   const category = params.get("category") || "";
//   const state = params.get("state") || "";
//   const city = params.get("city") || "";
//   const page = Number(params.get("page") || 1);

//   const [profiles, setProfiles] = useState<Profile[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [totalPages, setTotalPages] = useState(1);

//   useEffect(() => {
//     async function loadProfiles() {
//       try {
//         setLoading(true);

//         const data = await searchProfiles(
//           category,
//           state,
//           city,
//           page,
//           10
//         );

//         setProfiles(data.profiles);
//         setTotalPages(data.totalPages);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     loadProfiles();
//   }, [category, state, city, page]);

//   if (loading) {
//     return (
//       <div className="flex min-h-[400px] items-center justify-center">
//         <p className="text-xl font-semibold text-gray-600">
//           Loading Profiles...
//         </p>
//       </div>
//     );
//   }

//   return (
//     <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-5 md:py-10">

//       {/* PAGE HEADER */}
//       <div className="mb-8 md:mb-10">

//         <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
//           Search Results
//         </h1>

//         <p className="mt-2 text-gray-500">
//           {profiles.length} Profiles Found
//         </p>

//         {/* FILTERS */}
//         <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">

//           {category && (
//             <span className="rounded-full bg-red-100 px-3 py-1.5 text-xs font-semibold text-red-700 sm:px-4 sm:py-2 sm:text-sm">
//               Category : {category}
//             </span>
//           )}

//           {state && (
//             <span className="rounded-full bg-blue-100 px-3 py-1.5 text-xs font-semibold text-blue-700 sm:px-4 sm:py-2 sm:text-sm">
//               State : {state}
//             </span>
//           )}

//           {city && (
//             <span className="rounded-full bg-green-100 px-3 py-1.5 text-xs font-semibold text-green-700 sm:px-4 sm:py-2 sm:text-sm">
//               City : {city}
//             </span>
//           )}

//         </div>

//       </div>

//       {/* NO PROFILES */}
//       {profiles.length === 0 && (
//         <div className="rounded-2xl bg-white p-10 text-center shadow md:p-16">

//           <h2 className="text-2xl font-bold md:text-3xl">
//             No Profiles Found
//           </h2>

//           <p className="mt-3 text-gray-500">
//             Try another Category, State or City.
//           </p>

//         </div>
//       )}

//       {/* PROFILE LIST */}
//       <div className="space-y-6 md:space-y-8">

//         {profiles.map((profile) => (

//           <div
//             key={profile.id}
//             className="
//               w-full
//               overflow-hidden
//               rounded-2xl
//               bg-red-50
//               shadow-xl
//               transition
//               duration-300
//               hover:-translate-y-1
//               hover:shadow-2xl
//               md:h-[320px]
//               md:rounded-3xl
//             "
//           >

//             <div className="flex flex-col md:h-full md:flex-row">

//               {/* =========================
//                   PROFILE IMAGE
//               ========================= */}

//               <div
//                 className="
//                   order-first
//                   h-[260px]
//                   w-full
//                   flex-shrink-0
//                   md:order-last
//                   md:h-full
//                   md:w-[340px]
//                 "
//               >

//                 <img
//                   src={
//                     profile.image ||
//                     "https://placehold.co/600x800?text=No+Image"
//                   }
//                   alt={profile.name}
//                   className="h-full w-full object-cover"
//                 />

//               </div>

//               {/* =========================
//                   PROFILE DETAILS
//               ========================= */}

//               <div
//                 className="
//                   flex
//                   min-w-0
//                   flex-1
//                   flex-col
//                   justify-between
//                   p-5
//                   sm:p-6
//                 "
//               >

//                 {/* PROFILE INFORMATION */}

//                 <div>

//                   {/* CATEGORY */}

//                   <span
//                     className="
//                       inline-block
//                       rounded-full
//                       bg-red-100
//                       px-3
//                       py-1.5
//                       text-xs
//                       font-semibold
//                       text-red-600
//                       sm:px-4
//                       sm:py-2
//                       sm:text-sm
//                     "
//                   >
//                     {profile.category}
//                   </span>

//                   {/* NAME */}

//                   <h2
//                     className="
//                       mt-3
//                       text-2xl
//                       font-bold
//                       text-gray-900
//                       sm:mt-5
//                       sm:text-3xl
//                     "
//                   >
//                     {profile.name}
//                   </h2>

//                   {/* LOCATION */}

//                   <p
//                     className="
//                       mt-2
//                       text-sm
//                       font-medium
//                       text-gray-500
//                       sm:text-lg
//                     "
//                   >
//                     📍 {profile.city}, {profile.state}
//                   </p>

//                   {/* DESCRIPTION */}

//                   {profile.description && (

//                     <div
//                       className="
//                         mt-4
//                         rounded-xl
//                         bg-green-50
//                         p-4
//                         sm:mt-6
//                         sm:p-5
//                       "
//                     >

//                       <p
//                         className="
//                           line-clamp-3
//                           text-sm
//                           leading-6
//                           text-black-600
//                           sm:leading-8
//                         "
//                       >
//                         {profile.description}
//                       </p>

//                     </div>

//                   )}

//                 </div>

//                 {/* =========================
//                     ACTION BUTTONS
//                 ========================= */}

//                 <div
//                   className="
//                     mt-6
//                     flex
//                     flex-wrap
//                     gap-2
//                     sm:gap-3
//                     md:mt-6
                   
//                   "
//                 >

//                   {/* CALL */}

//                   <a
//                     href={`tel:${profile.phone}`}
//                     className="
//                       inline-flex
//                       items-center
//                       justify-center
//                       rounded-xl
//                       bg-blue-600
//                       px-4
//                       py-2.5
//                       text-sm
//                       font-semibold
//                       text-white
//                       transition
//                       hover:bg-blue-700
//                       sm:px-6
//                       sm:py-3
//                     "
//                   >
//                     📞 Call Now
//                   </a>

//                   {/* WHATSAPP */}

//                   <a
//                     href={`https://wa.me/${profile.whatsapp}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="
//                       inline-flex
//                       items-center
//                       justify-center
//                       rounded-xl
//                       bg-green-600
//                       px-4
//                       py-2.5
//                       text-sm
//                       font-semibold
//                       text-white
//                       transition
//                       hover:bg-green-700
//                       sm:px-6
//                       sm:py-3
//                     "
//                   >
//                     💬 WhatsApp
//                   </a>

//                   {/* VIEW DETAILS */}

//                   <Link
//                     href={`/profiles/${profile.id}`}
//                     className="
//                       inline-flex
//                       items-center
//                       justify-center
//                       rounded-xl
//                       bg-gray-900
//                       px-4
//                       py-2.5
//                       text-sm
//                       font-semibold
//                       text-white
//                       transition
//                       hover:bg-black
//                       sm:px-6
//                       sm:py-3
//                     "
//                   >
//                     View Details →
//                   </Link>

//                 </div>

//               </div>

//             </div>

//           </div>

//         ))}

//       </div>

//       {/* =========================
//           PAGINATION
//       ========================= */}

//       {totalPages > 1 && (

//         <div
//           className="
//             mt-10
//             flex
//             flex-wrap
//             items-center
//             justify-center
//             gap-2
//             md:mt-14
//           "
//         >

//           {/* PREVIOUS */}

//           <Link
//             href={`/profiles?category=${category}&state=${state}&city=${city}&page=${page - 1}`}
//             className={`
//               rounded-xl
//               border
//               px-3
//               py-2
//               text-sm
//               font-semibold
//               transition
//               sm:px-5
//               sm:py-3
//               ${
//                 page === 1
//                   ? "pointer-events-none bg-gray-200 text-gray-400"
//                   : "bg-white hover:bg-red-50"
//               }
//             `}
//           >
//             ← Previous
//           </Link>

//           {/* PAGE NUMBERS */}

//           {Array.from({ length: totalPages }).map((_, index) => (

//             <Link
//               key={index}
//               href={`/profiles?category=${category}&state=${state}&city=${city}&page=${index + 1}`}
//               className={`
//                 rounded-xl
//                 border
//                 px-3
//                 py-2
//                 text-sm
//                 font-semibold
//                 transition
//                 sm:px-5
//                 sm:py-3
//                 ${
//                   page === index + 1
//                     ? "bg-red-600 text-white"
//                     : "bg-white hover:bg-red-50"
//                 }
//               `}
//             >
//               {index + 1}
//             </Link>

//           ))}

//           {/* NEXT */}

//           <Link
//             href={`/profiles?category=${category}&state=${state}&city=${city}&page=${page + 1}`}
//             className={`
//               rounded-xl
//               border
//               px-3
//               py-2
//               text-sm
//               font-semibold
//               transition
//               sm:px-5
//               sm:py-3
//               ${
//                 page === totalPages
//                   ? "pointer-events-none bg-gray-200 text-gray-400"
//                   : "bg-white hover:bg-red-50"
//               }
//             `}
//           >
//             Next →
//           </Link>

//         </div>

//       )}

//     </div>
//   );
// }



// --------------------------------------

// ------------------------------------





// "use client";

// import { Suspense, useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
// import Link from "next/link";

// import { searchProfiles } from "@/services/profile.service";

// type Profile = {
//   id: number;
//   name: string;
//   state: string;
//   city: string;
//   category: string;
//   phone: string;
//   whatsapp: string;
//   description?: string;
//   image?: string;
// };

// function ProfilesContent() {
//   const params = useSearchParams();

//   const category = params.get("category") || "";
//   const state = params.get("state") || "";
//   const city = params.get("city") || "";
//   const page = Number(params.get("page") || 1);

//   const [profiles, setProfiles] = useState<Profile[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [totalPages, setTotalPages] = useState(1);

//   useEffect(() => {
//     async function loadProfiles() {
//       try {
//         setLoading(true);

//         const data = await searchProfiles(
//           category,
//           state,
//           city,
//           page,
//           10
//         );

//         setProfiles(data.profiles);
//         setTotalPages(data.totalPages);
//       } catch (error) {
//         console.error(error);
//         setProfiles([]);
//       } finally {
//         setLoading(false);
//       }
//     }

//     loadProfiles();
//   }, [category, state, city, page]);

//   if (loading) {
//     return (
//       <div className="flex min-h-[50vh] items-center justify-center">
//         <p className="text-xl font-semibold">Loading Profiles...</p>
//       </div>
//     );
//   }

//   return (
//     <div className="mx-auto max-w-7xl px-5">

//       {/* Header */}
//       <div className="mb-10">

//         <h1 className="text-4xl font-extrabold text-gray-900">
//           Search Results
//         </h1>

//         <p className="mt-2 text-gray-500">
//           {profiles.length} Profiles Found
//         </p>

//         <div className="mt-4 flex flex-wrap gap-3">

//           {category && (
//             <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
//               Category : {category}
//             </span>
//           )}

//           {state && (
//             <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
//               State : {state}
//             </span>
//           )}

//           {city && (
//             <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
//               City : {city}
//             </span>
//           )}

//         </div>

//       </div>

//       {/* No Profiles */}
//       {profiles.length === 0 && (
//         <div className="rounded-2xl bg-white p-16 text-center shadow">

//           <h2 className="text-3xl font-bold">
//             No Profiles Found
//           </h2>

//           <p className="mt-3 text-gray-500">
//             Try another Category, State or City.
//           </p>

//         </div>
//       )}

//       {/* Profiles */}
//       <div className="space-y-8">

//         {profiles.map((profile) => (

//           <div
//             key={profile.id}
//             className="w-full overflow-hidden rounded-3xl bg-white shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
//           >

//             <div className="flex min-h-[320px] flex-col md:h-[320px] md:flex-row">

//               {/* Details */}
//               <div className="flex flex-1 flex-col justify-between p-5 md:p-6">

//                 <div>

//                   <span className="inline-block rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
//                     {profile.category}
//                   </span>

//                   <h2 className="mt-5 text-2xl font-bold text-gray-900 md:text-3xl">
//                     {profile.name}
//                   </h2>

//                   <p className="mt-2 text-lg font-medium text-gray-500">
//                     📍 {profile.city}, {profile.state}
//                   </p>

//                   {profile.description && (
//                     <div className="mt-5 rounded-xl bg-gray-50 p-4">

//                       <p className="leading-7 text-gray-600 line-clamp-3">
//                         {profile.description}
//                       </p>

//                     </div>
//                   )}

//                 </div>

//                 {/* Buttons */}
//                 <div className="mt-6 flex flex-wrap gap-3">

//                   <a
//                     href={`tel:${profile.phone}`}
//                     className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
//                   >
//                     📞 Call Now
//                   </a>

//                   <a
//                     href={`https://wa.me/${profile.whatsapp}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
//                   >
//                     💬 WhatsApp
//                   </a>

//                   <Link
//                     href={`/profiles/${profile.id}`}
//                     className="rounded-xl bg-gray-900 px-5 py-3 font-semibold text-white transition hover:bg-black"
//                   >
//                     View Details →
//                   </Link>

//                 </div>

//               </div>

//               {/* Image */}
//               <div className="h-[260px] w-full flex-shrink-0 md:h-full md:w-[340px]">

//                 <img
//                   src={
//                     profile.image ||
//                     "https://placehold.co/600x800?text=No+Image"
//                   }
//                   alt={profile.name}
//                   className="h-full w-full object-cover"
//                 />

//               </div>

//             </div>

//           </div>

//         ))}

//       </div>

//       {/* Pagination */}
//       {totalPages > 1 && (

//         <div className="mt-14 flex flex-wrap items-center justify-center gap-2">

//           <Link
//             href={`/profiles?category=${encodeURIComponent(
//               category
//             )}&state=${encodeURIComponent(
//               state
//             )}&city=${encodeURIComponent(
//               city
//             )}&page=${page - 1}`}
//             className={`rounded-xl border px-5 py-3 font-semibold transition ${
//               page === 1
//                 ? "pointer-events-none bg-gray-200 text-gray-400"
//                 : "bg-white hover:bg-red-50"
//             }`}
//           >
//             ← Previous
//           </Link>

//           {Array.from({ length: totalPages }).map((_, index) => {

//             const pageNumber = index + 1;

//             return (
//               <Link
//                 key={pageNumber}
//                 href={`/profiles?category=${encodeURIComponent(
//                   category
//                 )}&state=${encodeURIComponent(
//                   state
//                 )}&city=${encodeURIComponent(
//                   city
//                 )}&page=${pageNumber}`}
//                 className={`rounded-xl border px-5 py-3 font-semibold transition ${
//                   page === pageNumber
//                     ? "bg-red-600 text-white"
//                     : "bg-white hover:bg-red-50"
//                 }`}
//               >
//                 {pageNumber}
//               </Link>
//             );
//           })}

//           <Link
//             href={`/profiles?category=${encodeURIComponent(
//               category
//             )}&state=${encodeURIComponent(
//               state
//             )}&city=${encodeURIComponent(
//               city
//             )}&page=${page + 1}`}
//             className={`rounded-xl border px-5 py-3 font-semibold transition ${
//               page === totalPages
//                 ? "pointer-events-none bg-gray-200 text-gray-400"
//                 : "bg-white hover:bg-red-50"
//             }`}
//           >
//             Next →
//           </Link>

//         </div>

//       )}

//     </div>
//   );
// }

// export default function ProfilesPage() {
//   return (
//     <Suspense
//       fallback={
//         <div className="flex min-h-[50vh] items-center justify-center">
//           <p className="text-xl font-semibold">
//             Loading Profiles...
//           </p>
//         </div>
//       }
//     >
//       <ProfilesContent />
//     </Suspense>
//   );
// }


// ----------------------------------





"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

import { searchProfiles } from "@/services/profile.service";
import {
  getStates,
  getCities,
} from "@/services/location.service";
import { getCategories } from "@/services/category.service";

type Profile = {
  id: number;
  name: string;
  state: number;
  city: number;
  category: number;
  phone: string;
  whatsapp: string;
  description?: string;
  image?: string;
};

type State = {
  state_id: number;
  state_name: string;
  state_code: string;
};

type City = {
  city_id: number;
  city_name: string;
  state_name: string;
  state_code: string;
};

type Category = {
  id: number;
  name: string;
};

function ProfilesContent() {
  const params = useSearchParams();

  // These are IDs from URL
  const category = params.get("category") || "";
  const state = params.get("state") || "";
  const city = params.get("city") || "";
  const page = Number(params.get("page") || 1);

  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);

  // Master data for displaying names
  const [states, setStates] = useState<State[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  // =====================================================
  // LOAD STATES + CATEGORIES
  // =====================================================

  useEffect(() => {
    async function loadMasterData() {
      try {
        const [stateData, categoryData] = await Promise.all([
          getStates(),
          getCategories(),
        ]);

        setStates(stateData);
        setCategories(categoryData);
      } catch (error) {
        console.error("Failed to load master data:", error);
      }
    }

    loadMasterData();
  }, []);

  // =====================================================
  // LOAD CITY DATA
  // =====================================================

  useEffect(() => {
    async function loadCityData() {
      if (!state) {
        setCities([]);
        return;
      }

      try {
        const cityData = await getCities(state);
        setCities(cityData);
      } catch (error) {
        console.error("Failed to load city data:", error);
        setCities([]);
      }
    }

    loadCityData();
  }, [state]);

  // =====================================================
  // GET DISPLAY NAMES
  // =====================================================

  const categoryName =
    categories.find(
      (item) => String(item.id) === String(category)
    )?.name || category;

  const stateName =
    states.find(
      (item) => String(item.state_id) === String(state)
    )?.state_name || state;

  const cityName =
    cities.find(
      (item) => String(item.city_id) === String(city)
    )?.city_name || city;

  // =====================================================
  // LOAD PROFILES
  // =====================================================

  useEffect(() => {
    async function loadProfiles() {
      try {
        setLoading(true);

        const data = await searchProfiles(
          category,
          state,
          city,
          page,
          10
        );

        setProfiles(data.profiles);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error(error);
        setProfiles([]);
      } finally {
        setLoading(false);
      }
    }

    loadProfiles();
  }, [category, state, city, page]);

  // =====================================================
  // LOADING
  // =====================================================

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <p className="text-xl font-semibold">
          Loading Profiles...
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-5">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="mb-10">

        <h1 className="text-4xl font-extrabold text-gray-900">
          Search Results
        </h1>

        <p className="mt-2 text-gray-500">
          {profiles.length} Profiles Found
        </p>

        {/* =====================================================
            FILTER BADGES
        ===================================================== */}

        <div className="mt-4 flex flex-wrap gap-3">

          {category && (
            <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
              Category : {categoryName}
            </span>
          )}

          {state && (
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              State : {stateName}
            </span>
          )}

          {city && (
            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              City : {cityName}
            </span>
          )}

        </div>

      </div>

      {/* =====================================================
          NO PROFILES
      ===================================================== */}

      {profiles.length === 0 && (
        <div className="rounded-2xl bg-white p-16 text-center shadow">

          <h2 className="text-3xl font-bold">
            No Profiles Found
          </h2>

          <p className="mt-3 text-gray-500">
            Try another Category, State or City.
          </p>

        </div>
      )}

      {/* =====================================================
          PROFILES
      ===================================================== */}

      <div className="space-y-8">

        {profiles.map((profile) => {

          const profileCategoryName =
            categories.find(
              (item) =>
                String(item.id) === String(profile.category)
            )?.name || String(profile.category);

          const profileStateName =
            states.find(
              (item) =>
                String(item.state_id) === String(profile.state)
            )?.state_name || String(profile.state);

          const profileCityName =
            cities.find(
              (item) =>
                String(item.city_id) === String(profile.city)
            )?.city_name || String(profile.city);

          return (
            <div
              key={profile.id}
              className="w-full overflow-hidden rounded-3xl bg-white shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >

              <div className="flex min-h-[320px] flex-col md:h-[320px] md:flex-row">

                {/* =====================================================
                    DETAILS
                ===================================================== */}

                <div className="flex flex-1 flex-col justify-between p-5 md:p-6">

                  <div>
{/* 
                    <span className="inline-block rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
                      {profileCategoryName}
                    </span> */}

                    <h2 className="mt-5 text-2xl font-bold text-gray-900 md:text-3xl">
                      {profile.name}
                    </h2>

                    <p className="mt-2 text-lg font-medium text-gray-500">
                      📍 {profileCityName}, {profileStateName}
                    </p>

                    {/* {profile.description && (
                      <div className="mt-5 rounded-xl bg-gray-50 p-4">

                        <p className="leading-7 text-gray-600 line-clamp-3">
                          {profile.description}
                        </p>

                      </div>
                    )} */}


{profile.description && (
  <div className="mt-5 min-h-[90px] max-h-[90px] overflow-hidden rounded-xl bg-gray-50 p-4">
    <p className="line-clamp-3 leading-7 text-gray-600">
      {profile.description}
    </p>
  </div>
)}









                  </div>

                  {/* =====================================================
                      BUTTONS
                  ===================================================== */}

                  <div className="mt-6 flex flex-wrap gap-3">

                    <a
                      href={`tel:${profile.phone}`}
                      className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
                    >
                      📞 Call Now
                    </a>

                    <a
                      href={`https://wa.me/${profile.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
                    >
                      💬 WhatsApp
                    </a>

                    <Link
                      href={`/profiles/${profile.id}`}
                      className="rounded-xl bg-gray-900 px-5 py-3 font-semibold text-white transition hover:bg-black"
                    >
                      View Details →
                    </Link>

                  </div>

                </div>

                {/* =====================================================
                    IMAGE
                ===================================================== */}

                <div className="h-[260px] w-full flex-shrink-0 md:h-full md:w-[340px]">

                  <img
                    src={
                      profile.image ||
                      "https://placehold.co/600x800?text=No+Image"
                    }
                    alt={profile.name}
                    className="h-full w-full object-cover"
                  />

                </div>

              </div>

            </div>
          );
        })}

      </div>

      {/* =====================================================
          PAGINATION
      ===================================================== */}

      {totalPages > 1 && (

        <div className="mt-14 flex flex-wrap items-center justify-center gap-2">

          {/* Previous */}

          <Link
            href={`/profiles?category=${encodeURIComponent(
              category
            )}&state=${encodeURIComponent(
              state
            )}&city=${encodeURIComponent(
              city
            )}&page=${page - 1}`}
            className={`rounded-xl border px-5 py-3 font-semibold transition ${
              page === 1
                ? "pointer-events-none bg-gray-200 text-gray-400"
                : "bg-white hover:bg-red-50"
            }`}
          >
            ← Previous
          </Link>

          {/* Page Numbers */}

          {Array.from({ length: totalPages }).map(
            (_, index) => {

              const pageNumber = index + 1;

              return (
                <Link
                  key={pageNumber}
                  href={`/profiles?category=${encodeURIComponent(
                    category
                  )}&state=${encodeURIComponent(
                    state
                  )}&city=${encodeURIComponent(
                    city
                  )}&page=${pageNumber}`}
                  className={`rounded-xl border px-5 py-3 font-semibold transition ${
                    page === pageNumber
                      ? "bg-red-600 text-white"
                      : "bg-white hover:bg-red-50"
                  }`}
                >
                  {pageNumber}
                </Link>
              );
            }
          )}

          {/* Next */}

          <Link
            href={`/profiles?category=${encodeURIComponent(
              category
            )}&state=${encodeURIComponent(
              state
            )}&city=${encodeURIComponent(
              city
            )}&page=${page + 1}`}
            className={`rounded-xl border px-5 py-3 font-semibold transition ${
              page === totalPages
                ? "pointer-events-none bg-gray-200 text-gray-400"
                : "bg-white hover:bg-red-50"
            }`}
          >
            Next →
          </Link>

        </div>

      )}

    </div>
  );
}

// =====================================================
// PAGE
// =====================================================

export default function ProfilesPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[50vh] items-center justify-center">
          <p className="text-xl font-semibold">
            Loading Profiles...
          </p>
        </div>
      }
    >
      <ProfilesContent />
    </Suspense>
  );
}

