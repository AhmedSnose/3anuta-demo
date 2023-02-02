import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Link from 'next/link'
import SellIcon from '@mui/icons-material/Sell';
import WarehouseIcon from '@mui/icons-material/Warehouse';

export const mainListItems = (
  <>
  <Link href="/">
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
  </Link>

  <Link href="/employees/all">
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Employees" />
    </ListItemButton>
  </Link>



    <ListItemButton disabled>
      <ListItemIcon>
        <SellIcon />
      </ListItemIcon>
      <ListItemText primary="Products" />
    </ListItemButton>


    <ListItemButton disabled>
      <ListItemIcon>
        <TableRestaurantIcon />
      </ListItemIcon>
      <ListItemText primary="My Product Portfolio" />
    </ListItemButton>
    

    <ListItemButton disabled>
      <ListItemIcon>
        <WarehouseIcon />
      </ListItemIcon>
      <ListItemText primary="Warehouse" />
    </ListItemButton>
  </>
);

export const secondaryListItems = (
  <>
    {/* <ListSubheader className='text-gray-400 text-left' component="div" inset>
       OPERATIONS
    </ListSubheader> */}

    {/* <ListItemButton disabled>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Retailer section (Create Order) work flow" />
      </ListItemButton> */}

    {/* <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton> */}
  
  </>
);
