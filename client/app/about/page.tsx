import { siteInfo } from "@/data/site";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-zinc-500">


      <section className="bg-gradient-to-r from-red-600   py-20">

        <div className="mx-auto max-w-6xl px-6 text-center text-white">
          <h1 className="text-5xl font-bold">About Us</h1>

          <p className="mt-6 text-lg text-black font-bold">
            Learn more about our ConnectNCR(Call Girls) platform and how we help users
            discover trusted Profile  across India.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">

        <div className="rounded-2xl bg-white p-10 shadow">

          <h2 className="text-3xl font-bold">

            Welcome to ConnectNCR
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            Are you craving a night of unbridled passion, a touch of romance, or a deep escape from the mundane? Delhi is a city of hidden desires, and finding the perfect companion to unlock them should be part of the thrill. Whether you are seeking high-class independent call girls, college profiles, glamorous models, or executive companions, all india CGs (call girl) is built to cater to your specific taste.

            Why Choose Our Delhi Call Girl Services?

            All Types of Call Girls Available: From young college girls and elite models to sophisticated housewives and independent companions, choose exact match profiles that suit your desire.

            24/7 Round-the-Clock Availability: Late-night cravings or early morning plans? Our service operates 24 hours a day, 7 days a week, ensuring instant booking anytime, anywhere in Delhi NCR.

            100% Discreet & Private: Your privacy and safety are fully guaranteed with zero-trace bookings and complete confidentiality.

            In-Call & Out-Call Services: Get doorstep service at your luxury hotel room, residence, or private venue with maximum convenience.

            Welcome to all india CGs (call girl), your ultimate gateway to top-rated Delhi escorts, where privacy meets passion and choice meets complete satisfaction. Designed for modern pleasure seekers, this platform blends luxury, speed, and trust—giving you effortless access to a world of refined connections whenever desire strikes.

          </p>

        </div>


        <div className="mt-10 rounded-2xl bg-white p-10 shadow">

          <h2 className="text-3xl font-bold">
            Contact Administrator
          </h2>

          <div className="mt-8 space-y-4">

            <p>
              <strong>Name:</strong> {siteInfo.adminName}
            </p>

            <p>
              <strong>Phone:</strong> {siteInfo.phone}
            </p>

            <p>
              <strong>Location:</strong> {siteInfo.address}
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}