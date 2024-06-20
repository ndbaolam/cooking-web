import { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
 
export const getServerSideProps: GetServerSideProps = async (context) => {  
  const slug = context.params?.slug;
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category/${slug}`);
  const data = await response.json();  
  
  return {
    props: {
      data,
      slug
    }
  }
}

const Category: React.FC<any> = ({ data, slug }) => {  

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category/${slug}`);
  //     const data = await response.json();       
  //     setCategory(data);
  //   }

  //   fetchData();
  // }, [category]);

  console.log(data);

  return (
    <>
        <div className="flex max-w-6xl mx-auto bg-white w-full h-screen p-10 gap-8">
          <img src={data?.thumbnail} alt="image" className='w-2/3' />
          <div className="w-1/3 float-right flex flex-col gap-8">
            <div id="ava" className="flex items-center justify-between">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar> 
              <h2 className='text-xl font-medium'>User Name</h2>
            </div>
            <div id="desc" className="text-xl">
              {data.category.description}
            </div>
            <div id="comment" className="overflow-y-scroll border-1 border-solid">

            </div>        
          </div>
        </div>
    </>
  )
}

export default Category;