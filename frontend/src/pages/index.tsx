import Layout from '@/components/Layout';
import axios from 'axios';

export const getServerSideProps = async () => {
  const data = await axios('http://localhost:3080/api');
  
  return {
    props: {
      data: data?.data
    }
  }
}

export default function Home({ data }: any) {
  console.log(data.message);

  return (
    <>
      <section className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12" id="hero">
        <article className="sm:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center sm:text-5sl sm:text-left text-slate-900 dark:text-white">
            My <span className="text-indigo-700 dark:text-indigo-300">Cooking Website</span>
          </h2>
          <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
            I want to cookkkkkkk!!!!!
          </p>
        </article>
      </section>
    </>
  );
}
