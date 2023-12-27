// components
import { Navbar, Footer, MyBreadCrumb } from "@/components";


import {ThemeProvider} from "../ThemeProvider";

export default function Portfolio(){ 
  const breadcrumbsData = [
    { href: "/", label: "" },
    { href: "/Contact", label: "Contact" },
  ];

  return (
    <>
     <ThemeProvider>
      <Navbar/>
      <MyBreadCrumb breadcrumbs={breadcrumbsData}/>
	<div className="m-4 p-4 bg-gray-700 text-gray-300">
	Email : quranichubofficial@gmail.com
       </div>
      <Footer />
     </ThemeProvider>
    </>
  );
}
