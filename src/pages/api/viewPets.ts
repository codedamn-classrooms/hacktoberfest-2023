// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from "@/db/database"

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    // Show all the pets that are available in the table
    const result = await db.selectFrom('Pets')


    res.status(200).json({ result })
}
