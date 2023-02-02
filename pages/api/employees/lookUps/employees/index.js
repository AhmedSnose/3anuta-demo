import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();


export default async function  handler(request , response) {

  const { searchValue } = request.query



  if (request.method !== 'GET') {
      response.status(405).json({message: 'Invalid Method => ' + request.method})
    }
    

    if (!searchValue) {
        response.status(404).json({message: 'searchValue not founded' , employees:[]})
    }


    let allResult = []
    const employeesArabicName = await prisma.Employees.findMany({
        where : {
            arabicName : {
                contains : searchValue
            }
        },
        select: {
            id: true,
            arabicName: true,
            englishName : true
        }
    })

    const employeesEnglishName = await prisma.Employees.findMany({
        where : {
            englishName : {
                contains : searchValue
            }
        },
        select: {
            id: true,
            arabicName: true,
            englishName : true
        }
    })

    allResult = employeesArabicName.concat(employeesEnglishName)

    for (let i = 0; i < allResult.length; i++) {

        allResult[i].lable = (allResult[i].arabicName ?? 'Arabic Name') + ' - ' + (allResult[i].englishName ?? 'English Name')
        delete allResult[i].arabicName
        delete allResult[i].englishName

    }


    response.status(200).json({ message:`Successfully Fetched`,  employees:allResult })

  
}