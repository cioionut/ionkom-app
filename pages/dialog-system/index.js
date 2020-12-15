import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import { Container, Row, Col } from 'react-bootstrap'
import Dialog from '../../components/dialog/dialog'


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
        <Row>
          <Col>
            <Dialog />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
