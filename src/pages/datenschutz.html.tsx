import React from "react";
import Template from "../components/Template";
import { SEO } from "../components/SEO";

export const Datenschutz = () => {
  return <Template title="Datenschutzerklärung" page="datenschutz" />;
}

export default Datenschutz;

export const Head = () => (
  <SEO title="Datenschutzerklärung" />
)
