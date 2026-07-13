import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noindex?: boolean;
}

function SEO({ title, description, path, image = '/hero-jewelry.webp', noindex = false }: SEOProps) {
  const siteUrl = import.meta.env.VITE_CLIENT_URL;
  const fullTitle = title === 'Aznaoure Art' ? title : `${title} | Aznaoure Art`;
  const imageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <>
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={imageUrl} />
          <meta property="og:url" content={`${siteUrl}/${path}`} />
          <link rel="canonical" href={`${siteUrl}/${path}`} />
        </>
      )}
    </Helmet>
  );
}

export default SEO;