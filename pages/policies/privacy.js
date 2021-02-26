import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import { Container, Row, Col } from 'react-bootstrap';
import parse from 'html-react-parser';

// for reading html file
import { promises as fs } from 'fs';
import path from 'path';

export default function Provacy({ currentUrl, bodyContent, headContent }) {
  const pageTitle = `Privacy Policy | Ionkom`;
  return (
    <Layout home>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:site_name" content={siteTitle}></meta>
        <meta property="og:title" content={`${pageTitle}`}></meta>
        <meta property="og:url" content="https://www.ionkom.com/"></meta>
        <meta
            name="description"
            content="Learn more about Ionkom's privacy policy and practices, including what types of info Ionkom receives and how info is used and shared."
        />                
        <link rel="canonical" href={ currentUrl } key="canonical" />
        { parse(headContent) }
      </Head>
      <Container>
        <Row className="justify-content-center">
          <Col>
            { parse(bodyContent) }
          </Col>
        </Row>
      </Container>
      <style global jsx>{`
        p {
          margin-bottom: 0;
        }
      `}</style>
    </Layout>
  )
}

export async function getStaticProps() {

  const bodyFilePath = path.join(process.cwd(), 'data', 'privacy_body.html');
  const headFilePath = path.join(process.cwd(), 'data', 'privacy_head.html');

  const bodyContent = await fs.readFile(bodyFilePath, 'utf8');
  const headContent = await fs.readFile(headFilePath, 'utf8');

  return {
    props: {
      bodyContent,
      headContent
    },
    revalidate: 1,
  }
}