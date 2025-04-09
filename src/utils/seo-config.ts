export const defaultSEO = {
  defaultTitle: "Iqbal's Poetry Collection",
  titleTemplate: "%s | Iqbal",
  description: "Explore the poetic legacy of Allama Iqbal in Urdu and Persian. Discover profound verses, philosophical insights, and timeless wisdom.",
  canonical: "https://alamaiqbal.vercel.app",
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://alamaiqbal.vercel.app',
    siteName: "Iqbal's Poetry",
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Iqbal's Poetry Collection",
      },
    ],
  },
  twitter: {
    handle: '@QuranicHub',
    site: '@QuranicHub',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'Iqbal, Allama Iqbal, Poetry, Urdu Poetry, Persian Poetry, Islamic Philosophy'
    }
  ]
};