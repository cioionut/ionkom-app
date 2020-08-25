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
        {/* Goal
        keep in mind that everyone wants to feel good.
        How can I deliver some good feelings to my users? What is the system?
         */}
        <p>
          We are growing in communities, in some points in life this communities shrinks, disapear or we migrate to others but not as good as we want, we need time to build this kind of relationships especially when we move forward in life.
          Nowadays so many people canalyze their efforts in wrong directions and keeps less time for their passions. A passion needs to be expressed in some context.
          Our app view each person as a pro and offers tools for those that want to express their passions/beliefs, and lets others to follows and learn.
          Automatically build communities based on inspiring trends.
          The goal is to create the real offline communities.
        </p>

        <p>On the internet the community is viewed as a grup of people that share the same possions, interests and goals.</p>
        <p>In my perspective, community is the place where we find diversity and lets us shape involuntary or voluntary after prople that inspire. In conslusion people inspire each other</p>
        <p>Our mission is to help people communicates their ideas/beliefs in order to build better relations and offline contact</p>

        <p>[idea - search engine message] Boost your mood! How can I do for you?</p>

      </section>
      <Link href="/">
        <a>← Back to home</a>
      </Link>
    </Layout>
  )
}
