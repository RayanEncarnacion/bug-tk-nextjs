import { getAllUsers } from 'prisma/user';
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
    const users = await getAllUsers();

    if(!users) res.status(500).json({message: "Internal server error"});

    const securedUsersData = users.map(user => {
        const { id: userId, passwordHash, passwordSalt, createdAt, updatedAt, ...secureUserData } = user;
        return secureUserData;
    })

   res.json(securedUsersData)
}