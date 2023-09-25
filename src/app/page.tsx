import Banner from "@/components/Banner";

export default function Home() {
  return (
    <main className="relative">
      <Banner />
      <div className="container absolute left-0 right-0 top-80 md:top-[39rem] lg:top-[43rem] xl:top-[47rem]">
        <section className="border-t border-primary-dark px-8 pb-16 pt-12">
          <h2 className="mb-6 text-center text-3xl font-semibold text-primary-dark">
            Additional Resources
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Subsection 1: COVID-19 Information */}
            <div className="rounded-lg border bg-white p-6 shadow-lg">
              <h3 className="mb-3 text-xl font-semibold">
                COVID-19 Information
              </h3>
              <p className="text-foreground/80">
                Stay informed about the latest developments regarding COVID-19,
                including symptoms, prevention measures, and testing centers
                near you.
              </p>
            </div>

            {/* Subsection 2: Safety Measures */}
            <div className="rounded-lg border bg-white p-6 shadow-lg">
              <h3 className="mb-3 text-xl font-semibold">Safety Measures</h3>
              <p className="text-foreground/80">
                Learn how to protect yourself and others through safety measures
                such as mask guidelines, social distancing, and proper hand
                hygiene.
              </p>
            </div>

            {/* Subsection 3: Community Resources */}
            <div className="rounded-lg border bg-white p-6 shadow-lg">
              <h3 className="mb-3 text-xl font-semibold">
                Community Resources
              </h3>
              <p className="text-foreground/80">
                Connect with local and online support groups for COVID-19
                survivors, access food assistance programs, and find mental
                health services for support during these challenging times.
              </p>
            </div>

            {/* Subsection 4: Vaccine Education */}
            <div className="rounded-lg border bg-white p-6 shadow-lg">
              <h3 className="mb-3 text-xl font-semibold">Vaccine Education</h3>
              <p className="text-foreground/80">
                Get reliable information about COVID-19 vaccines, including
                debunking common vaccine myths, understanding their benefits,
                and staying updated on the vaccine rollout in your area.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
