import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'


export default function Home({ currentUrl }) {
  const title = `Ionkom - Connect with friends and explore the world around you`;

  return (
    <Layout home>
      <Head>
        <title>{title}</title>
        <meta property="og:site_name" content={siteTitle}></meta>
        <meta property="og:title" content={`${title}`}></meta>
        <meta property="og:url" content="https://www.ionkom.com/"></meta>
        <meta
            name="description"
            content="Learn how to become more productive and share your skills. Ionkom provides many useful online services that makes your life easier"
        />                
        <link rel="canonical" href={ currentUrl } key="canonical" />
      </Head>

      <Container>
        <Row>
          <Col sm={7}>
            <h1>Connect with friends and explore the world around you</h1>
            <p style={{color: '#5f6368'}}>In person meetings are the ultimate goal, share your skills and let our network to shape your personal brand.</p>
          </Col>
          <Col>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Join Ionkom Today - waiting list</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                  By clicking Sign Up, you agree to our <Link href="/policies/terms">Terms</Link>. Learn how we collect, use and share your data in our <Link href="/policies/privacy">Data Policy</Link> and how we use cookies and similar technology in our <Link href="/policies/cookies">Cookies Policy</Link>.
                </Form.Text>
              </Form.Group>

              {/* <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group> */}
              {/* <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group> */}
              <Button variant="primary" type="submit">
                Sign Up
              </Button>
            </Form>
          </Col>
        </Row>
        <hr/>
        <Row className="mt-3 p-1">
          <Col>
            <h2>Helpful products for everyone</h2>
            <p style={{color: '#5f6368'}} >
              While you are outside with friends, let us do the boring tasks for you. As our mission states we want to make more free time for our users, to achive that we offer for free a lot of helpful tools.
              Explore all products bellow.
            </p>
            {/* <img
              src='/img/zachary-nelson-98Elr-LIvD8-unsplash.jpg'
              alt='happy people outside'
              width='100%'
            /> */}
          </Col>
        </Row>
        <hr/>
        <Row className="mt-3 p-1">
          <Col sm={7}>
            <h3>Weather</h3>
            <p style={{color: '#5f6368'}}>Precise weather forecast using artificial intelligence.</p>
            Ionkom Weather presents:
            <ul>
              <li>
                Current weather conditions wherever you are now, using your device's location or IP geolocation
              </li>
              <li>
                Discover meteorologyc conditions for specific places (country/city) - RO only, coming soon: USA, UK, Germany, France, Italy
              </li>
            </ul>
            <a href='https://vremea.ionkom.com/' target="_blank" rel="noopener">Explore Ionkom Weather App</a>
          </Col>
          <Col sm={5}>
            <img
              src='/img/meteorology_ilustration.webp'
              alt='meteorology ilustration'
              width='300px'
            />
          </Col>
        </Row>
        <hr/>
        <Row className="mt-3 p-1">
          <Col sm={5}>
            <img
              src='/img/chatbot_ilustration.webp'
              alt='chatbot'
              width='300px'
            />
          </Col>
          <Col sm={7}>
            <h2>Chatbot and Text Understanding</h2>
            <p style={{color: '#5f6368'}}>
              AI models designed to identify valuable information in conversations, Natural Language Understanding (NLU) interprets user goals (intents) and derive valuable information from sentences (entities).
            </p>
            <ul>
              <li>
                Extract semantic entities like locations, persons, events - Free NLU (Natural Language Understanding) - <Link href='/natural-language-software'>Get Product</Link>
              </li>
              <li>
                Custom Chatbot Flight assistent demo - <Link href='/dialog-system'>Get Product</Link>
              </li>
              <li>
                Coronavirus Self Checker - coming Soon
              </li>
            </ul>
          </Col>
        </Row>
        <hr/>
        <Row className="mt-3 p-1">
          <Col sm={7}>
            <h2>Visual AI Reading</h2>
            <p style={{color: '#5f6368'}}>
              Optical Character Recognition (OCR) can recognize and extract text from images.
              Fast deep learning models are ready to capture data from documents instantly. Reduce turn around times and the manual entry effort required.
            </p>
            <ul>
              <li>
                Read text from images - Free OCR (Optical Character Recognition) - <Link href='/visual-ai'>Get Product</Link>
              </li>
              <li>
                ID card OCR - coming soon
              </li>
              <li>
                Invoice OCR - coming soon
              </li>
            </ul>
          </Col>
          <Col sm={5}>
            <img
              src='/img/ocr_ilustration.webp'
              alt='computer vision'
              width='300px'
            />
          </Col>
        </Row>
        <hr/>
        <Row className="mt-3 p-1">
          <Col sm={5}>
            <img
              src='/img/tech_people_concept_ilustration.webp'
              alt='tech people concept ilustration'
              width='300px'
            />
          </Col>
          <Col sm={7}>
            <h2>Office and Business Automation</h2>
            <p style={{color: '#5f6368'}}>Using a combination of our services we can fully automate your work, <Link href="https://grfvpx7kxvr.typeform.com/to/omcYMMMm"><a target="_blank" rel="noopener" >contact us</a></Link> to find a way to do this.</p>
            <p>
              Robot Process Automation (RPA) has grown alot in the last years but what it promise is not realy achivable without another team with specialized expertise.
            </p>
            <p>
              We prupose a traditional Service-API-Service approach that baypass the RPA (read as: unnecesary clicks on screen to do simple tasks) and do exactly the same job using programming scripts but cheap and headcount efficient.
            </p>
          </Col>
        </Row>

      </Container>
    </Layout>
  )
}
