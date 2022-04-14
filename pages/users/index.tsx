import { NextPage } from 'next';
import Layout from '../../components/Layout';
import Head from 'next/head';

const UserPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Users - NextJS Basic Typescript</title>
      </Head>
      <h1>Users Page</h1>
    </Layout>
  );
};

export default UserPage;
