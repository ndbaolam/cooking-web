import Cookies from 'js-cookie';

const SignUpFunction = async (values: any) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/sign-up`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(values)
  });

  if(response?.ok) {
    const data = await response.json();
    console.log('>>>', data);
    Cookies.set('ff_user', data?.dataUser?.tokenUser, { 
      expires: 1/48 //30 minutes
    });
  } else {
    console.log('Something wrong!');
  }
}

export default SignUpFunction;