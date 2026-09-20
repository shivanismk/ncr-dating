// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import { getProfileById } from "@/services/profile.service";

// type Detail = {
//   label: string;
//   value: string;
// };

// type Profile = {
//   id: number;
//   name: string;
//   category: string;
//   state: string;
//   city: string;
//   phone: string;
//   whatsapp: string;
//   email: string;
//   address: string;
//   description: string;
//   image: string;
//   additionalDetails: Detail[];
// };

// export default function ProfileDetailsPage() {
//   const params = useParams();

//   const [profile, setProfile] = useState<Profile | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function loadProfile() {
//       try {
//         const data = await getProfileById(Number(params.id));
//         setProfile(data);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     }

//     loadProfile();
//   }, [params.id]);

//   if (loading) {
//     return (
//       <div className="flex min-h-screen items-center justify-center bg-slate-100">
//         <h1 className="text-2xl font-bold">Loading Profile...</h1>
//       </div>
//     );
//   }

//   if (!profile) {
//     return (
//       <div className="flex min-h-screen items-center justify-center bg-slate-100">
//         <h1 className="text-2xl font-bold">Profile Not Found</h1>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-slate-100 via-white to-slate-100 py-10">

//       <div className="mx-auto max-w-5xl rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl">

//         <div className="grid items-start gap-10 lg:grid-cols-2">

//           <div>

//             <img
//               src={
//                 profile.image ||
//                 "https://placehold.co/700x900?text=No+Image"
//               }
//               alt={profile.name}
//               className="h-[520px] w-full rounded-3xl object-cover shadow-xl"
//             />

//           </div>

//           <div className="flex flex-col justify-center">

//             <span className="inline-block w-fit rounded-full bg-gradient-to-r from-red-500 to-pink-600 px-5 py-2 text-sm font-semibold text-white shadow">
//               {profile.category}
//             </span>

//             <h1 className="mt-5 text-5xl font-extrabold text-gray-900">
//               {profile.name}
//             </h1>

//             <p className="mt-4 text-lg font-medium text-gray-500">
//               📍 {profile.city}, {profile.state}
//             </p>

//             <div className="mt-6 rounded-2xl bg-gray-50 p-5 shadow-sm">

//               <h3 className="mb-3 text-xl font-bold">
//                 About
//               </h3>

//               <p className="leading-8 text-gray-700">
//                 {profile.description || "No description available."}
//               </p>

//             </div>

//             <div className="mt-8 rounded-2xl border bg-gray-50 p-6 shadow-sm">

//               <h3 className="mb-5 text-xl font-bold">
//                 Contact Information
//               </h3>

//               <div className="space-y-4 text-gray-700">

//                 <p>
//                   <span className="font-bold">📞 Phone :</span>{" "}
//                   {profile.phone}
//                 </p>

//                 <p>
//                   <span className="font-bold">💬 WhatsApp :</span>{" "}
//                   {profile.whatsapp}
//                 </p>

//                 <p>
//                   <span className="font-bold">✉️ Email :</span>{" "}
//                   {profile.email || "-"}
//                 </p>

//                 <p>
//                   <span className="font-bold">📍 Address :</span>{" "}
//                   {profile.address || "-"}
//                 </p>

//               </div>

//             </div>

//             <div className="mt-8 flex flex-wrap gap-4">

//               <a
//                 href={`tel:${profile.phone}`}
//                 className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
//               >
//                 📞 Call Now
//               </a>

//               <a
//                 href={`https://wa.me/${profile.whatsapp}`}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="rounded-xl bg-green-600 px-8 py-3 font-semibold text-white transition hover:bg-green-700"
//               >
//                 💬 WhatsApp
//               </a>
//                    </div>

//           </div>

//         </div>

//         {profile.additionalDetails &&
//           profile.additionalDetails.length > 0 && (

//           <div className="mt-14">

//             <div className="mb-8 flex items-center justify-between">

//               <h2 className="text-3xl font-bold text-gray-900">
//                 Additional Details
//               </h2>

//               <div className="h-1 flex-1 ml-6 rounded-full bg-gradient-to-r from-red-500 to-pink-500"></div>

//             </div>

//             <div className="grid gap-6 md:grid-cols-2">

//               {profile.additionalDetails.map((item, index) => (

//                 <div
//                   key={index}
//                   className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
//                 >

//                   <h3 className="text-lg font-bold text-red-600">
//                     {item.label}
//                   </h3>

//                   <p className="mt-3 leading-7 text-gray-700">
//                     {item.value}
//                   </p>

//                 </div>

//               ))}

//             </div>

//           </div>

//         )}

//       </div>

//     </div>
//   );
// }



// -----------------------


"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getProfileById } from "@/services/profile.service";
import {
  getStates,
  getCities,
} from "@/services/location.service";
import { getCategories } from "@/services/category.service";

