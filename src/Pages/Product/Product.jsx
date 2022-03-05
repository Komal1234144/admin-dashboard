import { Publish } from '@mui/icons-material';
import Chart from '../../Components/Chart/Chart';
import { chartProductData } from '../../data';
import * as styled from './Product.styled';
import { useNavigate } from 'react-router-dom';
//placeholder={`${product.Productname}`}
const Product = () =>{
//const {product} = useContext(Context);
const navigate = useNavigate();

    return(
     <styled.Container>
       <styled.Head>
         <styled.Title>Product</styled.Title>
         <styled.Button onClick={()=>{navigate('/new-product')}}>Create</styled.Button>
       </styled.Head>
       <styled.Top>
         <styled.Left>
           <Chart  data={chartProductData} datakeyXaxis={'name'} datakeyLine={'sales'} title={'Sales'}/>
         </styled.Left>
         <styled.Right>
           <styled.RightTop>
             <styled.Image src='https://i.ibb.co/4JfQQKQ/dummy-product.png' alt=''/>
             <styled.ProductTitle>product-123</styled.ProductTitle>
           </styled.RightTop>
           <styled.RightBottom>
             <styled.Info>
               <styled.Key>id :</styled.Key>
               <styled.Property>123</styled.Property>
             </styled.Info>
             <styled.Info>
               <styled.Key>sales :</styled.Key>
               <styled.Property>XXXX</styled.Property>
             </styled.Info>
             <styled.Info>
               <styled.Key>active :</styled.Key>
               <styled.Property>yes</styled.Property>
             </styled.Info>
             <styled.Info>
               <styled.Key>In Stock :</styled.Key>
               <styled.Property>yes</styled.Property>
             </styled.Info>
           </styled.RightBottom>
         </styled.Right>
       </styled.Top>
       <styled.Bottom>
          <styled.BottomLeft> 
          <styled.Label>Product Name</styled.Label>
          <styled.Input />
          <styled.Label>In Stock</styled.Label>
          <styled.Select>
            <styled.Option>Yes</styled.Option>
            <styled.Option>No</styled.Option>
          </styled.Select> 
          <styled.Label>Active</styled.Label>
          <styled.Select>
            <styled.Option>Yes</styled.Option>
            <styled.Option>No</styled.Option>
          </styled.Select>
          </styled.BottomLeft>
          <styled.BottomRight>
          <styled.InnerDiv>
          <styled.UploadImage src='https://i.ibb.co/4JfQQKQ/dummy-product.png' alt=''/>
          <styled.Label htmlFor='file'>
            <Publish sx={{fontSize:'50px', cursor : 'pointer'}}/>
          </styled.Label>
          <styled.Input id='file' type='file' style={{display:'none'}}/>
          </styled.InnerDiv>
            <styled.UpdateButton>Update</styled.UpdateButton>
          </styled.BottomRight>   
       </styled.Bottom>
     </styled.Container>
    )
}

export default Product;