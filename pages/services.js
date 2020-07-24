import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'


export default function Services() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <p>Services</p>
      </section>
      <Link href="/">
        <a>← Back to home</a>
      </Link>
    </Layout>
  )
}
