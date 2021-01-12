import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../../components/layout'
import { Container, Row, Col } from 'react-bootstrap'


export default function Contact() {
  const title = `Ionkom - contact page`;

  return (
    <Layout home>
      <Head>
        <title>{title}</title>
        <meta property="og:site_name" content={siteTitle}></meta>
        <meta property="og:title" content={`${title}`}></meta>
        <meta property="og:url" content="https://www.ionkom.com/"></meta>
        <meta
            name="description"
            content="Get in touch"
        />
      </Head>
      <Container>
        <Row className="justify-content-center">
          <Col>
            <h1>Contact us</h1>
            <h2><a href="mailto:hello@ionkom.com">hello@ionkom.com</a></h2>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
