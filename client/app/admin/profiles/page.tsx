// "use client";

// import { useEffect, useState } from "react";
// import {
//   getProfiles,
//   deleteProfile,
// } from "@/services/profile.service";

// type Profile = {
//   id: number;
//   name: string;
//   state: string;
//   city: string;
//   category: string;
//   phone: string;
//   whatsapp: string;
//   image?: string;
//   status: boolean;
// };

// export default function ProfilesPage() {
//   const [profiles, setProfiles] = useState<Profile[]>([]);

//   useEffect(() => {
//     loadProfiles();
//   }, []);

//   async function loadProfiles() {
//     try {
//       const data = await getProfiles();
//       setProfiles(data.data || data);
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   async function handleDelete(id: number) {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this profile?"
//     );

//     if (!confirmDelete) return;

//     try {
//       await deleteProfile(id);

//       setProfiles((prev) =>
//         prev.filter((profile) => profile.id !== id)
//       );

//       alert("✅ Profile deleted successfully");
//     } catch (error) {
//       console.error(error);
//       alert("❌ Failed to delete profile");
//     }
//   }

//   return (
//     <div className="p-8">
//       <h1 className="mb-8 text-3xl font-bold">
//         All Profiles
//       </h1>

//       <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
//         {profiles.map((profile) => (
//           <div
//             key={profile.id}
//             className="rounded-xl border bg-white p-5 shadow"
//           >
//             {profile.image && (
//               <img
//                 src={profile.image}
//                 alt={profile.name}
//                 className="mb-4 h-52 w-full rounded-lg object-cover"
//               />
//             )}

//             <h2 className="text-xl font-bold">
//               {profile.name}
//             </h2>

//             <p>
//               <strong>State:</strong> {profile.state}
//             </p>

//             <p>
//               <strong>City:</strong> {profile.city}
//             </p>

//             <p>
//               <strong>Category:</strong> {profile.category}
//             </p>

//             <p>
//               <strong>Phone:</strong> {profile.phone}
//             </p>

//             <p>
//               <strong>Status:</strong>{" "}
//               {profile.status ? "Active" : "Inactive"}
//             </p>

//             <button
//               onClick={() => handleDelete(profile.id)}
//               className="mt-5 w-full rounded-lg bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700"
//             >
//               🗑 Delete Profile
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// -----------------------------------



"use client";

import { useEffect, useState } from "react";
import {
  getProfiles,
  deleteProfile,
} from "@/services/profile.service";
import {
  getStates,
  getCities,
} from "@/services/location.service";
import { getCategories } from "@/services/category.service";

type Profile = {
  id: number;
  name: string;
  state: string;
  city: string;
  category: string;
  phone: string;
  whatsapp: string;
  image?: string;
  status: boolean;
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

export default function ProfilesPage() {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [states, setStates] = useState<State[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    try {
      const [profileData, stateData, categoryData] = await Promise.all([
        getProfiles(),
        getStates(),
        getCategories(),
      ]);

      const profileList = profileData.data || profileData;

      setProfiles(profileList);
      setStates(stateData);
      setCategories(categoryData);

      // Get unique state IDs used by profiles
      // const stateIds = [
      //   ...new Set(
      //     profileList
      //       .map((profile: Profile) => String(profile.state))
      //       .filter(Boolean)
      //   ),
      // ];

      // // Load cities for all states used in profiles
      // const cityResults = await Promise.all(
      //   stateIds.map((stateId) => getCities(stateId))
      // );

// const stateIds: string[] = [
//   ...new Set(
//     profileList
//       .map((profile: Profile) => String(profile.state))
//       .filter(Boolean)
//   ),
// ];

// const cityResults = await Promise.all(
//   stateIds.map((stateId: string) => getCities(stateId))
// );

const stateIds = profileList
  .map((profile: Profile) => String(profile.state))
  .filter((stateId: string) => stateId !== "");

const uniqueStateIds: string[] = Array.from(
  new Set<string>(stateIds)
);

const cityResults = await Promise.all(
  uniqueStateIds.map((stateId: string) => getCities(stateId))
);














      setCities(cityResults.flat());
    } catch (err) {
      console.error("Failed to load profiles data:", err);
    }
  }

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

  async function handleDelete(id: number) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this profile?"
    );

    if (!confirmDelete) return;

    try {
      await deleteProfile(id);

      setProfiles((prev) =>
        prev.filter((profile) => profile.id !== id)
      );

      alert("✅ Profile deleted successfully");
    } catch (error) {
      console.error(error);
      alert("❌ Failed to delete profile");
    }
  }

  return (
    <div className="p-8">
      <h1 className="mb-8 text-3xl font-bold">
        All Profiles
      </h1>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className="rounded-xl border bg-white p-5 shadow"
          >
            {profile.image && (
              <img
                src={profile.image}
                alt={profile.name}
                className="mb-4 h-52 w-full rounded-lg object-cover"
              />
            )}

            <h2 className="text-xl font-bold">
              {profile.name}
            </h2>

            <p>
              <strong>State:</strong>{" "}
              {getStateName(profile.state)}
            </p>

            <p>
              <strong>City:</strong>{" "}
              {getCityName(profile.city)}
            </p>

            <p>
              <strong>Category:</strong>{" "}
              {getCategoryName(profile.category)}
            </p>

            <p>
              <strong>Phone:</strong> {profile.phone}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              {profile.status ? "Active" : "Inactive"}
            </p>

            <button
              onClick={() => handleDelete(profile.id)}
              className="mt-5 w-full rounded-lg bg-red-600 py-3 font-semibold text-white transition hover:bg-red-700"
            >
              🗑 Delete Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}