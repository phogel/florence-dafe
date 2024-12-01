import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Title } from '../components/Title'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

type TemplateProps = {
  page: 'publications' | 'research_in_progress' | 'teaching' | 'index' | 'news' | 'datenschutz' | 'impressum' | 'contact';
  title: string;
  blockSet?: boolean;
  twoCols?: boolean;
  blank?: boolean;
}

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

  const html = data.allMarkdownRemark?.edges?.find((edge: any) => edge?.node?.fileAbsolutePath.endsWith(page + '.md'))?.node.html;
  const html2 = data.allMarkdownRemark?.edges?.find((edge: any) => edge?.node?.fileAbsolutePath.endsWith(page + '2.md'))?.node.html;

  const content = <div className={`${blockSet ? 'block-set' : ''} ${twoCols ? 'two-cols' : ''}`}>
    {twoCols && html2 ? <div className="fiftyfifty" dangerouslySetInnerHTML={{ __html: html }} /> : <div dangerouslySetInnerHTML={{ __html: html }} />}
    {html2 && <div className="fiftyfifty" dangerouslySetInnerHTML={{ __html: html2 }} />}
  </div>;

  if (blank) return <>{content}</>;

  return <PageWrapper title={title}>{content}</PageWrapper>;
}

const PageWrapper = ({ children, title }: { children: React.ReactNode, title: string }) => {
  return (
    <>
      <Header />
      <Title>{title}</Title>
      <article>
        {children}
      </article>
      <Footer />
    </>
  )
}
