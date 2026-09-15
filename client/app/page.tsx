// import Hero from "@/components/Hero";

// export default function HomePage() {
//   return (

// <section className="mx-auto max-w-7xl px-5 py-20">

// <h1 className="text-5xl font-bold">

// Welcome to All India CGs

// </h1>

// <p className="mt-6 max-w-xl text-gray-600">

// Professional Directory Platform

// </p>

// </section>

//   );
// }

// import SearchResults from "@/components/home/SearchResults";
// import SearchResults from "@/components/home/layout/SearchResults";




// import { Suspense } from "react";

// import Hero from "@/components/Hero/Hero";
// import CategorySection from "@/components/Category/CategorySection";
// import LocationSection from "@/components/Location/LocationSection";

// export default function HomePage() {
//   return (
//     <main>
//       <Hero />
//       {/* <SearchResults /> */}
// {/* maine update kiya ye */}
//      <LocationSection />
//       {/* <CategorySection/> */}
//     </main>
//   );
// }



import { Suspense } from "react";

import Hero from "@/components/Hero/Hero";
import LocationSection from "@/components/Location/LocationSection";

function HomeContent() {
  return (
    <main>
      <Hero />
      <LocationSection />
    </main>
  );
}

export default function HomePage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen">
          <div className="flex min-h-screen items-center justify-center">
            Loading...
          </div>
        </main>
      }
    >
      <HomeContent />
    </Suspense>
  );
}



