// components
import { Navbar, Footer, MyBreadCrumb } from "@/components";

import {ThemeProvider} from "../ThemeProvider";

export default function Portfolio(){ 
  const breadcrumbsData = [
    { href: "/", label: "" },
    { href: "/About", label: "About" },
  ];

  return (
    <>
     <ThemeProvider>
      <Navbar/>
      <MyBreadCrumb breadcrumbs={breadcrumbsData}/>
	<div className="m-4 p-4 text-gray-500 bg-gray-100">
	Welcome to QuranicHub, the online haven for seekers of Islamic wisdom and the profound teachings of the Quran. I am Mohammad Usman Bhat, the mind and heart behind this endeavor, and it is my privilege to guide you through the diverse realms of Islamic knowledge.

At QuranicHub, our mission is rooted in a deep commitment to provide authentic and enriching content. From the melodious recitation (tilawat) of the Quran to insightful explanations (tafsir) in Urdu and Hindi, every video is crafted with meticulous care to bridge the timeless wisdom of the Quran with the linguistic nuances of our diverse audience.

In addition to Quranic exploration, QuranicHub serves as a repository for the works of esteemed Islamic scholars. Bayans from scholars like Dr. Israr Ahmad resonate within our digital walls, offering profound insights and guidance for spiritual enrichment.

But our mission extends beyond the Quranic realm. In a tribute to the great philosopher-poet Allama Iqbal, I have curated a comprehensive collection of his works, including both Urdu and Persian masterpieces. This online archive aims to disseminate Iqbal's profound thoughts and poetic brilliance across the vast expanse of the internet.

QuranicHub is not just a website; it is a community, a virtual sanctuary where knowledge seekers and spiritual enthusiasts converge. By subscribing and engaging with our content, you become an integral part of this journey. Together, we amplify the voices of Islamic scholarship and ensure the enduring legacy of luminaries like Allama Iqbal.

Thank you for joining us on this enlightening voyage. Subscribe, explore, and share in the wisdom that QuranicHub endeavors to spread across the digital landscape. Embrace the richness of Islamic teachings, and let us together weave a tapestry of understanding and enlightenment.
	</div>
      <Footer />
     </ThemeProvider>
    </>
  );
}
