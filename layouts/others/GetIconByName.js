import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import ScheduleSendOutlinedIcon from '@mui/icons-material/ScheduleSendOutlined';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ReplyIcon from '@mui/icons-material/Reply';
import PanToolIcon from '@mui/icons-material/PanTool';

import { IconButton, Tooltip } from '@mui/material';


export default function GetIconByName( {iconName , title , className , onClick} ) {
return ( 
    <Tooltip title={title ?? ' '}>
      <IconButton onClick={onClick}>
        {
          iconName === 'pencil' && <EditOutlinedIcon className={`${className} text-gray-700`} />

         ||

          iconName === 'send' && <ScheduleSendOutlinedIcon className={`${className} text-blue-400`} />

        ||

        iconName === 'add' && <AddCircleOutlineIcon className={className} />

        ||

        iconName === 'suspend' && <PanToolIcon className={`${className} text-red-500`} />

        ||

        iconName === 'back' && <ReplyIcon className={className} />

        ||

        !iconName && <ErrorOutlineOutlinedIcon className='m-3' />
        }
      </IconButton>
    </Tooltip>
  )

}
