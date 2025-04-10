import { Metadata } from 'next';
import LearnMoreContent from './LearnMoreContent';

export const metadata: Metadata = {
  title: 'Learn More About Allama Iqbal',
  description: 'Discover the life, works and philosophy of Allama Muhammad Iqbal',
};

export default function LearnMore() {
  return <LearnMoreContent />;
}