import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();


export default async function  handler(request , response) {

  const { tab } = request.query
  const config = {
    skip: (request.query?.pageSize && +request.query?.currentPage) ? (+request.query?.pageSize * +request.query?.currentPage - +request.query?.pageSize) : 0,
    take: (+request.query?.pageSize) ? (+request.query?.pageSize) : +process.env.pageSize
  }


  if (request.method !== 'GET') {
    response.status(405).json({message: 'Invalid Method => ' + request.method})
    }
    
  if (tab == 'all') {
    const transactionResult = await prisma.$transaction([
            prisma.Employees.findMany(config),
            prisma.Employees.count(),
        ])

    response.status(200).json({ searchByTab: tab , message:`${tab} Successfully Fetched`, employees: transactionResult[0] , metaData : {
      totalCount : transactionResult[1] ?? 0,
      currentPage: request.query?.currentPage ?? 1,
      pageSize : request.query?.pageSize ?? +process.env.pageSize,
      totalPages: Math.ceil(transactionResult[1] / (request.query?.pageSize ?? process.env.pageSize)),
      config:config
    }})
  }


  else if (tab == 'agents') {

    const transactionResult = await prisma.$transaction([
            prisma.Agents.findMany(config),
            prisma.Agents.count(),
        ])

    response.status(200).json({ searchByTab: tab , message:`${tab} Successfully Fetched`, agents: transactionResult[0] , metaData : {
      totalCount : transactionResult[1] ?? 0,
      currentPage: request.query?.currentPage ?? 1,
      pageSize : request.query?.pageSize ?? +process.env.pageSize,
      totalPages: Math.ceil(transactionResult[1] / (request.query?.pageSize ?? process.env.pageSize)),
      config:config
    }})
  
  }
  else if (tab == 'suspendedEmployees') {

    const transactionResult = await prisma.$transaction([
      prisma.Employees.findMany({...config,
        where : {
          isActive : false
        }
      }),
            prisma.Employees.count({
              where : {
                isActive : false
              }
            }),
        ])

    response.status(200).json({ searchByTab: tab , message:`${tab} Successfully Fetched`, employees: transactionResult[0] , metaData : {
      totalCount : transactionResult[1] ?? 0,
      currentPage: request.query?.currentPage ?? 1,
      pageSize : request.query?.pageSize ?? +process.env.pageSize,
      totalPages: Math.ceil(transactionResult[1] / (request.query?.pageSize ?? process.env.pageSize)),
      config:config
    }})
    
  }
  else if (tab == 'suspendedAgents') {

    const transactionResult = await prisma.$transaction([
      prisma.Agents.findMany({...config,
        where : {
          isActive : false
        }
      }),
            prisma.Agents.count({
              where : {
                isActive : false
              }
            }),
        ])

    response.status(200).json({ searchByTab: tab , message:`${tab} Successfully Fetched`, agents: transactionResult[0] , metaData : {
      totalCount : transactionResult[1] ?? 0,
      currentPage: request.query?.currentPage ?? 1,
      pageSize : request.query?.pageSize ?? +process.env.pageSize,
      totalPages: Math.ceil(transactionResult[1] / (request.query?.pageSize ?? process.env.pageSize)),
      config:config
    }})
  
  }
  else 
    response.status(400).json({ searchByTab: tab , message:`${tab} Not Valid`, employees: [] })
  
}