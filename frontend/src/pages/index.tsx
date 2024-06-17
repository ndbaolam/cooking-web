import Layout from '@/components/Layout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import SelectBox from '@/components/SelectBox';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

// export const getServerSideProps = async () => {
//   const data = await axios(`https://www.themealdb.com/api/json/v1/1/categories.php`);

//   return {
//     props: {
//       data: data?.data
//     }
//   }
// }

const Swipper: React.FC<any> = ({ categories }) => {
  return (
    <>
      <Carousel
        className="w-full"
      >
        <CarouselContent>
          {categories.map((item: any, index: number) => (
            <CarouselItem key={index} className='basis-1/5'>
              <div className="">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6 object-fill">
                    <img src={item?.strCategoryThumb} alt="img" className='w-full h-full' />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  )
}

const Home: React.FC<any> = ({}) => {  
  const [data, setData] = useState<any>();
  const [dataSelect, setDataSelect] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
      if(res.ok) {
        const result = await res.json();        

        const selectData: any = [];
        result?.categories.forEach((item: any) => {
          selectData.push({
            value: item.strCategory.toLowerCase(),
            label: item.strCategory
          });
        });

        setData(result);
        setDataSelect(selectData);
      } else {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
    }

    fetchData().catch(e => {
      console.error('An error occurred while fetching the data: ', e);
    })

  }, []);

  console.log(data);  

  return (
    <>
      <Head>
        <title>Flavor Fusion</title>
      </Head>
      <section className='flex flex-col items-center justify-center my-8'>
        <div className="rounded-2xl p-6 flex flex-row items-center transition-all duration-200 bg-cyan-100">
          <img src="/images/home.png" alt="Home page" className='h-2/3 w-2/3 float-right' />
          <div className="w-1/3 flex flex-col items-center justify-center my-auto">
            <p className='text-center font-bold text-4xl my-2'>Welcome to <br />“Flavor Fusion”! </p>

            <p className='text-center text-xl font-medium my-2'>Dive into a world where culinary creativity meets vibrant tastes, bringing excitement back into your kitchen. <br /></p>

            <p className='text-center text-xl font-medium my-2'>At Flavor Fusion, we celebrate the art of mixing global flavors, turning everyday meals into extraordinary experiences.</p>
            <img src="/images/line.png" alt="line" />
          </div>
        </div>
      </section>

      <section className='flex flex-col mt-6 gap-8 w-full' id="recipes">
        <div className="flex flex-row items-center justify-between gap-8">
          {/* <img src="/images/line-curve.png" alt="line" className='max-w-60'/> */}
          <h1 className="text-3xl font-bold">
            Recipes Categories
          </h1>                  
          <SelectBox title="Select Categories" dataSelect={dataSelect}/>
          {/* <img src="/images/line-curve.png" alt="line" className='max-w-60 rotate-180'/> */}
        </div>        
        <Swipper categories={data?.categories} />        
      </section>
    </>
  );
}

export default Home;