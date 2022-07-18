import { prisma } from ".";

interface TicketData {
    title: string 
    description: string
    type: TicketType
    expectedClosingDate: Date
    createdBy:  string
}

type TicketType  = "FRONT" |"END" 

export const createTicket = async ({ title, description, type, expectedClosingDate, createdBy  }: TicketData) => {
    const ticket = await prisma.ticket.create({
        data: {
           title,
           description,
           type,
           expectedClosingDate,
           createdBy
        }
    })
    return ticket;
}


export const getAllTickets = async () => {
    const tickets = await prisma.ticket.findMany()
    return tickets;
}