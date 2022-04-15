import Layout from '../../components/Layout';
import Head from 'next/head';
import { useRouter } from 'next/router';

interface UsersProps {
  dataUsers: Array<any>;
}

export default function User(props: UsersProps) {
  const { dataUsers } = props;
  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>Users - NextJS Basic Typescript</title>
      </Head>
      <h1 className="mb-4 inline-block text-lg font-bold">Users Page</h1>
      {dataUsers.map(user => (
        <div
          key={user.id}
          onClick={() => router.push(`/users/${user.id}`)}
          className="mb-2 cursor-pointer border-b"
        >
          <h3 className="font-semibold">{user.name}</h3>
          <p className="text-sm lowercase">{user.email}</p>
        </div>
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
