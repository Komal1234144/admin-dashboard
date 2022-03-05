import {DataGrid} from '@mui/x-data-grid';
import {DeleteOutline} from '@mui/icons-material';
import { rows } from '../data';
import styled from 'styled-components';
import { useState } from 'react';
import { useContext } from 'react';
import {Context} from '../Context';
import { useNavigate } from 'react-router-dom';
import { mobile } from '../Responsive';
import '../Plain.css';

const Container = styled.div`
flex : 4;
height : calc(100vh-60px);

${mobile({
  height : '90vh',
  margin : 0,
 // border : '1px solid red'
})}

p{
  display : none;

  @media(max-width:1250px){
    display : block;
    font-size: clamp(15px , 2vw , 25px);
    text-align: center;
    color : green;
  }
}
`
const User = styled.div`
display: flex;
width : 100%;
height: 100%;
padding : 10px;
justify-content: space-around;
align-items: center;
`

const UserName = styled.p`
`

const Image = styled.img`
 width : clamp(30px , 5vw , 40px);
 height : clamp(30px , 5vw , 40px);
 border-radius: 50%;
 object-fit: cover;
`
const Action = styled.div`
width : 100%;
display: flex;
justify-content: space-between;
padding : 10px;
`
const Button = styled.button`
width : 50px;
padding : 3px;
background-color: green;
color : white;
border : none;
border-radius: 10px;
cursor : pointer;
`

const UserList = () => {


  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'user', headerName: 'User', width: 200 , renderCell : (params)=>{
        return(
            <User>
               <Image src='https://i.ibb.co/ygQwmsV/black-user.webp' alt=''/>
               <UserName>{params.row.username}</UserName>
            </User>
        )
    } },
   
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
    },
    {
        field : 'transaction',
        headerName : 'Transaction',
        width : 150
    },
    {
        field : 'action',
        headerName : 'Action',
        width : 150,
        renderCell : (params)=>{
            return(
                <Action>
                
                <Button onClick={()=>editItem(params.row)}>
                   Edit
                   </Button>
                     
                   <DeleteOutline
                   onClick={()=>deleteItem(params.row.id)}
                   style={{color:'red', cursor:'pointer'}}/>
                </Action>
            )
        }
    }
  ];

const [items , setItems] = useState(rows);
const {setUser} = useContext(Context);
const navigate = useNavigate();
const editItem=(row)=>{
  setUser(row)
  navigate(`/user/${row.id}`)
}

const deleteItem=(id)=>{
 return setItems(items.filter((item)=>{
    return item.id !== id
  }))
}

  return(
      <Container>
      <p>Please scroll horizontally to see the full table</p>
      <DataGrid
       class='datagrid'
      style={{fontSize:'17px' }}
      rows={items}
      columns={columns}
      pageSize={8}
      disableSelectionOnClick
      rowsPerPageOptions={[5]}
      checkboxSelection
      />
      </Container>
  )
};

export default UserList;


