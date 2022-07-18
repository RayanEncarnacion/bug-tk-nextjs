import NextAuth, { NextAuthOptions } from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";
import { getUserByEmail } from "prisma/user";
const bcrypt = require('bcrypt');


export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email", },
        password: {  label: "Password", type: "password" }
      },
      async authorize( credentials ) {
        const user = await getUserByEmail(credentials!.email);
        const validPassword = await bcrypt.compareSync(credentials!.password, user?.passwordHash)
        return validPassword ? user : null;
      }
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!
    })
  ]
}

export default NextAuth(authOptions)

