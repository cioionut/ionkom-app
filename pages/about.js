import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import { Container, Row, Col } from 'react-bootstrap';


export default function About({ currentUrl }) {
  const title = `About us and our mission - Ionkom`
  return (
    <Layout home>
      <Head>
        <title>{title}</title>
        <meta property="og:site_name" content={siteTitle}></meta>
        <meta property="og:title" content={`${title}`}></meta>
        <meta property="og:url" content="https://www.ionkom.com/"></meta>
        <meta
            name="description"
            content="Our mission is to create more free time for humans and
            help them to better understand and use technology."
        />
        <link rel="canonical" href={ currentUrl } key="canonical" />
      </Head>
      <Container>
        <Row className="mt-5 mb-5">
          <Col className="mt-5 mb-5">
            <h1 className="mt-5 mb-5" style={{ fontWeight: 400 }}>
              Our mission is to create more free <b>time</b> for humans and help them to better understand and use technology.
            </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>End user in the first place</h2>
            <p>
              Dedicated to make life easier, Ionkom products tries to eliminate the time wasted between people and machines.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Increase conversation efficiency and organize information</h2>
            <p>
              <span>Unstructured data is growing at 55-65 percent each year. And as much as </span>
              <a 
                href="https://www.cio.com/article/3406806/ai-unleashes-the-power-of-unstructured-data.html"
                target="_blank" rel="noopener"
              >
                90 percent of that data is defined as unstructured data
              </a>.
              Fortunately, artificial intelligence (AI) technologies are arriving just in time to help us.
            </p>
            <p>
              Ionkom services powered by AI:
              <ul>
                <li>
                  <Link href='/natural-language-software'>Natural Language Understanding</Link>
                </li>
                <li>
                  <Link href='/dialog-system'>Dialog System</Link>
                </li>
                <li>
                  <Link href='/visual-ai'>Optical Character Recognition</Link>
                </li>
              </ul>
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Little help for humans health</h2>
            <p>
              Ionkom Coronavirus Self-Chacker is our first product in health universe.
              It is a digital assistent that helps people to:
              <ul>
                <li>
                  get fast guidance to the official informations about COVID-19
                </li>
                <li>
                  get a quick overview about vaccine options
                </li>
                <li>
                  get help in imptoms identification
                </li>
                <li>
                  learn how to interpret self-tests
                </li>
              </ul>
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
