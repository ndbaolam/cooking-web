import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

interface CustomJwtPayload {
  sub: string;
  email: string;
  userName: string;
}

const createComment = async (dataTranfer: any): Promise<void> => {
  try {
    const token = Cookies.get('ff_token');
    if (token) {
      const decode = jwtDecode<CustomJwtPayload>(token || '');

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category/comment`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          content: dataTranfer.content,
          categoryId: dataTranfer.categoryId,
          email: decode.email
        })
      });

      const result = await response.json();

      location.reload();
      return result;
    } else {
      alert('Sign in first!');
    }
  } catch (error) {
    throw error;
  }
}

export default createComment;