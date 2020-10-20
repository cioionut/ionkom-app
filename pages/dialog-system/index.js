import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import { Container, Row } from 'react-bootstrap'


export default function DialogSystem() {
  return (
    <Layout home>
      <Head>
        <title>{`${siteTitle} - dialog system`}</title>
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
