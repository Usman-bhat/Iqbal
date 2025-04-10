import { Navbar, Footer, MyBreadCrumb } from "@/components";
import { Getpoem } from './Getpoem';
import { Metadata } from 'next';
import { db } from "@/app/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

// Define the getPoemDetails function
async function getPoemDetails(bookId: string, poemId: string) {
  try {
    const qrysnap = await getDocs(
      query(
        collection(db, "poems"),
        where("_id", "==", parseInt(poemId)),
        where("book_id", "==", parseInt(bookId))
      )
    );

    if (qrysnap.empty) {
      return null;
    }

    const doc = qrysnap.docs[0].data();
    return { id: qrysnap.docs[0].id, ...doc };
  } catch (error) {
    console.error("Error getting poem details:", error);
    return null;
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
  const poem = await getPoemDetails(bookId, poemId);

  if (!poem) {
    return {
      title: 'Poem Not Found',
      description: 'Poem details not available',
    };
  }

  return {
    title: poem.title || 'Poem',
    description: `Read ${poem.title} from Allama Iqbal's collection`,
    openGraph: {
      title: poem.title,
      description: `Explore ${poem.title} from Allama Iqbal's works`,
      type: 'article',
    },
    alternates: {
      canonical: `https://iqbal-poems.vercel.app/${bookId}/${poemId}`,
    }
  };
}

export default function PoemPage({ params }: Props) {
  const breadcrumbsData = [
    { href: "/", label: "Books" },
    { href: `/${params.bookId}`, label: "Poems" },
    { href: `/${params.bookId}/${params.poemId}`, label: "Reading" }
  ];

  return (
    <>
      <Navbar />
      <div className="flex flex-col min-h-screen pt-16">
        <MyBreadCrumb breadcrumbs={breadcrumbsData} />
        <main className="flex-grow">
          <Getpoem bookId={params.bookId} poemId={params.poemId} />
        </main>
      </div>
      <Footer />
    </>
  );
}
