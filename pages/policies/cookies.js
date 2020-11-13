import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../../components/layout'
import { Container, Row } from 'react-bootstrap'


export default function Cookies() {
  return (
    <Layout home>
      <Head>
        <title>{`${siteTitle} - Cookie Policy`}</title>
      </Head>
      <Container>
        <Row className="justify-content-center">
          <h5>
            Contact us
          </h5>
        </Row>
        <Row className="justify-content-center">
          <p>If you have questions about this Cookie Notice, please contact our data protection officer at <a href="mailto:dpo@ionkom.com">dpo@ionkom.com</a></p>
        </Row>
      </Container>
    </Layout>
  )
}
