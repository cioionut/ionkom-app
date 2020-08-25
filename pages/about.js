import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'


export default function About() {
  return (
    <Layout home>
      <Head>
        <title>{`${siteTitle} - About us and our mission`}</title>
      </Head>
      <section>
        <p>Our mission is to help people to understand technology in order to create more free time for their passions.</p>
      </section>
      <Link href="/">
        <a>← Back to home</a>
      </Link>
    </Layout>
  )
}
