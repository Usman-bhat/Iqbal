import { ThemeProvider } from "@/app/ThemeProvider";
import { Navbar, Footer,MyBreadCrumb } from "@/components";
import { Getpoem } from './Getpoem';

export default function Book({ params }) {
  const breadcrumbsData = [
    { href: "/", label: "Books" },
    { href: `/${params.bookId}`, label: "Poems" }
  ];

  return (
    <ThemeProvider>
      <Navbar />
      <div className="flex flex-col h-full">
	<MyBreadCrumb breadcrumbs={breadcrumbsData} />
        <Getpoem poemId={params.poemId} bookId={params.bookId} />
      </div>
      <Footer />
    </ThemeProvider>
  );
}
