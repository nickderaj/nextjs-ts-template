// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import type { ResponseData } from 'types/api/ResponseTypes';

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  res.status(200).json({ id: 1, type: 'example', data: [] });
}
