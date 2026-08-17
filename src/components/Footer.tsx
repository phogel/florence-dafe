import React from 'react';
import { footerNavLinks, PageId } from './navLinks';

/** The entry for the current page renders as inert text instead of a link. */
export const Footer = ({ activePage }: { activePage?: PageId }) => (
  <>
    <div className="hundyhundy">
      <h1></h1>
      <hr />
    </div>

    <footer className="hundydundy two-cols">
      <div className="fiftyfifty rightalign">
        <ul className="fiftyfifty">
          {footerNavLinks.map(({ title, href, page }) =>
            page === activePage ? (
              <li key={page}>
                <span className="active-page">{title}</span>
              </li>
            ) : (
              <li key={page}>
                <a href={href} title={title}>
                  {title}
                </a>
              </li>
            ),
          )}
        </ul>
      </div>
      <div className="fiftyfifty">
        <p>
          Florence Dafe
          <br />
          TUM School of Governance Bavarian School of Public Policy
          <br />
          Technical University of Munich
          <br />
          Richard-Wagner-Stra&szlig;e 1, 80333 München, Germany
          <br />
          florence.dafe@hfp.tum.de
        </p>
        <p>
          <a
            href="https://www.linkedin.com/in/florence-dafe-3b57b014b/?originalSubdomain=uk"
            target="_blank"
            className="linkedin-link"
          >
            LinkedIn
          </a>
        </p>
        <p>
          {activePage === 'datenschutz' ? (
            <span className="active-page">Datenschutzerklärung</span>
          ) : (
            <a href="datenschutz.html">Datenschutzerklärung</a>
          )}
        </p>
      </div>
    </footer>
  </>
);
