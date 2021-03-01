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
        <Row className="mt-5 mb-5">
          <Col>
            <h2>End user in the first place</h2>
            <p>
              Dedicated to make life easier, Ionkom products tries to eliminate the time wasted between people and machines and make their online presence to be more efficient and valuable, everything with the goal of more direct real world interactions.
            </p>
          </Col>
        </Row>
        <Row className="mt-5 mb-5">
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
          </Col>
        </Row>
        <Row className="mt-5 mb-5">
          <Col>
            <h2>Little help in Healthcare</h2>
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
                  get help in simptoms identification
                </li>
                <li>
                  learn how to interpret self-tests
                </li>
              </ul>
          </Col>
        </Row>
        <Row className="mt-5 mb-5">
          <Col>
            <h2 id="relevant">Relevant News Platform</h2>
            <p>
              In a world full of information we need a filter. <Link href="#relevant">Relevant</Link> initiative aims to address this problem and tries to present a different point of view about today news relevance and true value.
            </p>
          </Col>
        </Row>
        <Row className="mt-5 mb-5">
          <Col>
            <h2 id="elearning">e-Learning Content</h2>
            <p>Every theoretical information can now be learned from internet. The key stays in perseverance, guidance, directions and long term goals.</p>
          </Col>
        </Row>
        <Row className="mt-5 mb-5">
          <Col>
            <h2 id="elearning">Cyber Security and Privacy Services</h2>
            <p>Security and privacy on the internet is the most important thing. We want to educate our customers to apply a security layer on their online presence.</p>
          </Col>
        </Row>
        <Row className="mt-5 mb-5">
          <Col>
            <h2 id="elearning">Research and Development</h2>
            <p>
              Constant research in information technology is crucial for our business, see <Link href="/">here</Link> the list of technologies that are on our radar. 
              The IT industry is not the single place where we try to inovate, we are also so interested in how to make the micro-economy actors to interact with eatch other in order to have an uniform distribution of wealth.
            </p>
          </Col>
        </Row>
        <Row className="mt-5 mb-5">
          <Col>
            <h2 id="elearning">Contact us</h2>
            <ul>
              <li>
                on email at hello@ionkom.com
              </li>
              <li>
                on social media - Reddit, Twitter, Facebook
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
