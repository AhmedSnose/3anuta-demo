import Button from '@mui/material/Button';
import GetIconByName from "../others/GetIconByName";


export default function ActionButton({ className , type  , text , onClick , disabled = false , color}) {

  if (type === 'add') {
    return  <span  onClick={onClick} className={`${className} cursor-pointer bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold pr-2 text-xs rounded inline-flex items-center`}>
               <GetIconByName title={text} iconName={'add'} />
                <span>{(type === 'add' && typeof text === 'undefined' ) ? 'Add' : text } </span>
                {disabled && <span> Button Is Disabled Pls handle it</span> }
            </span>
  } else if (type === 'back') {
    return  <span  onClick={onClick} className={`${className} cursor-pointer bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold pr-2 text-xs rounded inline-flex items-center`}>
               <GetIconByName title={text} iconName={'back'} />
                <span>{(type === 'back' && typeof text === 'undefined' ) ? 'back' : text } </span>
                {disabled && <span> Button Is Disabled Pls handle it</span> }
            </span>
  }
  

}
