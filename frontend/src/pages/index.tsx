import Head from 'next/head';
import Users from '../components/Users';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <main>
        <Users />
      </main>

      <footer>
        <h3>footer</h3>
      </footer>
    </>
  );
};

export default Home;
