// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { Search } from "lucide-react";

// import {
//   getStates,
//   getCities,
// } from "@/services/location.service";

// import {
//   getCategories,
// } from "@/services/category.service";

// export default function SearchBar() {
//   const router = useRouter();

//   const [categories, setCategories] = useState<string[]>([]);
//   // const [states, setStates] = useState<string[]>([]);
//   type State = {
//   state_id: number;
//   state_name: string;
//   state_code: string;
// };

// const [states, setStates] = useState<State[]>([]);
  
//   const [cities, setCities] = useState<string[]>([]);

//   const [category, setCategory] = useState("");
//   const [state, setState] = useState("");
//   const [city, setCity] = useState("");

//   const [loadingCategories, setLoadingCategories] = useState(true);
//   const [loadingStates, setLoadingStates] = useState(true);
//   const [loadingCities, setLoadingCities] = useState(false);
//   const [searching, setSearching] = useState(false);

//   useEffect(() => {
//     async function loadData() {
//       try {
//         const [categoryData, stateData] = await Promise.all([
//           getCategories(),
//           getStates(),
//         ]);

//         setCategories(categoryData);
//         setStates(stateData);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoadingCategories(false);
//         setLoadingStates(false);
//       }
//     }

//     loadData();
//   }, []);

//   useEffect(() => {
//     async function loadCities() {
//       if (!state) {
//         setCities([]);
//         setCity("");
//         return;
//       }

//       setLoadingCities(true);

//       try {
//         const data = await getCities(state);
//         setCities(data);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoadingCities(false);
//       }

//       setCity("");
//     }

//     loadCities();
//   }, [state]);


//   function handleSearch(e: React.FormEvent) {
//     e.preventDefault();

//     const params = new URLSearchParams();

//     if (category) {
//       params.append("category", category);
//     }

//     if (state) {
//       params.append("state", state);
//     }

//     if (city) {
//       params.append("city", city);
//     }

//     if (params.toString() === "") {
//       alert("Please select at least one filter");
//       return;
//     }

//     setSearching(true);

//     router.push(`/profiles?${params.toString()}&page=1`);

//     setTimeout(() => {
//       setSearching(false);
//     }, 500);

//   }

//   return (
//     <form
//       onSubmit={handleSearch}
//       className="rounded-2xl bg-white p-5 shadow-2xl"
//     >
//       <div className="grid gap-4 md:grid-cols-4">


//         <select
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           className="rounded-xl border p-3 outline-none"
//         >
//           <option value="">Select Category</option>

//           <option value="Call Girl">
//             Call Girl
//           </option>
//         </select>

//         <select
//           value={state}
//           onChange={(e) => setState(e.target.value)}
//           className="rounded-xl border p-3 outline-none"
//           disabled={loadingStates}
//         >
//           <option value="">
//             {loadingStates
//               ? "Loading States..."
//               : "Select State"}
//           </option>

//           {states.map((item) => (
//             <option key={item} value={item}>
//               {item}
//             </option>
//           ))}
//         </select>

//         <select
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           className="rounded-xl border p-3 outline-none"
//           disabled={!state || loadingCities}
//         >
//           <option value="">
//             {!state
//               ? "Select State First"
//               : loadingCities
//                 ? "Loading Cities..."
//                 : "Select City"}
//           </option>

//           {cities.map((item) => (
//             <option key={item} value={item}>
//               {item}
//             </option>
//           ))}
//         </select>

//         <button
//           type="submit"
//           disabled={searching}
//           // className="flex items-center justify-center gap-2 rounded-xl bg-red-600 p-3 font-semibold text-white transition hover:bg-red-700"
//         className="flex items-center justify-center gap-2 rounded-xl bg-red-600 p-3 font-semibold text-white transition hover:bg-red-700 mb-3"
//         >
//           <Search size={18} />
//           {searching ? "Searching..." : "Search"}
//         </button>

//       </div>
//     </form>
//   );
// }



// ---------------------


// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { Search } from "lucide-react";

// import {
//   getStates,
//   getCities,
// } from "@/services/location.service";

// import {
//   getCategories,
// } from "@/services/category.service";

