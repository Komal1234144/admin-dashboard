import React, { useContext } from 'react';
import {LineStyle} from '@mui/icons-material'
import {BarChart} from '@mui/icons-material';
import {TrendingUp} from '@mui/icons-material';
import {Person , Inventory , AttachMoney , Assessment} from '@mui/icons-material';
import {Mail , Forum, Chat } from '@mui/icons-material';
import {ManageAccounts} from '@mui/icons-material';
import * as styled from './SideBar.styled';
import { Context } from '../../Context';
import './sidebar.css';

const SideBar = () => {
  const {open} = useContext(Context);

  return (
   <styled.Container className={open ? 'open' : 'close'}>
     <styled.wrapper>
       <styled.Title>Dashboard</styled.Title>
       <styled.ul>
         <styled.li>
           <LineStyle className="side-bar-icons"/>
           <a href='/'>Home</a>
         </styled.li>
         <styled.li>
           <BarChart className="side-bar-icons"/>
           Analytics
         </styled.li>
         <styled.li>
           <TrendingUp className="side-bar-icons"/>
           Sales
         </styled.li>
       </styled.ul>
     </styled.wrapper>

     <styled.wrapper>
       <styled.Title>Quick menu</styled.Title>
       <styled.ul>
         <styled.li>
           <Person className="side-bar-icons"/>
           <a href='/user'>Users</a>
         </styled.li>
         <styled.li>
           <Inventory className="side-bar-icons"/>
            <a href='/products'>Products</a>
         </styled.li>
         <styled.li>
         <AttachMoney className="side-bar-icons"/>
          Transactions
        </styled.li>
       <styled.li>
       <Assessment className="side-bar-icons"/>
        Reports
     </styled.li>
       </styled.ul>
     </styled.wrapper>

     <styled.wrapper>
       <styled.Title>Notifications</styled.Title>
       <styled.ul>
         <styled.li>
           <Mail className="side-bar-icons"/>
          Mail
         </styled.li>
         <styled.li>
         <Forum className="side-bar-icons"/>
          Feedback
       </styled.li>
       <styled.li>
       <Chat className="side-bar-icons"/>
       Messages
     </styled.li>
       </styled.ul>
     </styled.wrapper>

     <styled.wrapper>
       <styled.Title>Staff</styled.Title>
       <styled.ul>
         <styled.li>
          <ManageAccounts className="side-bar-icons"/>
           Manage
         </styled.li>
         <styled.li>
         <BarChart className="side-bar-icons"/>
          Analytics
       </styled.li>
       <styled.li>
       <Assessment className="side-bar-icons"/>
        Reports
     </styled.li>
       </styled.ul>
     </styled.wrapper>
   
   </styled.Container>

  )
};

export default SideBar;
