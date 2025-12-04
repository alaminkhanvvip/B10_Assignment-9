import { Helmet } from 'react-helmet-async';
import { APP_CONFIG } from '../constants';

// Component for dynamic page titles using Helmet
export const PageTitle = ({ title, description }) => {
  const pageTitle = title ? `${title} | ${APP_CONFIG.APP_NAME}` : APP_CONFIG.APP_NAME;
  const pageDescription = description || 'Help vulnerable communities stay warm this winter. Donate winter clothing across Bangladesh divisions.';
  
  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
    </Helmet>
  );
};