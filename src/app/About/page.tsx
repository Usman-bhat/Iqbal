import { Metadata } from 'next';
import AboutContent from './AboutContent';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about our mission to preserve and share Allama Iqbal\'s literary legacy',
  openGraph: {
    title: 'About QuranicHub - Preserving Iqbal\'s Legacy',
    description: 'Discover our mission to digitize and share Allama Iqbal\'s works',
  }
};

export default function About() {
  return <AboutContent />;
}
