import { Box, Typography } from "@mui/material";
import Head from "next/head";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Our Blog</title>
        <meta property="og:title" content="Latest Blog Posts" />
        <meta
          property="og:description"
          content="Read our latest articles and insights"
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${process.env.NEXT_PUBLIC_APP_URL}/blog`} />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_APP_URL}/blog-og.jpg`}
        />
      </Head>
      <Box>
        <Typography color="red" variant="h1">
          Our Blog
        </Typography>
        <Typography>Read our latest articles and insights.</Typography>
      </Box>
    </>
  );
}
