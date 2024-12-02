import React from 'react'
import Template from '../components/Template';
import { SEO } from '../components/SEO';

export const Publications = () => {
  return <Template title="Publications" page="publications" twoCols />
};

export default Publications;

export const Head = () => (
  <SEO title="Publications" />
)

