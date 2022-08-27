import type { NextApiRequest, NextApiResponse } from 'next'

interface Data {
  name: string
}

export default function handler(_: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ name: 'John Doe' })
}
