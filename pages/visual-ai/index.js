import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import style from './ocr.module.css'


export default function DialogSystem() {

  const host = process.env.NEXT_PUBLIC_DIALOGSYS_ATIS;
  const apiUrl = `${host}/api/v1`;
  const title = `Visual AI - Read Images using ML | ${siteTitle} artificial intelligence`;

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
      </Head>
      <Container>
        <Row>
          <Col><h1>Visual AI - Optical Character Recognition (OCR)</h1></Col>
        </Row>
        <Row>
          <Col>
            <p className={style.textContent}>Visual AI is a collection of pre-trained machine learning models specialized in computer vision. Read and Derive insights from your images in cloud or on premise.
            Keep the order in your image streams. </p>
          </Col>
        </Row>
        <Row>
          <Col><Button href="https://rapidapi.com/ionkom/api/ocr14/endpoints" target="_blank" >Try it for free</Button></Col>
        </Row>
        <Row className='mt-5 pt-5'>
          <Col md={8} sm={12} style={{backgroundColor: '#f3f4f4'}}>
            <h2>Detect text in images</h2>
            <p className={style.textContent}>Optical Character Recognition (OCR) can recognize and extract text from images. Our solution can help you to automate text detection in documents.</p>
          </Col>
          <Col md={4} sm={12}>
            <img
              src='/img/shutter-2008487_1280.png'
              alt='lens vision'
              width='300px'
            />
          </Col>
        </Row>
        <Row className='mt-3 pt-3'>
          <Col md={4} sm={12}>
            <h3>Text Detection</h3>
            <p className={style.textContent}>Recognize and extract text from any image.</p>
          </Col>
          <Col md={4} sm={12}>
            <h3>Document Text Detection</h3>
            <p className={style.textContent}>Extracts text from an image, but the vision model is optimized for dense text and documents.</p>
          </Col>
          <Col md={4} sm={12}>
            <h3>Industry-leading accuracy</h3>
            <p className={style.textContent}>Our computer vision collection have the most new and performant machine learning models.</p>
          </Col>
        </Row>
        <hr/>
        <Row className="justify-content-center">
          <Col xs='auto'>
            <h1>Pricing</h1>
          </Col>
        </Row>
        <Row>
        <div class="container mb-5 mt-5">
          <div class="pricing card-deck flex-column flex-md-row mb-3">
            <div class="card card-pricing text-center px-2 mb-4">
                <span class="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm">Starter</span>
                <div class="bg-transparent card-header pt-4 border-0">
                    <h1 class="h1 font-weight-normal text-primary text-center">$<span class="price">0</span><span class="h6 text-muted ml-2">/ month</span></h1>
                    <p className={`bg-transparent ${style.textContent} `}>For individuals who just want the essentials to get started quickly</p>
                </div>
                <div class="card-body pt-0">
                    <ul class="list-unstyled mb-4">
                        <li><b>100 / month quota</b></li>
                        <li className={style.textContent}>Hard Limit</li>
                        {/* <li>Monthly updates</li>
                        <li>Free cancelation</li> */}
                    </ul>
                    <Button className='mb-3' variant='outline-secondary' href="https://rapidapi.com/ionkom/api/ocr14/endpoints" target="_blank" >Order Now</Button>
                    {/* <button type="button" class="btn btn-outline-secondary mb-3">Order now</button> */}
                </div>
            </div>
            <div class="card card-pricing popular shadow text-center px-2 mb-4">
                <span class="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm">Professional</span>
                <div class="bg-transparent card-header pt-4 border-0">
                    <h1 class="h1 font-weight-normal text-primary text-center">$<span class="price">24,98</span><span class="h6 text-muted ml-2">/ month</span></h1>
                    <p className={`bg-transparent ${style.textContent} `}>For professionals who require more volume for their application</p>
                </div>
                <div class="card-body pt-0">
                    <ul class="list-unstyled mb-4">
                        <li><b>2500 / month quota</b></li>
                        <li className={style.textContent}>+ ($0.050 USD/extra req)</li>
                    </ul>
                    <Button className='mb-3' variant='primary' href="https://rapidapi.com/ionkom/api/ocr14/endpoints" target="_blank" >Order Now</Button>
                    
                </div>
            </div>
            <div class="card card-pricing text-center px-2 mb-4">
                <span class="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm">Business</span>
                <div class="bg-transparent card-header pt-4 border-0">
                    <h1 class="h1 font-weight-normal text-primary text-center">$<span class="price">99,98</span><span class="h6 text-muted ml-2">/ month</span></h1>
                    <p className={`bg-transparent ${style.textContent} `}>For professionals who work on larger scale applications</p>
                </div>
                <div class="card-body pt-0">
                    <ul class="list-unstyled mb-4">
                      <li><b>10000 / month quota</b></li>
                      <li className={style.textContent}>+ ($0.040 USD/extra req)</li>
                    </ul>
                    <Button className='mb-3' variant='outline-secondary' href="https://rapidapi.com/ionkom/api/ocr14/endpoints" target="_blank" >Order Now</Button>                    
                </div>
            </div>
            <div class="card card-pricing text-center px-2 mb-4">
                <span class="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm">Enterprise</span>
                <div class="bg-transparent card-header pt-4 px-2 border-0">
                    <h1 class="h1 font-weight-normal text-primary text-center" data-pricing-value="60">$<span class="price">269,98</span><span class="h6 text-muted ml-2">/ month</span></h1>
                    <p className={`bg-transparent ${style.textContent} `}>For businesses who need high volume, production-level use</p>
                </div>
                <div class="card-body pt-0">
                  <ul class="list-unstyled mb-4">
                    <li><b>30000 / month quota</b></li>
                    <li className={style.textContent}>+ ($0.030 USD/extra req)</li>
                  </ul>
                  <Button className='mb-3' variant='outline-secondary' href="https://rapidapi.com/ionkom/api/ocr14/endpoints" target="_blank" >Order Now</Button>                    
                </div>
            </div>
          </div>
        </div>
        </Row>
      </Container>
    </Layout>
  )
}
