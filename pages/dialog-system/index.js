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
              content='Ionkom dialog system is a chatbot construction service. Boost customer experience, automate and scale selling process on your digital products'
          />
          <link rel="canonical" href={ currentUrl } key="canonical" />
      </Head>
      <Container>
        <Row>
          <Col><h1>Dialog System</h1></Col>
        </Row>
        <Row>
          <Col>
            <p className={style.textContent}>
              Build AI assistants that really help customers.
              Boost customer experience, automate and scale the chat conversations on your digital estates.
            </p>
          </Col>
        </Row>
        <Row>
          <Col><Button href='#dialogSysInAction'>Try it for free</Button></Col>
        </Row>
        <Row className='mt-5 pt-5'>
          <Col md={7} sm={12}>
            <h2>Increase sales, reduce costs, and automate support on any channel</h2>
            <p className={style.textContent}>
              Dialog System is a natural language understanding
              and dialogue management platform that makes it easy to design and integrate a conversational user interface into your mobile app, web application, device, existing bot, text-to-speech response system, and so on.
              Using Ionkom Dialog System, you can provide new and engaging ways for users to interact with your digital or physical products.               
            </p>
          </Col>
          <Col md={5} sm={12}>
            <img
              src='/img/chatbot_ilustration.webp'
              alt='Ionkom dialog system'
              width='70%'
            />
          </Col>
        </Row>
        <Row className='mt-3 pt-3'>
          <Col md={4} sm={12}>
            <h3>Get more and better leads</h3>
            <p className={style.textContent}>
              Engage with prospects 24/7. Our customers engagement average is 46%.
              Get your team collaborating and taking action, seamlessly transferring conversations from bot to human, and back.
            </p>
          </Col>
          <Col md={4} sm={12}>
            <h3>Increase sales</h3>
            <p className={style.textContent}>
              Scale your efforts without increasing employee headcount.
              Get up to 80% open rates and 10X CTR compared to email with a bot campaign.
              Be where your customers are with one continuous conversation across channels
            </p>
          </Col>
          <Col md={4} sm={12}>
            <h3>Automate FAQs</h3>
            <p className={style.textContent}>
              Increase customer satisfaction and reduce support costs.
              Keeps the conversation balanced and add proactivity when it is needed.
              Drive more engagement and deliver better customer experiences at scale with slot-based dialog management.
              {/* Engage customers on the leading messaging channels, including WhatsApp, Apple Business Chat, Facebook Messenger, Twitter, Line, SMS, RCS and more. */}
            </p>
          </Col>
        </Row>
        <hr/>
        <Row className="justify-content-center mb-3">
          <Col xs='auto'>
            <h2>Competitive Advantage</h2>
          </Col>
        </Row>
        <Row className="justify-content-center mb-2">
          <Col xs='auto'>
            <h5>Be present where your customers are.</h5>
          </Col>
        </Row>
        <Row className="justify-content-center mb-3">
          <Col xs='auto'>
            <p className={style.textContent}>
              Engage customers on the most popular messaging channels, including WhatsApp, Apple Business Chat, Facebook Messenger, Twitter, Line, SMS, WeChat and more.
              Everything happens in real-time, with your users' choices conditioning the journey.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center mb-2">
          <Col xs='auto'>
            <h5>Enterprise-ready, available on premise.</h5>
          </Col>
        </Row>
        <Row className="justify-content-center mb-3">
          <Col xs='auto'>
            <p className={style.textContent}>
              We provide the infrastructure and take care of the hard work so you can focus on building an amazing product and user experience.
              The service is ready to be deployed in existing commercial applications and can scale with enterprise quality and performance. The service meets international compliance standards, supports unlimited API calls, making it highly accessible in your organization.
            </p>
          </Col>
        </Row>
        <hr/>
        <Row className="justify-content-center mb-4">
          <Col xs='auto'>
            <h3 id="dialogSysInAction">Chatbot API demo</h3>
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
