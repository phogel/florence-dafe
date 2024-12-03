import React from 'react';

export const Footer = () => (
  <>
    <div className="hundyhundy">
      <h1></h1>
      <hr />
    </div>

    <footer className="hundydundy two-cols">
      <div className="fiftyfifty rightalign">
        <ul className="fiftyfifty">
          <li>
            <span className="active-page">Home</span>
          </li>
          <li>
            <a href="publications.html" title="Publications">
              Publications
            </a>
          </li>
          <li>
            <a href="research_in_progress.html" title="Research in Progress">
              Research in Progress
            </a>
          </li>
          <li>
            <a href="teaching.html" title="Teaching">
              Teaching
            </a>
          </li>
          <li>
            <a href="contact.html" title="Contact">
              Contact
            </a>
          </li>
          <li>
            <a href="impressum.html">Impressum</a>
          </li>
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
          Richard-Wagner-Stra&szlig;e 1, 80333 Monaco Di Baveria, Germany
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
          <a href="datenschutz.html">Datenschutzerklärung</a>
        </p>
      </div>
    </footer>
  </>
);
