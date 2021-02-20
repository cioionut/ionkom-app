import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Dialog from '../../components/dialog/dialog'
import style from './dialogsys.module.css'


export default function DialogSystem({ currentUrl }) {

  const host = process.env.NEXT_PUBLIC_DIALOGSYS_ATIS;
  const apiUrl = `${host}/api/v1`;
  const title = `Dialog System Software | ${siteTitle} artificial intelligence`;

  return (
    <Layout home>
      <Head>
        <title>{title}</title>
          <meta property="og:site_name" content={title}></meta>
          <meta property="og:title" content={`${title}`}></meta>
          <meta property="og:url" content="https://ionkom.com/"></meta>
          <meta
              name="description"
              content='Intelligent chatbot service, build dialog systems for your business, automate conversations'
          />
          <link rel="canonical" href={ currentUrl } key="canonical" />
      </Head>
      <Container>
        <Row>
          <Col><h1>Dialog System</h1></Col>
        </Row>
        <Row>
          <Col>
            <p className={style.textContent}>Boost customer experience and drive more sales.</p>
          </Col>
        </Row>
        <Row>
          <Col><Button href='#dialogSysInAction'>Try it for free</Button></Col>
        </Row>
        <Row className='mt-5 pt-5'>
          <Col md={6} sm={12}>
            <h2>Automate conversations </h2>
            <p className={style.textContent}>Dialog System software use artificial intelligence 
            to better understand customers requests and based on embedded dialog knowledge tries to guide users to the most relevant resources of your business.
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
            <h1 id="dialogSysInAction">Chatbot API demo</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Dialog chatBoxTitle='Flight Assistant' apiUrl={apiUrl}/>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
