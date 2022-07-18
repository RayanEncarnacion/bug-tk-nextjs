import { NextApiRequest, NextApiResponse } from "next";
import { getUserByID } from "prisma/user";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
    try {
        const { id } = req.query;

        if (typeof id === 'string') {
            const user = await getUserByID(id);
            if (!user) throw new Error();
            const { id: userId, passwordHash, passwordSalt, createdAt, updatedAt, ...secureUserData } = user;
            res.json(secureUserData)
        } 
            
        throw new Error();

    } catch (error) {
        res.status(404).send('User not found')
    }

}

