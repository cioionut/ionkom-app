import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import { Container, Row, Col } from 'react-bootstrap';
import privacy from '../../data/privacy_policy';
import parse from 'html-react-parser';


export default function Provacy({ currentUrl }) {
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
      </Head>
      <Container>
        <Row className="justify-content-center">
          <Col>
            { parse(privacy) }
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
