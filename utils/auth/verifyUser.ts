import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "pages/api/auth/[...nextauth]";

const verifyUser = async (req: NextApiRequest, res:NextApiResponse) => {

    const isVerified = await unstable_getServerSession(req, res, authOptions);

    return Boolean(isVerified);
}


export default verifyUser;