import React from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import flo from '../images/florencedafe.jpg';
import { SEO } from '../components/SEO';

const IndexPage = () => {
  return (
    <>
      <Header />
      <article>
        <hr />
        <div className="hundydundy">
          <div className="two-cols blockset">
            <div className="fiftyfifty">
              <img src={flo} className="front-image" />
            </div>
            <div className="fiftyfifty">
              <p></p>
              <p>
                Welcome! I am a political economist at the Chair of European and Global Governance of the Hochschule
                f&uuml;r Politik /TUM School of Governance at the Technical University of Munich (TUM). My research and
                teaching cover a number of themes related to international political economy and comparative political
                economy, with a particular focus on global financial governance.
              </p>
              <p>
                My research interests revolve around finance and development, especially the domestic and external
                political constraints that governments in developing countries face in governing their financial
                sectors. The question which drives my research is how much policy space governments in developing
                countries have in governing their financial sectors in a context of globalisation and financialisation.
              </p>
              <p>
                Prior to joining the Chair of European and Global Governance, I was a Fellow in International Political
                Economy at the Department of International Relations at the London School of Economics and Political
                Science (LSE) and lecturer in International Political Economy at City, University of London. I am also
                an associate researcher at the German Institute of Development and Sustainability (IDOS) and a honorary research fellow at the
                University of Warwick’s Centre for the Study of Globalisation and Regionalisation.
              </p>
              <p>
                You can find a copy of my CV <a href="cv/cv-florence-dafe.pdf">here</a>.
              </p>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </>
  );
};

export default IndexPage;

export const Head = () => <SEO title="Home" />;
