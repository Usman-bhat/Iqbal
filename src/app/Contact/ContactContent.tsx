"use client";
import { Navbar, Footer, MyBreadCrumb } from "@/components";
import { EnvelopeIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function ContactContent() {
  const breadcrumbsData = [
    { href: "/", label: "Home" },
    { href: "/Contact", label: "Contact" },
  ];

  return (
    <>
      <Navbar/>
      <MyBreadCrumb breadcrumbs={breadcrumbsData}/>
      <main className="bg-[rgb(var(--color-primary))] min-h-screen py-16">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto bg-[rgb(var(--color-secondary))] rounded-2xl p-8 shadow-lg"
          >
            <h1 className="text-3xl font-bold mb-8 text-[rgb(var(--color-text))]">
              Contact Us
            </h1>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-[rgb(var(--color-primary))] rounded-lg">
                <EnvelopeIcon className="h-6 w-6 text-[rgb(var(--color-accent))]" />
                <div>
                  <h2 className="font-semibold text-[rgb(var(--color-text))]">Email</h2>
                  <a 
                    href="mailto:quranichubofficial@gmail.com"
                    className="text-[rgb(var(--color-accent))] hover:underline"
                  >
                    quranichubofficial@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-[rgb(var(--color-primary))] rounded-lg">
                <GlobeAltIcon className="h-6 w-6 text-[rgb(var(--color-accent))]" />
                <div>
                  <h2 className="font-semibold text-[rgb(var(--color-text))]">YouTube</h2>
                  <a 
                    href="https://youtube.com/@QuranicHub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[rgb(var(--color-accent))] hover:underline"
                  >
                    @QuranicHub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}