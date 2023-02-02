import { PrismaClient } from '@prisma/client'
import { sanitizeData } from '../../../../../helpers/functions/functions'

const prisma = new PrismaClient();
const allowedActionStatus = [
    'add',
    'remove',
    'update'
]

export default async function  handler(request , response) {
  const { tab , action } = request.query

  if (request.method !== 'POST') {
    response.status(405).send({ message: 'Only POST requests allowed' ,action })
    return
  }

   if (!allowedActionStatus.includes(action)) 
       return response.status(405).json({message: 'Invalid Action => ' + action , action})

    const data = await sanitizeData(request.body , 'form');
    let savedData;

  if (tab === 'all')
     savedData = await prisma.Employees.create({ data : data })
   else if (tab === 'agents')
     savedData = await prisma.Agents.create({ data : data })




    return response.status(200).json({ tab , action , savedData })
}