type Detail = {
  label: string;
  value: string;
};

type Profile = {
  id: number;
  name: string;
  category: string;
  state: string;
  city: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  description: string;
  image: string;
  additionalDetails: Detail[];
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

export default function ProfileDetailsPage() {
  const params = useParams();

  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);

  const [states, setStates] = useState<State[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function loadProfile() {
      try {
        const data = await getProfileById(Number(params.id));

        setProfile(data);

        // Load state + category master data
        const [stateData, categoryData] = await Promise.all([
          getStates(),
          getCategories(),
        ]);

        setStates(stateData);
        setCategories(categoryData);

        // Load cities using profile state ID
        if (data?.state) {
          const cityData = await getCities(data.state);
          setCities(cityData);
        }
      } catch (error) {
        console.error("Failed to load profile:", error);
      } finally {
        setLoading(false);
      }
    }

    if (params.id) {
      loadProfile();
    }
  }, [params.id]);

  function getStateName(stateId: string) {
    return (
      states.find(
        (state) => String(state.state_id) === String(stateId)
      )?.state_name || stateId
    );
  }

  function getCityName(cityId: string) {
    return (
      cities.find(
        (city) => String(city.city_id) === String(cityId)
      )?.city_name || cityId
    );
  }

  function getCategoryName(categoryId: string) {
    return (
      categories.find(
        (category) => String(category.id) === String(categoryId)
      )?.name || categoryId
    );
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100">
        <h1 className="text-2xl font-bold">
          Loading Profile...
        </h1>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-100">
        <h1 className="text-2xl font-bold">
          Profile Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-100 via-white to-slate-100 py-10">

      <div className="mx-auto max-w-5xl rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl">

        <div className="grid items-start gap-10 lg:grid-cols-2">

          <div>

            <img
              src={
                profile.image ||
                "https://placehold.co/700x900?text=No+Image"
              }
              alt={profile.name}
              className="h-[520px] w-full rounded-3xl object-cover shadow-xl"
            />

          </div>

          <div className="flex flex-col justify-center">

            <span className="inline-block w-fit rounded-full bg-gradient-to-r from-red-500 to-pink-600 px-5 py-2 text-sm font-semibold text-white shadow">
              {getCategoryName(profile.category)}
            </span>

            <h1 className="mt-5 text-5xl font-extrabold text-gray-900">
              {profile.name}
            </h1>

            <p className="mt-4 text-lg font-medium text-gray-500">
              📍 {getCityName(profile.city)}, {getStateName(profile.state)}
            </p>

            <div className="mt-6 rounded-2xl bg-gray-50 p-5 shadow-sm">

              <h3 className="mb-3 text-xl font-bold">
                About
              </h3>

              <p className="leading-8 text-gray-700">
                {profile.description || "No description available."}
              </p>

            </div>

            <div className="mt-8 rounded-2xl border bg-gray-50 p-6 shadow-sm">

              <h3 className="mb-5 text-xl font-bold">
                Contact Information
              </h3>

              <div className="space-y-4 text-gray-700">

                <p>
                  <span className="font-bold">📞 Phone :</span>{" "}
                  {profile.phone}
                </p>

                <p>
                  <span className="font-bold">💬 WhatsApp :</span>{" "}
                  {profile.whatsapp}
                </p>

                <p>
                  <span className="font-bold">✉️ Email :</span>{" "}
                  {profile.email || "-"}
                </p>

                <p>
                  <span className="font-bold">📍 Address :</span>{" "}
                  {profile.address || "-"}
                </p>

              </div>

            </div>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href={`tel:${profile.phone}`}
                className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                📞 Call Now
              </a>

              <a
                href={`https://wa.me/${profile.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-green-600 px-8 py-3 font-semibold text-white transition hover:bg-green-700"
              >
                💬 WhatsApp
              </a>

            </div>

          </div>

        </div>

        {profile.additionalDetails &&
          profile.additionalDetails.length > 0 && (

          <div className="mt-14">

            <div className="mb-8 flex items-center justify-between">

              <h2 className="text-3xl font-bold text-gray-900">
                Additional Details
              </h2>

              <div className="ml-6 h-1 flex-1 rounded-full bg-gradient-to-r from-red-500 to-pink-500"></div>

            </div>

            <div className="grid gap-6 md:grid-cols-2">

              {profile.additionalDetails.map((item, index) => (

                <div
                  key={index}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                  <h3 className="text-lg font-bold text-red-600">
                    {item.label}
                  </h3>

                  <p className="mt-3 leading-7 text-gray-700">
                    {item.value}
                  </p>

                </div>

              ))}

            </div>

          </div>

        )}

      </div>

    </div>
  );
}


