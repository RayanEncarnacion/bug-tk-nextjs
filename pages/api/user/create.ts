import { NextApiRequest, NextApiResponse } from "next";
import { createUser } from "prisma/user";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    try {
        const { firstName, lastName, email, username, position, role, password } = req.body;
    
        const user = await createUser({
            firstName,
            lastName,
            email,
            username,
            password,
            position,
            role     
        })


        res.json(user)
        
    } catch (error) {
        res.status(400).send(error)
    }


}
