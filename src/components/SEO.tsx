import React from 'react';

export const SEO = ({ title }: { title: string }) => {
  return (
    <>
      {/* React 19 requires a single text child in <title>; interpolation must be pre-joined. */}
      <title>{`${title} | Florence Dafe`}</title>
      <meta name="title" content="Florence Dafe from the Technical University of Munich" />
      <meta
        name="description"
        content="Political economist at the Chair of Global and European Governance at the TUM School of Governance. Her research focuses on finance and development."
      />
      <meta
        name="keywords"
        content="florence dafe, political economy, global financial governance, global development, TUM, HfP, TUM School of Governance, policy space"
      />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="apple-mobile-web-app-title" content="Florence Dafe Personal Website" />
      <meta name="author" content="Florence Dafe" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="revisit-after" content="1 day" />
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/manifest.json" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
    </>
  );
};
