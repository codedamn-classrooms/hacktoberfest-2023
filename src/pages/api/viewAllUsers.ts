
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '@/db/database'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    const response = await db.selectFrom('User').selectAll().execute();



    res.status(200).json({ response })
}
