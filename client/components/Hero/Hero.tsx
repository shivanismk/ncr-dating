import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <section className="relative h-[700px] overflow-hidden">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/banner.mp4" type="video/mp4" />
      </video>


      <div className="absolute inset-0 bg-black/50"></div>


      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">

        <div className="max-w-3xl">

          <span className="rounded-full bg-white/2 px-4 py-2 text-sm text-white backdrop-blur-md">
             Call girls
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white md:text-6xl">
            Find Verified Profiles & Premium <span className="font-extrabold text-red-600">Call Girls</span> Near You
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            Connect with genuine call girls and high-class profiles Delhi NCR. 100% discreet, fast, and 24/7 active.
            We can make you a promise that here in our organization you will be able to find such housewife escorts easily that you are looking for.
          
          </p>


          <div className="mt-10">
            <SearchBar />
          </div>



        </div>

      </div>

    </section>
  );
}



