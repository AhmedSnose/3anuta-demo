export default function HeaderInfoLayOut({children , color , className , title}) {
  return (
    <div className={`${className ?? ''} flex justify-between items-center p-2 m-2`} style={{'background' : color ?? '#015d5e'}}>
      <span className="text-left mr-auto text-white uppercase">{title ?? ''}</span>
      <div className="space-x-2">  
        {children}
      </div>
    </div>
  )
}
