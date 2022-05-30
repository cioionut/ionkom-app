import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Container, Row, Col } from 'react-bootstrap'
import CookieConsent from "react-cookie-consent";

import styles from './layout.module.css'

export const siteTitle = 'Ionkom'
export const _siteTitle = 'ionkom'

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

        <Navbar collapseOnSelect bg="white" expand="lg" className={`align-items-center p-3 px-md-4 mb-3 ${styles.mainNavBar}`}>
          <Link href="/" passHref>
            <Navbar.Brand className={styles.logoFont}>{_siteTitle}</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav className="ml-auto" activeKey={router.pathname}>
              <Link href="/" passHref>
                <Nav.Link>Home</Nav.Link>
              </Link>
              <Link href="/natural-language-software" passHref>
                <Nav.Link>Natural Language</Nav.Link>
              </Link>
              <Link href="/dialog-system" passHref>
                <Nav.Link>Dialog System</Nav.Link>
              </Link>
              <Link href="/visual-ai" passHref>
                <Nav.Link>Visual AI</Nav.Link>
              </Link>
              <Link href="https://grfvpx7kxvr.typeform.com/to/omcYMMMm" passHref>
                <Nav.Link target="_blank" rel="noopener" >Request a Demo</Nav.Link>
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
                  <Link href='/policies/cookies'><a className={styles.footerLink}>Cookie Policy</a></Link>
                </Col>
                <Col xs='auto'>
                  <Link href='/policies/privacy'><a className={styles.footerLink}>Privacy Policy</a></Link>
                </Col>
                <Col xs='auto'>
                  <Link href='/policies/terms'><a className={styles.footerLink}>Terms and Conditions</a></Link>
                </Col>
                {/* <Col xs='auto'>
                  <span className="text-muted">© 2020 Copyright: <Link href="/"><a className={styles.footerLink}>ionkom.com</a></Link></span>
                </Col> */}
              </Row>
          </Container>
        </footer>
        <CookieConsent
        >
          We use cookies for analytics, advertising and to improve our site. You agree to our use of cookies by closing this message box or continuing to use our site. 
          To find out more, including how to change your settings, see our <Link href='/policies/cookies'>Cookie Policy</Link>
        </CookieConsent>
      </>
    )
}