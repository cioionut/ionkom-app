import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'


export default function Services() {
  return (
    <Layout home>
      <Head>
        <title>{`${siteTitle} - services`}</title>
      </Head>
      <section>
        <ul>
          <li>
            <a href="https://vremea.ionkom.com" target="_blank">Weather</a>
          </li>
          <li>
            <a href="https://cioionut.github.io/nlu-demo" target="_blank">Virtual Digital Asisstant</a>
          </li>
          <li>
            <a href="https://cioionut.github.io/nlu-demo" target="_blank">Natural Language Understanding</a>
          </li>
          <li>Ionkom App</li>
        </ul>
      </section>
      <Link href="/">
        <a>← Back to home</a>
      </Link>
    </Layout>
  )
}
