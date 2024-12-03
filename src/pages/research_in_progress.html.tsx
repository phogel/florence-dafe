import React from 'react';
import { SEO } from '../components/SEO';
import Template from '../components/Template';

export default function ResearchInProgress() {
  return <Template title="Research in Progress" twoCols page="research_in_progress" />;
}

export const Head = () => <SEO title="Research in progress" />;
