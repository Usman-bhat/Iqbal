import { ThemeProvider } from "@/app/ThemeProvider";
import { Navbar, Footer,MyBreadCrumb } from "@/components";
import { Getlist } from './Getlist';

export default function Book({ params }) {
  const breadcrumbsData = [
    { href: "/", label: "" },
    { href: "/", label: "Books" },
  ];
  return (
    <ThemeProvider>
      <Navbar />
      <MyBreadCrumb breadcrumbs={breadcrumbsData} />
	<div className="flex flex-col h-full">
        <Getlist bookId={params.bookId} />
      </div>      
	<Footer />
    </ThemeProvider>
  );
}
