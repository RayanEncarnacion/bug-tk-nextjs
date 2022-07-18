import { NextApiRequest, NextApiResponse } from "next";
import { createTicket } from "prisma/ticket";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    try {

        if(req.method === 'POST'){
            const { title, description, type, expectedClosingDate, createdBy } = req.body;
         
            if( !Date.parse(expectedClosingDate) )  throw new Error('Expected closing date to be a valid date');

            const ticket = await createTicket({ title, description, type, expectedClosingDate: new Date(expectedClosingDate), createdBy })

            res.json(ticket)
        } 

        res.status(400).json( { message: "HTTP method is not allowed" } )
        
    } catch (error: any) {
        res.status(400).json({ message: error?.message || "The ticket could not be created", error })
    }
}
