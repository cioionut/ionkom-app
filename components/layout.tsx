import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Container, Row, Col } from 'react-bootstrap'

import styles from './layout.module.css'


export const siteTitle = 'ionkom'

export default function Layout({
    children,
    home
  }: {
    children: React.ReactNode
    home?: boolean
  }) {
    const router = useRouter();
    return (
      <>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar collapseOnSelect bg="white" expand="lg" className={`align-items-center p-3 px-md-4 mb-3 ${styles.borderBottom} ${styles.boxShadow}`}>
          <Link href="/" passHref>
            <Navbar.Brand className={styles.logoFont}>{siteTitle}</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto" activeKey={router.pathname}>
              <Link href="/" passHref>
                <Nav.Link>Home</Nav.Link>
              </Link>
              <Link href="/cionlu" passHref>
                <Nav.Link>NLU</Nav.Link>
              </Link>
              <Link href="/dialog-system" passHref>
                <Nav.Link>Dialog System</Nav.Link>
              </Link>
              <Link href="/services" passHref>
                <Nav.Link>Services</Nav.Link>
              </Link>
              <Link href="/contact" passHref>
                <Nav.Link>Contact</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        
        <main>{children}</main>
        <footer className={styles.footer}>
          <Container fluid>
              <Row>
                <Col xs='auto'>
                  <Link href="/about"><a className={styles.footerLink}>About</a></Link>
                </Col>
                <Col xs='auto'>
                  <Link href="/contact"><a className={styles.footerLink}>Contact</a></Link>
                </Col>
                {/* <Col xs='auto'>
                  <span className="text-muted">© 2020 Copyright: <Link href="/"><a className={styles.footerLink}>ionkom.com</a></Link></span>
                </Col> */}
              </Row>
          </Container>
        </footer>
      </>
    )
}