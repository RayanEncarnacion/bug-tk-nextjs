import { prisma } from ".";
const bcrypt = require('bcrypt');

type Position =  "DEVELOPER" | 'LEAD'

type Role = "DEVELOPER" |"LEAD" | "ADMIN"

// type TicketState = "OPEN" | "PROGRESS" | "CLOSED"
  
interface UserData {
    firstName: string 
    lastName: string
    email: string
    username: string
    position:  Position
    role: Role
    password: string
}

export const getAllUsers = async () => {
    const users = await prisma.user.findMany()
    return users;
}

export const getUserByID = async (id: string) => {
    const user = await prisma.user.findUnique({
        where: { id } 
    })
    return user;
}

export const getUserByEmail = async (email: string) => {
    const user = await prisma.user.findUnique({
        where: { email } 
    })
    return user;
}

export const createUser = async ({ firstName, lastName, email, username, password, position, role }: UserData) => {
    const passwordSalt: string = bcrypt.genSaltSync(10);
    const passwordHash: string = bcrypt.hashSync(password, passwordSalt);
    const user = await prisma.user.create({
        data: {
            firstName, 
            lastName, 
            email, 
            username, 
            position, 
            role,
            passwordHash,
            passwordSalt
        }
    })
    return user;
}

