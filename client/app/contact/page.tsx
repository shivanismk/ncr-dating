import { siteInfo } from "@/data/site";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-zinc-900">

      <section className="bg-gradient-to-r from-red-600   py-20">
        <div className="mx-auto max-w-6xl px-6 text-center text-white">
          <h1 className="text-5xl font-bold">Contact Us</h1>

          <p className="mt-6 text-lg text-blue-100">
            Have a question or need help? We're here to assist you.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">

        <div className="grid gap-8 lg:grid-cols-2">


          <div className="rounded-2xl bg-white p-8 shadow">

            <h2 className="text-3xl font-bold">
              Get in Touch
            </h2>

            <div className="mt-8 space-y-6">

              <div>
                <h3 className="font-semibold">📞 Phone</h3>
                <p>{siteInfo.phone}</p>

                <a
                  href={`tel:${siteInfo.phone}`}
                  className="mt-3 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
                >
                  Call Now
                </a>
              </div>

              <div>
                <h3 className="font-semibold">💬 WhatsApp</h3>
                <p>{siteInfo.phone}</p>

                <a
                  href={`https://wa.me/${siteInfo.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block rounded-lg bg-green-600 px-6 py-3 text-white hover:bg-green-700"
                >
                  Chat on WhatsApp
                </a>
              </div>



              <div>
                <h3 className="font-semibold">📍 Address</h3>
                <p>Delhi</p>
              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

