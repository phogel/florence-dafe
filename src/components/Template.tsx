import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Title } from '../components/Title'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'

type TemplateProps = {
  page: 'publications' | 'research_in_progress' | 'teaching' | 'index';
  title: string;
  blockSet?: boolean;
  twoCols?: boolean;
}

export default function Template({ page, title, blockSet = false, twoCols = false }: TemplateProps) {
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

  return (
    <>
      <Header />
      <Title>{title}</Title>
      <article>
        <div className={`${blockSet ? 'block-set' : ''} ${twoCols ? 'two-cols' : ''}`}
        >
          {twoCols && html2 ? <div className="fiftyfifty" dangerouslySetInnerHTML={{ __html: html }} /> : <div dangerouslySetInnerHTML={{ __html: html }} />}
          {html2 && <div className="fiftyfifty" dangerouslySetInnerHTML={{ __html: html2 }} />}
        </div>

      </article>
      <Footer />
    </>
  )
}
