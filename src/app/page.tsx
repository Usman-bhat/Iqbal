// components
import { Navbar, Footer, MyBreadCrumb } from "@/components";

// sections
import Hero from "./hero";
import InformationSection from "./information-section";
import Testimonial from "./testimonial";

import {ThemeProvider} from "./ThemeProvider";

export default function Portfolio(){ 
  const breadcrumbsData = [
    { href: "/", label: "" },
  ];

  return (
    <>
     <ThemeProvider>
      <Navbar/>
      <MyBreadCrumb breadcrumbs={breadcrumbsData}/>
      <Hero />
      <InformationSection />
      <Testimonial />
      <Footer />
     </ThemeProvider>
    </>
  );
}
