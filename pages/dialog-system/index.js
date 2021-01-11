import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Dialog from '../../components/dialog/dialog'
import style from './dialogsys.module.css'


export default function DialogSystem() {
  return (
    <Layout home>
      <Head>
        <title>{`${siteTitle} - dialog system`}</title>
      </Head>
      <Container>
        <Row>
          <Col><h1>Dialog System</h1></Col>
        </Row>
        <Row>
          <Col>
            <p className={style.textContent}>Boost your sales power with a custom digital assistant.</p>
          </Col>
        </Row>
        <Row>
          <Col><Button>Try it for free</Button></Col>
        </Row>
        <Row className='mt-5 pt-5'>
          <Col md={6} sm={12}>
            <h2>Automate tedious processes </h2>
            <p className={style.textContent}>Dialog System software use artificial intelligence 
            to capture people requests and based on embedded dialog knowledge tries to guide users to the most relevant resources of your business.
            </p>
          </Col>
          <Col md={6} sm={12}>
            <img
              src='/img/contact-2579313_640.jpg'
              alt='natural language understanding'
              width='60%'
            />
          </Col>
        </Row>
        <Row className='mt-3 pt-3'>
          <Col md={4} sm={12}>
            <h3>Get your marketing done</h3>
            <p className={style.textContent}>Create a tailored customer experience. Engage prospects and customers across multiple communication channels.</p>
          </Col>
          <Col md={4} sm={12}>
            <h3>Grow sales</h3>
            <p className={style.textContent}>Scale your efforts without increasing employee headcount.</p>
          </Col>
          <Col md={4} sm={12}>
            <h3>Support at a glance</h3>
            <p className={style.textContent}>Keeps the conversation balanced and add proactivity when is needed.</p>
          </Col>
        </Row>
        <hr/>
        <Row className="justify-content-center">
          <Col xs='auto'>
            <h1>Chatbot API demo</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Dialog chatBoxTitle='Flight Assistant' />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
