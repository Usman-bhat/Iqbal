"use client";
import { Navbar, Footer, MyBreadCrumb } from "@/components";
import { motion } from "framer-motion";
import Image from "next/image";

export default function LearnMoreContent() {
  const breadcrumbsData = [
    { href: "/", label: "Home" },
    { href: "/learn-more", label: "Learn More" },
  ];

  const timelineEvents = [
    { year: "1877", event: "Born in Sialkot, Punjab" },
    { year: "1897", event: "Completed his Master's degree in Philosophy" },
    { year: "1905", event: "Traveled to Europe for higher studies" },
    { year: "1908", event: "Published 'The Development of Metaphysics in Persia'" },
    { year: "1915", event: "Published 'Asrar-e-Khudi'" },
    { year: "1923", event: "Knighted by British Crown" },
    { year: "1930", event: "Delivered famous Allahabad Address" },
    { year: "1938", event: "Passed away in Lahore" },
  ];

  return (
    <>
      <Navbar/>
      <MyBreadCrumb breadcrumbs={breadcrumbsData}/>
      <main className="bg-[rgb(var(--color-primary))] min-h-screen py-16">
        <div className="container-custom">
          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto space-y-12"
          >
            {/* Hero Section */}
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-[rgb(var(--color-text))]">
                Allama Muhammad Iqbal
              </h1>
              <p className="text-[rgb(var(--color-text))] opacity-90">
                1877 - 1938
              </p>
            </div>

            {/* Biography Section */}
            <section className="bg-[rgb(var(--color-secondary))] p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-4 text-[rgb(var(--color-text))]">
                Biography
              </h2>
              <p className="text-[rgb(var(--color-text))] opacity-90 leading-relaxed">
                Allama Muhammad Iqbal was a poet, philosopher, and politician born in Sialkot, 
                British India. He is considered one of the most important figures in Urdu and 
                Persian literature, with his works inspiring millions across South Asia and beyond.
              </p>
            </section>

            {/* Timeline */}
            <section className="space-y-6">
              <h2 className="text-2xl font-bold text-[rgb(var(--color-text))]">
                Timeline
              </h2>
              <div className="space-y-4">
                {timelineEvents.map((event, index) => (
                  <motion.div
                    key={event.year}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-[rgb(var(--color-secondary))] rounded-lg"
                  >
                    <span className="font-bold text-[rgb(var(--color-accent))]">
                      {event.year}
                    </span>
                    <span className="text-[rgb(var(--color-text))]">
                      {event.event}
                    </span>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Major Works */}
            <section className="bg-[rgb(var(--color-secondary))] p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-4 text-[rgb(var(--color-text))]">
                Major Works
              </h2>
              <div className="space-y-4 text-[rgb(var(--color-text))] opacity-90">
                <p>• Bang-e-Dara (1924)</p>
                <p>• Bal-e-Jibril (1935)</p>
                <p>• Zarb-e-Kalim (1936)</p>
                <p>• Asrar-e-Khudi (1915)</p>
                <p>• Rumuz-e-Bekhudi (1918)</p>
                <p>• Payam-e-Mashriq (1923)</p>
                <p>• Zabur-e-Ajam (1927)</p>
              </div>
            </section>

            {/* Philosophy */}
            <section className="bg-[rgb(var(--color-secondary))] p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-4 text-[rgb(var(--color-text))]">
                Philosophy & Influence
              </h2>
              <p className="text-[rgb(var(--color-text))] opacity-90 leading-relaxed">
                Iqbal's philosophy emphasized spiritual regeneration, Islamic universalism, 
                and the concept of Khudi (self). His work influenced the Pakistan Movement 
                and continues to inspire discussions on Islamic philosophy, politics, and 
                cultural reform.
              </p>
            </section>
          </motion.article>
        </div>
      </main>
      <Footer />
    </>
  );
}