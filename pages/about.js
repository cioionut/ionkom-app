import Head from 'next/head'
// import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'


export default function About({ currentUrl }) {
  const title = `Ionkom - about us and our mission`
  return (
    <Layout home>
      <Head>
        <title>{title}</title>
        <meta property="og:site_name" content={siteTitle}></meta>
        <meta property="og:title" content={`${title}`}></meta>
        <meta property="og:url" content="https://www.ionkom.com/"></meta>
        <meta
            name="description"
            content="Our mission is to create more free time for humans and
            help them to better understand and use technology."
        />
        <link rel="canonical" href={ currentUrl } key="canonical" />
      </Head>
      <section className="container">
        <p style={{ fontSize: 21 }}>
          Our mission is to create more free <b>time</b> for humans and
          help them to better understand and use technology.
        </p>
      </section>
    </Layout>
  )
}
