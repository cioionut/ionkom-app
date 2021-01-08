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
          <Col>
            <Dialog chatBoxTitle='Test Assistant' />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
