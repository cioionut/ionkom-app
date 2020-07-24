import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import styles from './layout.module.css'
import { useState } from 'react'


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
        <meta
            name="description"
            content="Communicate your ideas"
        />
      </Head>

      <Navbar bg="white" expand="lg" className={`align-items-center p-3 px-md-4 mb-3 ${styles.borderBottom} ${styles.boxShadow}`}>
        <Link href="/" passHref>
          <Navbar.Brand className={styles.logoFont}>{siteTitle}</Navbar.Brand>
        </Link>
        <Nav className="ml-auto" activeKey={router.pathname}>
          <Link href="/" passHref>
            <Nav.Link>Home</Nav.Link>
          </Link>
          <Link href="/services" passHref>
            <Nav.Link>Services</Nav.Link>
          </Link>
        </Nav>
      </Navbar>
      
      <main>{children}</main>
    </>
  )
}