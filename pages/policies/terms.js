import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import { Container, Row, Col } from 'react-bootstrap';
import termsAndConditions from '../../data/terms_and_conditions';
import parse from 'html-react-parser';


export default function Terms({ currentUrl }) {
  const pageTitle = `Terms and Conditions | Ionkom`;
  return (
    <Layout home>
      <Head>
        <title>{pageTitle}</title>
        <meta property="og:site_name" content={siteTitle}></meta>
        <meta property="og:title" content={`${pageTitle}`}></meta>
        <meta property="og:url" content="https://www.ionkom.com/"></meta>
        <meta
            name="description"
            content="Learn more about Ionkom’s Terms and Conditions, which governs your use of Ionkom and the products, features, apps, services, technologies, and software we offer."
        />                
        <link rel="canonical" href={ currentUrl } key="canonical" />
      </Head>
      <Container>
        <Row className="justify-content-center">
          <Col>
            { parse(termsAndConditions) }
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
