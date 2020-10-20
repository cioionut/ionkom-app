import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../../components/layout'
import { Container, Row } from 'react-bootstrap'


export default function Contact() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta property="og:site_name" content={siteTitle}></meta>
        <meta property="og:title" content={`${siteTitle}`}></meta>
        <meta property="og:url" content="https://www.ionkom.com/"></meta>
      </Head>
      <Container>
        <Row className="justify-content-center">
          <h5>
            Contact: <a href="mailto:ionut.ciocoiu@ionkom.com">ionut.ciocoiu@ionkom.com</a>
          </h5>
        </Row>
      </Container>
    </Layout>
  )
}
