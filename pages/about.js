import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import { Container, Row, Col } from 'react-bootstrap';


export default function About({ currentUrl }) {
  const title = `About us and our mission - Ionkom`
  return (
    <Layout home>
      <Head>
        <title>{title}</title>
        <meta property="og:site_name" content={siteTitle}></meta>
        <meta property="og:title" content={`${title}`}></meta>
        <meta property="og:url" content="https://www.ionkom.com/"></meta>
        <meta
            name="description"
            content="Our mission is to create more free time for humans and
            help them to better understand and use technology."
        />
        <link rel="canonical" href={ currentUrl } key="canonical" />
      </Head>
      <Container>
        <Row className="mt-5 mb-5">
          <Col className="mt-5 mb-5">
            <h1 className="mt-5 mb-5" style={{ fontWeight: 400 }}>
              Our mission is to create more free <b>time</b> for humans and help them to better understand and use technology.
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>

          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