// type State = {
//   state_id: number;
//   state_name: string;
//   state_code: string;
// };

// export default function SearchBar() {
//   const router = useRouter();

//   const [categories, setCategories] = useState<string[]>([]);
//   const [states, setStates] = useState<State[]>([]);
//   const [cities, setCities] = useState<string[]>([]);

//   const [category, setCategory] = useState("");
//   const [state, setState] = useState("");
//   const [city, setCity] = useState("");

//   const [loadingCategories, setLoadingCategories] = useState(true);
//   const [loadingStates, setLoadingStates] = useState(true);
//   const [loadingCities, setLoadingCities] = useState(false);
//   const [searching, setSearching] = useState(false);

//   useEffect(() => {
//     async function loadData() {
//       try {
//         const [categoryData, stateData] = await Promise.all([
//           getCategories(),
//           getStates(),
//         ]);

//         setCategories(categoryData);
//         setStates(stateData);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoadingCategories(false);
//         setLoadingStates(false);
//       }
//     }

//     loadData();
//   }, []);

//   useEffect(() => {
//     async function loadCities() {
//       if (!state) {
//         setCities([]);
//         setCity("");
//         return;
//       }

//       setLoadingCities(true);

//       try {
//         const data = await getCities(state);
//         setCities(data);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoadingCities(false);
//       }

//       setCity("");
//     }

//     loadCities();
//   }, [state]);

//   function handleSearch(e: React.FormEvent) {
//     e.preventDefault();

//     const params = new URLSearchParams();

//     if (category) {
//       params.append("category", category);
//     }

//     if (state) {
//       params.append("state", state);
//     }

//     if (city) {
//       params.append("city", city);
//     }

//     if (params.toString() === "") {
//       alert("Please select at least one filter");
//       return;
//     }

//     setSearching(true);

//     router.push(`/profiles?${params.toString()}&page=1`);

//     setTimeout(() => {
//       setSearching(false);
//     }, 500);
//   }

//   return (
//     <form
//       onSubmit={handleSearch}
//       className="rounded-2xl bg-white p-5 shadow-2xl"
//     >
//       <div className="grid gap-4 md:grid-cols-4">

//         <select
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           className="rounded-xl border p-3 outline-none"
//         >
//           <option value="">Select Category</option>

//           <option value="Call Girl">
//             Call Girl
//           </option>
//         </select>

//         <select
//           value={state}
//           onChange={(e) => setState(e.target.value)}
//           className="rounded-xl border p-3 outline-none"
//           disabled={loadingStates}
//         >
//           <option value="">
//             {loadingStates
//               ? "Loading States..."
//               : "Select State"}
//           </option>

//           {states.map((item) => (
//             <option
//               key={item.state_id}
//               value={item.state_name}
//             >
//               {item.state_name}
//             </option>
//           ))}
//         </select>

//         <select
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           className="rounded-xl border p-3 outline-none"
//           disabled={!state || loadingCities}
//         >
//           <option value="">
//             {!state
//               ? "Select State First"
//               : loadingCities
//                 ? "Loading Cities..."
//                 : "Select City"}
//           </option>

//           {cities.map((item) => (
//             <option key={item} value={item}>
//               {item}
//             </option>
//           ))}
//         </select>

//         <button
//           type="submit"
//           disabled={searching}
//           className="mb-3 flex items-center justify-center gap-2 rounded-xl bg-red-600 p-3 font-semibold text-white transition hover:bg-red-700"
//         >
//           <Search size={18} />
//           {searching ? "Searching..." : "Search"}
//         </button>

//       </div>
//     </form>
//   );
// }


// ----------------



// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { Search } from "lucide-react";

// import {
//   getStates,
//   getCities,
// } from "@/services/location.service";

// import {
//   getCategories,
// } from "@/services/category.service";

// type State = {
//   state_id: number;
//   state_name: string;
//   state_code: string;
// };

// type City = {
//   city_id: number;
//   city_name: string;
//   state_name: string;
//   state_code: string;
// };

// export default function SearchBar() {
//   const router = useRouter();

