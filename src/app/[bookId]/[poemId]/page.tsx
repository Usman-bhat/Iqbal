import { ThemeProvider } from "@/app/ThemeProvider";
import { Navbar, Footer, MyBreadCrumb } from "@/components";
import { Getpoem } from './Getpoem';
import { Metadata } from 'next';
import getPoem from './Getpoem'; // Adjust the path if needed

// Import necessary Firebase modules
import { db } from "@/app/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

// Define the getPoemDetails function
async function getPoemDetails(bookId: string, poemId: string) {
  try {
    // Query the 'poems' collection
    const qrysnap = await getDocs(
      query(
        collection(db, "poems"),
        where("_id", "==", parseInt(poemId)),
        where("book_id", "==", parseInt(bookId)) // Add bookId filter
      )
    );

    // Check if any documents were found
    if (qrysnap.empty) {
      console.log("No matching documents.");
      return null; // Or throw an error if you prefer
    }

    // Extract the data from the first document
    const doc = qrysnap.docs[0].data();
    return { id: qrysnap.docs[0].id, ...doc };
  } catch (error) {
    console.error("Error getting poem details:", error);
    return null; // Or throw an error if you prefer
  }
}

interface Props {
  params: {
    bookId: string;
    poemId: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { bookId, poemId } = params;

  // Get poem details from your data source
  const poem = await getPoem({bookId,poemId}); // Implement this function

  if (!poem) {
    return {
      title: 'Poem Not Found',
      description: 'Poem details not available',
    };
  }

  return {
    title: poem?.title || 'Poem',
    description: `Read ${poem?.title} from Allama Iqbal's collection`,
    openGraph: {
      title: poem?.title,
      description: `Explore ${poem?.title} from Allama Iqbal's works`,
      type: 'article',
    },
    alternates: {
      canonical: `https://iqbal-poems.vercel.app/${bookId}/${poemId}`,
    }
  };
}

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
