import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'


export default function Home() {
  const title = `Ionkom - Connect with friends and explore outside real world`;

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
      </Head>

      <Container>
        <Row>
          <Col sm={6}>
            <h1>Connect with friends and explore outside real world</h1>
            <p style={{color: '#5f6368'}}>In person meetings are the ultimate goal, share your skills and let our network to shape your personal brand.</p>
          </Col>
          <Col>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Join Ionkom Today</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
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
                Submit
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
            <img
              src='/img/zachary-nelson-98Elr-LIvD8-unsplash.jpg'
              alt='happy people outside'
              width='100%'
            />
          </Col>
        </Row>
        <hr/>
        <Row className="mt-3 p-1">
          <Col sm={7}>
            <h3>Woooho! What's the rush?</h3>
            <p style={{color: '#5f6368'}}>Before to jump into the tech zoo, check the <a href='https://vremea.ionkom.com/' target="_blank">weather</a> to see if you really need to rush</p>
            <p>
              Ionkom Weather presents:
              <ul>
                <li>
                  Current weather conditions wherever you are now, using your device's location or IP geolocation
                </li>
                <li>
                  Discover meteorologyc conditions for specific places (country/city) - RO only, comming soon: USA, UK, Germany, France, Italy
                </li>
              </ul>
              <a href='https://vremea.ionkom.com/' target="_blank">Explore Ionkom Weather App</a>
            </p>
          </Col>
          <Col sm={5}>
            <img
              src='/img/meteorology_ilustration.jpg'
              alt='meteorology ilustration'
              width='300px'
            />
          </Col>
        </Row>
        <hr/>
        <Row className="mt-3 p-1">
          <Col sm={5}>
            <img
              src='/img/Wavy_Tech-12_Single-03.jpg'
              alt='chatbot'
              width='300px'
            />
          </Col>
          <Col sm={7}>
            <h2>Chatbot and Text Understanding</h2>
            <p style={{color: '#5f6368'}}>24/7 service</p>
            <ul>
              <li>
                Extract semantic entities like locations, persons, events - Free NLU (Natural Language Understanding) - <Link href='/natural-language-software'>Get Product</Link>
              </li>
              <li>
                Custom Chatbot Flight assistent demo - <Link href='/dialog-system'>Get Product</Link>
              </li>
              <li>
                Coronavirus Self Checker - Comming Soon
              </li>
            </ul>
          </Col>
        </Row>
        <hr/>
        <Row className="mt-3 p-1">
          <Col sm={7}>
            <h2>Visual AI Reading</h2>
            <p style={{color: '#5f6368'}}>Optical Character Recognition (OCR) can recognize and extract text from images. Our solution can help you to automate text detection in documents.</p>
            <ul>
              <li>
                Read text from images - Free OCR (Optical Character Recognition) - <Link href='/visual-ai'>Get Product</Link>
              </li>
              <li>
                ID card OCR - Comming soon
              </li>
              <li>
                Invoice OCR - Comming soon
              </li>
            </ul>
          </Col>
          <Col sm={5}>
            <img
              src='/img/Wavy_Tech-09_Single-01.jpg'
              alt='computer vision'
              width='300px'
            />
          </Col>
        </Row>
        <hr/>
        <Row className="mt-3 p-1">
          <Col sm={5}>
            <img
              src='/img/tech_people_concept_ilustration.jpg'
              alt='tech people concept ilustration'
              width='300px'
            />
          </Col>
          <Col sm={7}>
            <h2>Office and Business Automation</h2>
            <p style={{color: '#5f6368'}}>Using a combination of our services we can fully automate your work, <Link href='/contact'>contact</Link> us to find a way to do this.</p>
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
