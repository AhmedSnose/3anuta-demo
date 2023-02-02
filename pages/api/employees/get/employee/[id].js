import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();


export default async function index(request , response) {
  const { id } = request.query
  
  if (request.method !== 'GET') {
    response.status(405).json({message: 'Invalid Method => ' + request.method})
    }
    
    const employee = await prisma.Employees.findMany({
      where : {
        id : +id
      }
    })


    response.status(200).json({ message:`Employee Successfully Fetched`, employee })
  }
