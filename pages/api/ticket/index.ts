import { NextApiRequest, NextApiResponse } from "next";
import {  getAllTickets } from "prisma/ticket";

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
    const tickets = await getAllTickets()
    return  tickets ? res.json(tickets) : res.status(400).json( {message: 'Internal Server Error'} )
}
