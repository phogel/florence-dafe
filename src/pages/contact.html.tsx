import React from "react";
import Template from "../components/Template";
import { SEO } from "../components/SEO";

export const Contact = () => {
  return <Template title="Contact" page="contact" />;
}

export default Contact;

export const Head = () => (
  <SEO title="Contact" />
)
