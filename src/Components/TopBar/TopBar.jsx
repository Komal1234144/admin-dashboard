import {Notifications } from '@mui/icons-material'
import {Badge} from '@mui/material';
import {Language, Menu} from '@mui/icons-material';
import {Settings}from '@mui/icons-material';
import * as styled from './TopBar.styled';
import '../../Plain.css';
import { useContext, useState } from 'react';
import { Context } from '../../Context';

const TopBar = () => {
  const {open , setOpen} = useContext(Context);
  
  const handleMenuClick=()=>{
         setOpen(!open)
         
  }
  console.log(open)
  return (
    <styled.Container>
     <styled.MenuBar onClick={handleMenuClick}>
       <Menu/>
     </styled.MenuBar>   
      <styled.Logo>
         Admin Dashboard
      </styled.Logo>
      <styled.Icons>
        <Badge className='badge-icon' badgeContent={4} color="primary">
           <Notifications className='icon'/>
        </Badge>
        <Badge className='badge-icon' badgeContent={4} color="primary">
         <Language className='icon'/>
        </Badge>
        <Badge className='badge-icon' color="primary">
         <Settings className='icon'/>
        </Badge>
        
         <styled.Image src='https://i.ibb.co/Qrhn7SX/user-icon.jpg' alt=''/>
      </styled.Icons>
    </styled.Container>
  )
};

export default TopBar;
