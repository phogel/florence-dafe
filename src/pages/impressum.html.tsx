import React from 'react';
import Template from '../components/Template';
import { SEO } from '../components/SEO';

export const Impressum = () => {
  return <Template title="Impressum" page="impressum" />;
};

export default Impressum;

export const Head = () => <SEO title="Impressum" />;
