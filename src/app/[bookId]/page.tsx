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
      <div className="min-h-screen bg-[rgb(var(--color-primary))]">
        <Navbar />
        <main className="pt-16">
          <div className="container-custom py-4">
            <MyBreadCrumb breadcrumbs={breadcrumbsData} />
          </div>
          <div className="flex flex-col h-full">
            <Getlist bookId={params.bookId} />
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