//   // const [categories, setCategories] = useState<string[]>([]);
//   type Category = {
//   id: number;
//   name: string;
// };

// const [categories, setCategories] = useState<Category[]>([]);
  
  
//   const [states, setStates] = useState<State[]>([]);
//   const [cities, setCities] = useState<City[]>([]);

//   const [category, setCategory] = useState("");
//   const [state, setState] = useState("");
//   const [city, setCity] = useState("");

//   const [loadingCategories, setLoadingCategories] = useState(true);
//   const [loadingStates, setLoadingStates] = useState(true);
//   const [loadingCities, setLoadingCities] = useState(false);
//   const [searching, setSearching] = useState(false);

//   useEffect(() => {
//     async function loadData() {
//       try {
//         const [categoryData, stateData] = await Promise.all([
//           getCategories(),
//           getStates(),
//         ]);

//         setCategories(categoryData);
//         setStates(stateData);
//       } catch (error) {
//         console.error("Failed to load search data:", error);
//       } finally {
//         setLoadingCategories(false);
//         setLoadingStates(false);
//       }
//     }

//     loadData();
//   }, []);

//   useEffect(() => {
//     async function loadCities() {
//       if (!state) {
//         setCities([]);
//         setCity("");
//         return;
//       }

//       setLoadingCities(true);

//       try {
//         const data = await getCities(state);
//         setCities(data);
//       } catch (error) {
//         console.error("Failed to load cities:", error);
//         setCities([]);
//       } finally {
//         setLoadingCities(false);
//       }

//       setCity("");
//     }

//     loadCities();
//   }, [state]);

//   function handleSearch(e: React.FormEvent) {
//     e.preventDefault();

//     const params = new URLSearchParams();

//     if (category) {
//       params.append("category", category);
//     }

//     if (state) {
//       params.append("state", state);
//     }

//     if (city) {
//       params.append("city", city);
//     }

//     if (params.toString() === "") {
//       alert("Please select at least one filter");
//       return;
//     }

//     setSearching(true);

//     router.push(`/profiles?${params.toString()}&page=1`);

//     setTimeout(() => {
//       setSearching(false);
//     }, 500);
//   }

//   return (
//     <form
//       onSubmit={handleSearch}
//       className="rounded-2xl bg-white p-5 shadow-2xl"
//     >
//       <div className="grid gap-4 md:grid-cols-4">

//         {/* Category */}
//         <select
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//           className="rounded-xl border p-3 outline-none"
//           disabled={loadingCategories}
//         >
//           <option value="">
//             {loadingCategories
//               ? "Loading Categories..."
//               : "Select Category"}
//           </option>

//           {/* {categories.map((item) => (
//             <option key={item} value={item}>
//               {item}
//             </option>
//           ))} */}
          
//           {categories.map((item) => (
//   <option key={item.id} value={item.name}>
//     {item.name}
//   </option>
// ))}





//         </select>

//         {/* State */}
//         <select
//           value={state}
//           onChange={(e) => setState(e.target.value)}
//           className="rounded-xl border p-3 outline-none"
//           disabled={loadingStates}
//         >
//           <option value="">
//             {loadingStates
//               ? "Loading States..."
//               : "Select State"}
//           </option>

//           {states.map((item) => (
//             <option
//               key={item.state_id}
//               value={item.state_name}
//             >
//               {item.state_name}
//             </option>
//           ))}
//         </select>

//         {/* City */}
//         <select
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//           className="rounded-xl border p-3 outline-none"
//           disabled={!state || loadingCities}
//         >
//           <option value="">
//             {!state
//               ? "Select State First"
//               : loadingCities
//                 ? "Loading Cities..."
//                 : "Select City"}
//           </option>

//           {cities.map((item) => (
//             <option
//               key={item.city_id}
//               value={item.city_name}
//             >
//               {item.city_name}
//             </option>
//           ))}
//         </select>

//         {/* Search */}
//         <button
//           type="submit"
//           disabled={searching}
//           className="mb-3 flex items-center justify-center gap-2 rounded-xl bg-red-600 p-3 font-semibold text-white transition hover:bg-red-700"
//         >
//           <Search size={18} />
//           {searching ? "Searching..." : "Search"}
//         </button>

