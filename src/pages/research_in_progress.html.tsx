import React from 'react';
import { SEO } from '../components/SEO';
import Template from '../components/Template';

export default function ResearchInProgress() {
  return <Template title="Research In Progress" twoCols page="research_in_progress" />;
}

export const Head = () => <SEO title="Research In Progress" />;
