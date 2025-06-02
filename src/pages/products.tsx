import Head from 'next/head';

export default function Products() {
  return (
    <>
      <Head>
        <title>Our Products</title>
        <meta property="og:title" content="Explore Our Products" />
        <meta property="og:description" content="Browse our collection of premium products" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_APP_URL}/products`} />
        <meta property="og:image" content={`${process.env.NEXT_PUBLIC_APP_URL}/products-og.jpg`} />
      </Head>
      <main className="min-h-screen p-8">
        <h1 className="text-4xl font-bold mb-4" style={{color: 'red'}}>Our Products</h1>
        <p className="text-lg">Check out our amazing product collection.</p>
      </main>
    </>
  );
} 