import Head from 'next/head';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Our Blog</title>
        <meta property="og:title" content="Latest Blog Posts" />
        <meta property="og:description" content="Read our latest articles and insights" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="hhttp://localhost:3001//blog" />
        <meta property="og:image" content="http://localhost:3001//blog-og.jpg" />
      </Head>
      <main className="min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
        <p className="text-lg">Read our latest articles and insights.</p>
      </main>
    </>
  );
} 