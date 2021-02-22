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
              <p className={style.textContent}>
                Find the meaning from unstructured text using Ionkom machine learning.
              </p>
            </Col>
          </Row>
          <Row>
            <Col><Button href='#nluInAction'>Try it for free</Button></Col>
          </Row>
          <Row className='mt-5 pt-5'>
            <Col md={7} sm={12}>
              <h2>Intelligent text analysis</h2>
              <p className={style.textContent}>
                Natural Language Understanding (NLU) enables computers to understand human language contained in unstructured data and deliver critical insights.
              </p>
              <p className={style.textContent}>
                NLU uses machine learning to predict text insights like user intention and domain specific entities.
                You can extract information about people, places, and events, and use them to better understand customer conversations.
              </p>
            </Col>
            <Col md={5} sm={12} className="mt-3">
              <img
                src='/img/paper-2935367_640.png'
                alt='natural language understanding'
                width='50%'
              />
            </Col>
          </Row>
          <Row className='mt-5 pt-5'>
            <Col md={4} sm={12}>
              <h3>Chatbots and customer support</h3>
              <p className={style.textContent}>
                Combining Language Understanding and Dialog System - Ionkom AI enable customers to create conversational interfaces for various scenarios like banking, travel and entertainment.
                In cloud natural language models always learn, you can benefit from the latest versions using provided APIs.
              </p>
            </Col>
            <Col md={4} sm={12}>
              <h3>Enterprise-ready, available on premise</h3>
              <p className={style.textContent}>
                The service is ready to be deployed in existing commercial applications and can scale with enterprise quality and performance. The service meets international compliance standards, support unlimited API calls, making it highly accessible in your organization.
              </p>
            </Col>
            <Col md={4} sm={12}>
              <h3>Custom language solution</h3>
              <p className={style.textContent}>
                Quickly build a custom language solution, just bring your data, no coding skils required.
                With our support the models can benefit from always learning. Active learning support is used to continuously improve the quality of the natural language models.

              </p>
            </Col>
          </Row>
          <Row className='mt-3 pt-3'>
            <Col>
              <h3>Two classifiers one model</h3>
              <p className={style.textContent}>Underlying ML Technology - The algorithm uses state of the art natural language understanding approaches. It uses a sequence to sequence neural network, that encode the meaning of a sentence and two decoders, one for intent detection and another for slot filling (or entity recognition) that decode the captured meaning.</p>
              <ul className={style.textContent}>
                <li>
                  <p>Intent detection: Classify text by sentence meaning. Find out what your customers want, in the example bellow 'flight' will be the predicted intention.</p>
                </li>
                <li>
                  <p>Entity Recognition: Extract relevant information from unstructured text. Entities can be places, dates, persons in a general context or more precise like in the example bellow entities dependent from sentence context like 'from location' and 'to location'.</p>
                </li>
              </ul>
            </Col>
          </Row>
          <hr/>
        </Container>

        <NLUinAction />

    </Layout>
  )
}
