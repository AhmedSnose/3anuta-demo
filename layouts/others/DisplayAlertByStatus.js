export default function DisplayAlertByStatus({children , color , className}) {
  
     /*
          1- orange
          2- red
          3- teal (success)
          4- blue
     */
    
  return color === 'orange' ? (
      <div className={` ${className} bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4`}>
          <strong className="font-bold">{children} !</strong>
     </div>
  ) : (
     <div className={`${className} bg-teal-100 border-l-4 border-teal-500 text-teal-700 p-4`}>
          <strong className="font-bold">{children} !</strong>
     </div>
  )
}
