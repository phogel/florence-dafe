import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Title } from '../components/Title';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { PageId } from './navLinks';

type TemplateProps = {
  /** Which markdown file supplies the content (`<page>.md`), and which nav entry to highlight. */
  page: PageId;
  title: string;
  blockSet?: boolean;
  twoCols?: boolean;
  blank?: boolean;
};

export default function Template({ page, title, blockSet = false, twoCols = false, blank = false }: TemplateProps) {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            fileAbsolutePath
            html
          }
        }
      }
    }
  `);

  const html = data.allMarkdownRemark?.edges?.find((edge: any) => edge?.node?.fileAbsolutePath.endsWith(page + '.md'))
    ?.node.html;
  const html2 = data.allMarkdownRemark?.edges?.find((edge: any) => edge?.node?.fileAbsolutePath.endsWith(page + '2.md'))
    ?.node.html;

  const content = (
    <div className={`${blockSet ? 'block-set' : ''} ${twoCols ? 'two-cols' : ''}`}>
      {twoCols && html2 ? (
        <div className="fiftyfifty" dangerouslySetInnerHTML={{ __html: html }} />
      ) : (
        <div dangerouslySetInnerHTML={{ __html: html }} />
      )}
      {html2 && <div className="fiftyfifty" dangerouslySetInnerHTML={{ __html: html2 }} />}
    </div>
  );

  if (blank) return <>{content}</>;

  return (
    <PageWrapper title={title} activePage={page}>
      {content}
    </PageWrapper>
  );
}

const PageWrapper = ({
  children,
  title,
  activePage,
}: {
  children: React.ReactNode;
  title: string;
  activePage?: PageId;
}) => {
  return (
    <>
      <Header activePage={activePage} />
      <Title>{title}</Title>
      <article>{children}</article>
      <Footer activePage={activePage} />
    </>
  );
};
