export default function handler(request , response) {

  if (request.method !== 'GET') {
    response.status(500).json({message: 'The Method Is Not Correct Method => ' + request.method})
  }
  console.log(request.query);
    response.status(200).json({ name: 'employees' })

  }