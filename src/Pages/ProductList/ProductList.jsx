import {DataGrid} from '@mui/x-data-grid';
import {DeleteOutline} from '@mui/icons-material';
import { ProductRows } from '../../data';
import styled from 'styled-components';
import { useState } from 'react';
import { useContext } from 'react';
import {Context} from '../../Context';
import { useNavigate } from 'react-router-dom';
import {mobile} from '../../Responsive';

const Container = styled.div`
flex : 4;

${mobile({
  height : '90vh',
  marginTop : '10px'
})}
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
 const {setProduct} = useContext(Context);

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'product', headerName: 'Product', width: 200 , renderCell : (params)=>{
        return(
            <User>
               <Image src='https://i.ibb.co/4JfQQKQ/dummy-product.png' alt=''/>
               <UserName>{params.row.Productname}</UserName>
            </User>
        )
    } },
   
    {
      field: 'stock',
      headerName: 'Stock',
      width: 200,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
    },
    {
        field : 'price',
        headerName : 'Price',
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
                   onClick={()=>deleteItem(params.row)}
                   style={{color:'red', cursor:'pointer'}}/>
                </Action>
            )
        }
    }
  ];

const [items , setItems] = useState(ProductRows);
const navigate = useNavigate();

const editItem=(row)=>{
  setProduct(row);
  navigate(`/products/${row.id}`)
}

const deleteItem=(row)=>{
 return setItems(items.filter((item)=>{
    return item.id !== row.id
  }))
}

  return(
      <Container>
       <DataGrid
       style={{fontSize:'17px'}}
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