import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();


export default async function  handler(request , response) {

  const { searchValue } = request.query



  if (request.method !== 'GET') {
      response.status(405).json({message: 'Invalid Method => ' + request.method})
    }
    
    const result = await prisma.Employees.findMany({
        select: {
            id: true,
            arabicName: true,
            englishName : true
        }
    })

    for (let i = 0; i < result.length; i++) {

        result[i].lable = (result[i].arabicName ?? 'Arabic Name') + ' - ' + (result[i].englishName ?? 'English Name')
        delete result[i].arabicName
        delete result[i].englishName

    }

 


    response.status(200).json({ message:`Successfully Fetched`,  employees : result })

  
}