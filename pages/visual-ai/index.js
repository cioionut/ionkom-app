import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import { Container, Row, Col, Button, Card, Table } from 'react-bootstrap'
import style from './ocr.module.css'
import ocrSupportedLanguages from '../../data/ocr_supported_languages'
// import Link from 'next/link';


export default function VisualAI({ currentUrl }) {

  const title = `Read Images using ML | ${siteTitle} Visual AI`;

  return (
    <Layout home>
      <Head>
        <title>{title}</title>
        <meta property="og:site_name" content={title}></meta>
        <meta property="og:title" content={`${title}`}></meta>
        <meta property="og:url" content="https://ionkom.com/"></meta>
        <meta
            name="description"
            content='Optical Character Recognition (OCR) can recognize and extract text from images. Fast deep learning models are ready to capture data from documents instantly. Reduce turn around times and the manual entry effort required.'
        />
        <link rel="canonical" href={ currentUrl } key="canonical" />
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
        <Row className='mt-5 pt-5 mb-5'>
          <Col sm={8}>
            <h2>Digitize and understand text from images</h2>
            <p className={style.textContent}>
              Optical Character Recognition (OCR) can recognize and extract text from images.
              Fast deep learning models are ready to capture data from documents instantly. Reduce turn around times and the manual entry effort required.
            </p>
            <span className={style.textContent}>
              Available OCR Services
              <ul>
                <li>Document Reading</li>
                <li>Arbitrary text reading - coming soon</li>
                <li>Id card OCR - road map</li>
                <li>Invoice, bill/Key-value OCR - road map</li>
              </ul>
            </span>
          </Col>
          <Col sm={4}>
            <img
              src='/img/ocr_ilustration.webp'
              alt='computer vision'
              width='300px'
            />
          </Col>
        </Row>
        <Row className='mt-3 pt-3'>
          <Col md={4} sm={12}>
            <h3>Read Arbitrary Text</h3>
            <p className={style.textContent}>Recognize and extract text from any image, such as photos of license plates, street sign, traffic sign or any other objects with serial numbers.</p>
          </Col>
          <Col md={4} sm={12}>
            <h3>Read Documents</h3>
            <p className={style.textContent}>Extracts text from photos of documents - id cards, invoices, bills, financial reports, articles, and more. The vision model is optimized for dense text and semi-structured data.</p>
          </Col>
          <Col md={4} sm={12}>
            <h3>Industry-leading accuracy</h3>
            <p className={style.textContent}>Our computer vision collection have the most new and performant machine learning models.</p>
          </Col>
        </Row>
        <Row className="justify-content-center mb-3">
          <Col xs='auto'>
            <h4><a href="https://rapidapi.com/ionkom/api/ocr14/endpoints" target="_blank" >Try the API</a></h4>
          </Col>
        </Row>
        <hr/>
        <Row className="justify-content-center mb-5 mt-5">
          <Col xs='auto'>
            <h2 id="pricing" >Competitive Advantage</h2>
          </Col>
        </Row>
        <Row className="justify-content-center mb-3">
          <Col xs='auto'>
          <p className={style.textContent}>
              OCR API uses machine learning to detect text within images in more than 80 languages and various file types.
              Take advantage and automate manual data entry in your organization.
              The first step to digitalization era begins with Document Understanding AI, which lets you process millions of documents quickly and automate business workflows.
            </p>
          </Col>
        </Row>
        <hr/>
        <Row className="justify-content-center mb-5 mt-5">
          <Col xs='auto'>
            <h2>Pricing</h2>
          </Col>
        </Row>
        <Row>
          <Container>
          <div className="pricing card-deck flex-column flex-md-row mb-3">
            <div className="card card-pricing text-center px-2 mb-4">
                <span className="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm">Starter</span>
                <div className="bg-transparent card-header pt-4 border-0">
                    <h2 className="h2 font-weight-normal text-primary text-center">$<span className="price">0</span><span className="h6 text-muted ml-2">/ month</span></h2>
                    <p className={`bg-transparent ${style.textContent} `}>For individuals who just want the essentials to get started quickly</p>
                </div>
                <div className="card-body pt-0">
                    <ul className="list-unstyled mb-4">
                        <li><b>100 / month quota</b></li>
                        <li className={style.textContent}>Hard Limit</li>
                        {/* <li>Monthly updates</li>
                        <li>Free cancelation</li> */}
                    </ul>
                    <Button className='mb-3' variant='outline-primary' href="https://rapidapi.com/ionkom/api/ocr14/endpoints" target="_blank" >Order Now</Button>
                    {/* <button type="button" className="btn btn-outline-secondary mb-3">Order now</button> */}
                </div>
            </div>
            <div className="card card-pricing text-center px-2 mb-4">
                <span className="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm">Professional</span>
                <div className="bg-transparent card-header pt-4 border-0">
                    <h2 className="h2 font-weight-normal text-primary text-center">$<span className="price">14.95</span><span className="h6 text-muted ml-2">/ month</span></h2>
                    <p className={`bg-transparent ${style.textContent} `}>For professionals who require more volume for their application</p>
                </div>
                <div className="card-body pt-0">
                    <ul className="list-unstyled mb-4">
                        <li><b>2500 / month quota</b></li>
                        <li className={style.textContent}>+ ($0.050 USD/extra req)</li>
                    </ul>
                    <Button className='mb-3' variant='outline-primary' href="https://rapidapi.com/ionkom/api/ocr14/endpoints" target="_blank" >Order Now</Button>
                    
                </div>
            </div>
            <div className="card card-pricing popular shadow text-center px-2 mb-4">
                <span className="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm">Business</span>
                <div className="bg-transparent card-header pt-4 border-0">
                    <h2 className="h2 font-weight-normal text-primary text-center">$<span className="price">49.95</span><span className="h6 text-muted ml-2">/ month</span></h2>
                    <p className={`bg-transparent ${style.textContent} `}>For professionals who work on larger scale applications</p>
                </div>
                <div className="card-body pt-0">
                    <ul className="list-unstyled mb-4">
                      <li><b>10000 / month quota</b></li>
                      <li className={style.textContent}>+ ($0.040 USD/extra req)</li>
                    </ul>
                    <Button className='mb-3' variant='primary' href="https://rapidapi.com/ionkom/api/ocr14/endpoints" target="_blank" >Order Now</Button>                    
                </div>
            </div>
            <div className="card card-pricing text-center px-2 mb-4">
                <span className="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm">Enterprise</span>
                <div className="bg-transparent card-header pt-4 px-2 border-0">
                    <h2 className="h2 font-weight-normal text-primary text-center" data-pricing-value="60">$<span className="price">149.95</span><span className="h6 text-muted ml-2">/ month</span></h2>
                    <p className={`bg-transparent ${style.textContent} `}>For businesses who need high volume, production-level use</p>
                </div>
                <div className="card-body pt-0">
                  <ul className="list-unstyled mb-4">
                    <li><b>50000 / month quota</b></li>
                    <li className={style.textContent}>+ ($0.030 USD/extra req)</li>
                  </ul>
                  <Button className='mb-3' variant='outline-primary' href="https://rapidapi.com/ionkom/api/ocr14/endpoints" target="_blank" >Order Now</Button>                    
                </div>
            </div>
          </div>
        </Container>
        </Row>
        <Row className="justify-content-center mb-3 mt-5">
          <Col xs='auto'>
            <h2>Language support</h2>
          </Col>
        </Row>
        <Row className="justify-content-center mb-3">
          <Col xs='auto'>
            <p>
              Computer Vision's OCR APIs support several languages. 
              They require you to specify a language code.
            </p>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Language</th>
                  <th>Lang. Code</th>
                </tr>
              </thead>
              <tbody>
                {ocrSupportedLanguages.map((lang, idx) => {
                    return (
                    <tr scope="row" key={idx}>
                      <td>{idx+1}</td>
                      <td>{lang.language}</td>
                      <td>{lang.langCode}</td>
                    </tr>)
                  })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
