import React from "react"
import '../assets/styles.css';

const links = [
  { title: "Home", href: "/" },
  { title: "Publications", href: "publications.html" },
  { title: "Research in Progress", href: "research_in_progress.html" },
  { title: "Teaching", href: "teaching.html" },
  { title: "Contact", href: "contact.html" },
];

export const Header = () => {
  const currentPage = typeof window !== "undefined" ? window.location.pathname : "";

  return (
    <menu>
      <h1 className="florence" > FLORENCE DAFE </h1>
      <nav>
        {links.map(({ title, href }) => {
          const isActive = currentPage === href;
          return (
            <a href={href} className={"button " + (isActive ? ' active' : '')} title={title} key={title}> {title} </a>
          )
        })}
      </nav>
    </menu>
  )
}