//       </div>
//     </form>
//   );
// }



// -----------------------


"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

import {
  getStates,
  getCities,
} from "@/services/location.service";

import {
  getCategories,
} from "@/services/category.service";

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

export default function SearchBar() {
  const router = useRouter();

  const [categories, setCategories] = useState<Category[]>([]);
  const [states, setStates] = useState<State[]>([]);
  const [cities, setCities] = useState<City[]>([]);

  const [category, setCategory] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingStates, setLoadingStates] = useState(true);
  const [loadingCities, setLoadingCities] = useState(false);
  const [searching, setSearching] = useState(false);

  // =====================================================
  // LOAD CATEGORIES AND STATES
  // =====================================================

  useEffect(() => {
    async function loadData() {
      try {
        const [categoryData, stateData] = await Promise.all([
          getCategories(),
          getStates(),
        ]);

        setCategories(categoryData);
        setStates(stateData);
      } catch (error) {
        console.error("Failed to load search data:", error);
      } finally {
        setLoadingCategories(false);
        setLoadingStates(false);
      }
    }

    loadData();
  }, []);

  // =====================================================
  // LOAD CITIES WHEN STATE CHANGES
  // =====================================================

  useEffect(() => {
    async function loadCities() {
      if (!state) {
        setCities([]);
        setCity("");
        return;
      }

      setLoadingCities(true);
      setCity("");

      try {
        // state contains state_id
        const data = await getCities(state);

        setCities(data);
      } catch (error) {
        console.error("Failed to load cities:", error);
        setCities([]);
      } finally {
        setLoadingCities(false);
      }
    }

    loadCities();
  }, [state]);

  // =====================================================
  // SEARCH
  // =====================================================

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();

    const params = new URLSearchParams();

    // Category ID
    if (category) {
      params.append("category", category);
    }

    // State ID
    if (state) {
      params.append("state", state);
    }

    // City ID
    if (city) {
      params.append("city", city);
    }

    if (params.toString() === "") {
      alert("Please select at least one filter");
      return;
    }

    setSearching(true);

    router.push(`/profiles?${params.toString()}&page=1`);

    setTimeout(() => {
      setSearching(false);
    }, 500);
  }

  return (
    <form
      onSubmit={handleSearch}
      className="rounded-2xl bg-white p-5 shadow-2xl"
    >
      <div className="grid gap-4 md:grid-cols-4">

        {/* =====================================================
            CATEGORY
        ===================================================== */}

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-xl border p-3 outline-none"
          disabled={loadingCategories}
        >
          <option value="">
            {loadingCategories
              ? "Loading Categories..."
              : "Select Category"}
          </option>

          {categories.map((item) => (
            <option
              key={item.id}
              value={item.id}
            >
              {item.name}
            </option>
          ))}
        </select>

        {/* =====================================================
            STATE
        ===================================================== */}

        <select
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="rounded-xl border p-3 outline-none"
          disabled={loadingStates}
        >
          <option value="">
            {loadingStates
              ? "Loading States..."
              : "Select State"}
          </option>

          {states.map((item) => (
            <option
              key={item.state_id}
              value={item.state_id}
            >
              {item.state_name}
            </option>
          ))}
        </select>

        {/* =====================================================
            CITY
        ===================================================== */}

        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="rounded-xl border p-3 outline-none"
          disabled={!state || loadingCities}
        >
          <option value="">
            {!state
              ? "Select State First"
              : loadingCities
                ? "Loading Cities..."
                : "Select City"}
          </option>

          {cities.map((item) => (
            <option
              key={item.city_id}
              value={item.city_id}
            >
              {item.city_name}
            </option>
          ))}
        </select>

        {/* =====================================================
            SEARCH BUTTON
        ===================================================== */}

        <button
          type="submit"
          disabled={searching}
          className="mb-3 flex items-center justify-center gap-2 rounded-xl bg-red-600 p-3 font-semibold text-white transition hover:bg-red-700"
        >
          <Search size={18} />

          {searching
            ? "Searching..."
            : "Search"}
        </button>

      </div>
    </form>
  );
}

