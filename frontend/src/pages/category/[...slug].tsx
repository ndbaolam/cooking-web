import { createContext, useContext, useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import type { FormProps } from 'antd';
import { Button, ConfigProvider, Form, Input } from 'antd';
import createComment from '@/functions/createComment';

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

const UserContext = createContext<any>({});

const FormComment: React.FC = () => {
  const data = useContext(UserContext);
  const { TextArea } = Input;

  const onFinish: FormProps['onFinish'] = async (values) => {
    const dataTransfer = {
      content: values.content,
      categoryId: data.category.id,
    }

    createComment(dataTransfer);    
  };

  const onFinishFailed: FormProps['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };  

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "black",
          fontSize: 16,
          colorText: "black"
        },
      }}
    >
      <Form
        name="basic"
        style={{ maxWidth: 600, display: "flex", gap: 10 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="content"
        >
          <TextArea rows={1} />
        </Form.Item>

        <Form.Item >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </ConfigProvider>
  );
}


const Category: React.FC<any> = ({ data, slug }) => {
  // const [category, setCategory] = useState<any>(data);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category/${slug}`);
  //     const data = await response.json();       
  //     setCategory(data);
  //   }

  //   fetchData();
  // }, [category]);

  //console.log(data);

  return (
    <>
      {data && (
        <UserContext.Provider value={data}>
        <div className="flex max-w-6xl mx-auto bg-white w-full h-screen p-10 gap-8">
          <img src={data?.thumbnail} alt="image" className='w-2/3 rounded-lg' />
          <div className="w-1/3 float-right flex flex-col gap-8">
            <div id="ava" className="flex items-center justify-normal gap-6 h-1/10">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <h2 className='text-2xl font-bold'>{data?.userUpPost?.userName}</h2>
            </div>
            <div id="desc" className="text-xl overflow-y-scroll h-1/4">
              {data ? data?.category?.description: ''}
            </div>
            <div id="comment" className="border-1 border-black relative bottom-0 h-1/2">
              <ul className="list-none p-2 overflow-y-scroll h-2/3">
                {
                  data?.comment?.map((item: any, index: number) => (
                    <li key={index} className='flex gap-4 items-center justify-normal rounded-lg bg-slate-200 p-2 mb-2'>
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <div>
                        <h2 className='text-xl font-bold'>{item?.userName}</h2>
                        <h2 className='text-xl'>{item?.content}</h2>
                      </div>
                    </li>
                  ))
                }
              </ul>
              <div className='flex items-center justify-center absolute bottom-0 px-5 w-full h-1/3'>
                <FormComment />
              </div>
            </div>
          </div>
        </div>
      </UserContext.Provider>
      )}      
    </>
  )
}

export default Category;