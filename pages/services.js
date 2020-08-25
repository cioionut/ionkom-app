import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'


export default function Services() {
  return (
    <Layout home>
      <Head>
        <title>{`${siteTitle} - Services`}</title>
      </Head>
      <section>
        <ul>
          <li>Productivity tools</li>
          <li>Social Apps</li>
        </ul>
      </section>
      <Link href="/">
        <a>← Back to home</a>
      </Link>
    </Layout>
  )
}
