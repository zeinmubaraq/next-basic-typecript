import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

export default function UserDetail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <Head>
        <title>{id} - Basic Next</title>
      </Head>
      <h1 className="capitalize">{id}</h1>
    </Layout>
  );
}
