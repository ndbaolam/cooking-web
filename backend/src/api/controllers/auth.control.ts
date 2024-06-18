import { Request, Response } from "express"

//[POST] /api/auth/register
export const Register = async (req: Request, res: Response) => {
  console.log(req.body);

  res.status(200).json({
    message: 'OK'
  });
}