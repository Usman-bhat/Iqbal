"use client";
import { Navbar, Footer, MyBreadCrumb } from "@/components";
import { motion } from "framer-motion";

export default function AboutContent() {
  const breadcrumbsData = [
    { href: "/", label: "Home" },
    { href: "/About", label: "About" },
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
            className="max-w-4xl mx-auto bg-[rgb(var(--color-secondary))] rounded-2xl p-8 shadow-lg"
          >
            <h1 className="text-3xl font-bold mb-8 text-[rgb(var(--color-text))]">
              About QuranicHub
            </h1>
            
            <div className="space-y-6 text-[rgb(var(--color-text))] opacity-90 leading-relaxed">
              <p>
                QuranicHub stands as a distinguished digital platform dedicated to the preservation 
                and dissemination of Islamic knowledge and literary excellence. Our mission 
                encompasses three core pillars: Quranic studies, Islamic scholarship, and literary heritage.
              </p>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-[rgb(var(--color-accent))]">
                  Our Mission
                </h2>
                <p>
                  We strive to provide authentic and enriching content through:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Comprehensive Quranic resources including Tilawat and Tafsir</li>
                  <li>Scholarly works and Bayans from renowned Islamic scholars</li>
                  <li>Digital preservation of Allama Iqbal's literary masterpieces</li>
                  <li>Multilingual content in Urdu, Hindi, and English</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-[rgb(var(--color-accent))]">
                  Literary Archive
                </h2>
                <p>
                  Our platform hosts a meticulously curated collection of Allama Iqbal's works, 
                  including both Urdu and Persian compositions. This digital repository serves 
                  as a valuable resource for scholars, students, and enthusiasts of Iqbal's philosophy.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-[rgb(var(--color-accent))]">
                  Community & Engagement
                </h2>
                <p>
                  QuranicHub is more than a website – it's a thriving community of knowledge 
                  seekers. Through our platform, we facilitate meaningful discourse and 
                  learning opportunities for our global audience.
                </p>
              </section>
            </div>
          </motion.article>
        </div>
      </main>
      <Footer />
    </>
  );
}