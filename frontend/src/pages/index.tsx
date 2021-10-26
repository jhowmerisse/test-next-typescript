import Head from 'next/head';
import Patients from '../components/Patients';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <main>
        <Patients />
      </main>

      <footer>
        <h3>footer</h3>
      </footer>
    </>
  );
};

export default Home;
