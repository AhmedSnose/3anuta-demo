import { PrismaClient } from '@prisma/client'
import { sanitizeData } from '../../../../../helpers/functions/functions'
const prisma = new PrismaClient();


export default async function index(request , response) {
  const { id } = request.query
  
  if (request.method !== 'PUT') {
        response.status(405).json({message: 'Invalid Method => ' + request.method , data:request.body})
    }
    
    const data = await sanitizeData(request.body , 'form');


    const employee = await prisma.Employees.update({
      where : {
        id : +id
      },
      data : data
    })


    response.status(200).json({ message:`Employee Updated Successfully`, employee })
  }
