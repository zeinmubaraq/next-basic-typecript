import Layout from '../../components/Layout';
import Head from 'next/head';

interface UsersProps {
  dataUsers: Array<any>;
}

export default function User(props: UsersProps) {
  const { dataUsers } = props;
  return (
    <Layout>
      <Head>
        <title>Users - NextJS Basic Typescript</title>
      </Head>
      <h1 className="inline-block text-lg">Users Page</h1>
      {dataUsers.map(user => (
        <h3 key={user.id}>{user.name}</h3>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();
  return {
    props: {
      dataUsers,
    },
  };
}
