import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>NextJS Basic Typescript</title>
      </Head>
      <h1 className="inline-block text-lg">Home Page</h1>
    </Layout>
  );
};

export default Home;
