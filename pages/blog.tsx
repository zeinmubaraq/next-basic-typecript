import Layout from '../components/Layout';
import Head from 'next/head';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface BlogProps {
  dataBlog: Post[];
}

export default function BlogPage(props: BlogProps) {
  const { dataBlog } = props;

  return (
    <Layout>
      <Head>
        <title>Blog - NextJS Basic Typescript</title>
      </Head>
      <h1 className="inline-block text-xl">Blogs Page</h1>
      {dataBlog.map(blog => {
        return (
          <article key={blog.id} className="mt-5">
            <h3 className="text-lg font-semibold capitalize">{blog.title}</h3>
            <p className="text-sm">{blog.body}</p>
          </article>
        );
      })}
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const dataBlog = await res.json();

  return {
    props: {
      dataBlog,
    },
  };
}
