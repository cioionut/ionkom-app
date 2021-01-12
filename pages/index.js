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
          <Col>
            <h1>Connect with friends and explore outside real world</h1>
            <p style={{color: '#5f6368'}}>In person meetings are the ultimate goal, share your skills and let our network to shape your personal brand.</p>
          </Col>
          <Col>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <hr/>
        <Row className="mt-3 p-1">
          <Col>
            <p>If you already represent a business see our Natural Language Software: 
               <Link href='/natural-language-software'> Text Understanding</Link> and 
               <Link href='/dialog-system'> Dialog Systems</Link>.</p>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
