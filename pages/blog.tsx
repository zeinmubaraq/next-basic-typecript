import { NextPage } from 'next';
import Layout from '../components/Layout';
import Head from 'next/head';

const BlogPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Blog - NextJS Basic Typescript</title>
      </Head>
      <h1 className="inline-block text-lg">Blogs Page</h1>
    </Layout>
  );
};

export default BlogPage;
