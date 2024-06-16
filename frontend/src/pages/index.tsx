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
      <h1>{data?.message}</h1>
    </>
  );
}
