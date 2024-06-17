import Layout from '@/components/Layout';
import axios from 'axios';
import Head from 'next/head';

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
      <Head>
        <title>Flavor Fusion</title>
      </Head>
      <section className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12" id="home">
        <article className="sm:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center sm:text-5sl sm:text-left text-slate-900 dark:text-white">
            My <span className="text-indigo-700 dark:text-indigo-300">Flavor Fusion</span> Cooking Website
          </h2>
          <p className="max-w-md max-h-52 overflow-y-scroll text-xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
          Welcome to “Flavor Fusion”! Dive into a world where culinary 
          creativity meets vibrant tastes, bringing excitement back into your kitchen. 
          At Flavor Fusion, we celebrate the art of mixing global flavors, turning everyday 
          meals into extraordinary experiences. Whether you’re a seasoned home chef or a curious 
          foodie, our collection of innovative recipes, cooking tips, and flavor profiles is designed
           to inspire and elevate your cooking adventures. From fusion tacos that blend Asian and 
           Latin American spices to gourmet desserts that marry French and tropical influences, 
           our site promises a culinary journey like no other. Join us as we explore the endless
            possibilities of taste, making each dish a delightful fusion of cultures and creativity.
          </p>          
        </article>
        <img src="/images/cooking.jpg" alt="Image cooking" className="w-1/2" />
      </section>
      <hr className="mx-auto bg-black dark:bg-white w-1/2" />

      <section id="blog" className="p-6 my-12">
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
          Fucking Cooking!
        </h2>
        <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
          <li className="mx-auto w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl">
            <img src="" alt="image" className="w-1/2 mb-6" />
            <h3 className="text-3xl text-center text-slate-900 dark:text-white">
              Explore
            </h3>
          </li>
        </ul>
      </section>
      <hr className="mx-auto bg-black dark:bg-white w-1/2" />

      <section id="tutorials" className="p-6 my-12">
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
          Cooking food tutorials
        </h2>
      </section>
      <hr className="mx-auto bg-black dark:bg-white w-1/2" />

      <section id="contact" className="p-6 my-12">
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
          Contact Us
        </h2>
      </section>
      <hr className="mx-auto bg-black dark:bg-white w-1/2" />
    </>
  );
}
