import Head from 'next/head';
// import Link from 'next/link'
import Layout, { siteTitle } from '../../components/layout';
import NLUinAction from '../../components/nluinaction';
import { Container, Row, Col, Button } from 'react-bootstrap';
import style from './nlu.module.css';


export default function NLUPage({ currentUrl }) {
  const title = `Natural Language Understanding | ${siteTitle} NLU AI`;
  return (
    <Layout home>
        <Head>
          <title>{title}</title>
          <meta property="og:site_name" content={title}></meta>
          <meta property="og:title" content={`${title}`}></meta>
          <meta property="og:url" content="https://ionkom.com/"></meta>
          <meta
              name="description"
              content='Natural Language Understanding service uses machine learning to predict text insights like user intention and domain specific entities.
              You can extract information about people, places, and events and use them to better understand customer conversations.'
          />
          <link rel="canonical" href={ currentUrl } key="canonical" />
        </Head>
        <Container>
          <Row>
            <Col>
              <h1>Natural Language Understanding</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <p className={style.textContent}>Find the meaning from unstructured text using Ionkom machine learning.</p>
            </Col>
          </Row>
          <Row>
            <Col><Button href='#nluInAction'>Try it for free</Button></Col>
          </Row>
          <Row className='mt-5 pt-5'>
            <Col md={6} sm={12}>
              <h2>Intelligent text analysis</h2>
              <p className={style.textContent}>Natural Language software uses machine learning to predict text insights like user intention and domain specific entities.
              You can extract information about people, places, and events, and use them to better understand customer conversations.
              </p>
            </Col>
            <Col md={6} sm={12}>
              <img
                src='/img/paper-2935367_640.png'
                alt='natural language understanding'
                width='40%'
              />
            </Col>
          </Row>
          <Row className='mt-5 pt-5'>
            <Col md={4} sm={12}>
              <h3>Intent Detection</h3>
              <p className={style.textContent}>Classify text by sentence meaning. Find out what your customers want, in the example bellow 'flight' will be the predicted intention</p>
            </Col>
            <Col md={4} sm={12}>
              <h3>Entity Recognition</h3>
              <p className={style.textContent}>Extract relevant information from unstructured text. Entities can be places, dates, persons in a general context or more precise like in the example bellow entities dependent from sentence context like 'from location' and 'to location'.</p>
            </Col>
            <Col md={4} sm={12}>
              <h3>Custom training</h3>
              <p className={style.textContent}>Use our models to learn from your data</p>
            </Col>
          </Row>
          <hr/>
        </Container>

        <NLUinAction />

    </Layout>
  )
}
