import styled from 'styled-components';
import {mobile} from '../../Responsive';

export const Container = styled.div`
flex : 4;
margin : 20px 30px;

${mobile({
 maxWidth : '100vw',
 margin : '20px 10px'
})}
`

export const Heading = styled.div`
width : 100%;
display : flex;
justify-content: space-between;
margin : 10px 0;
`

export const EditUser = styled.p`
font-size: clamp(20px , 2vw , 30px);
font-weight: bolder;
margin : 0;
`

export const Button = styled.button`
background-color: teal;
color : white;
border-radius: 10px;
border: none;
width : 80px;
font-size: 20px;
font-weight: 200;
cursor : pointer;

&>a{
  text-decoration : none;
  color : inherit
}
`

export const Main = styled.div`
display : flex;

${mobile({
  flexDirection  : 'column'
})}
`

export const Left = styled.div`
flex : 1;
box-shadow: 3px 5px 16px -1px rgba(0,0,0,0.4);
-webkit-box-shadow: 3px 5px 16px -1px rgba(0,0,0,0.4);
padding : 10px;
margin-right: 20px;

${mobile({
  margin : '10px auto',
  width : '100%',
})}
`

export const Top = styled.div`
display : flex;
align-items: center;
font-size : clamp(17px , 1.2vw , 23px);

&>p{
  font-size : clamp(25px , 0.5vw , 35px);
  font-weight: bold;
  letter-spacing: 1px;
  margin : 10px 0;
  margin-bottom: 15px;  
}
`

export const Info = styled.div`
display: flex;
flex-direction: column;
margin-left : 10px;
`

export const Image = styled.img`
 width : clamp(30px , 5vw , 40px);
 height : clamp(30px , 5vw , 40px);
 border-radius: 50%;
 object-fit: cover;
`

export const Name = styled.p`
margin : 0;
font-weight: bold;
`

export const Job = styled.p`
margin : 0;
color : grey;
`

export const Down = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
font-size: clamp(15px , 1.2vw , 20px);;
`

export const TextHead = styled.p`
 padding-left : 10px;
 color : grey;
 font-weight: bold;
 
`

export const Text = styled.div`
display: flex;
align-items: center;
margin : 10px;
`

export const Right = styled.div`
flex : 2;
padding : 10px;
box-shadow: 3px 5px 16px -1px rgba(0,0,0,0.4);
-webkit-box-shadow: 3px 5px 16px -1px rgba(0,0,0,0.4);

`
export const Wrapper = styled.div`
display : flex;
margin : 0;

${mobile({
  flexDirection : 'column'
})}
`
export const InnerLeft = styled.div`
flex : 2;
display: flex;
flex-direction: column;

${mobile({
  width : '90%'
})}
`
export const Label = styled.label``

export const Input = styled.input`
margin : 15px 0;
border : none;
border-bottom: 1px solid grey;
font-size: 15px;
color : grey;
width : 60%;

${mobile({
  width : '100%',
  margin : '10px 0'
})}
`

export const UploadImage = styled.img`
width : 80px;
height: 80px;
border-radius: 10px;
object-fit: cover;
margin-right: 20px;

${mobile({
  width : '50px',
  height : '50px'
})}
`

export const UpdateButton = styled.button`
border : none;
background-color: darkblue;
color : white;
border-radius: 10px;
width : 50%;
font-size: 15px;
height: 2em;
cursor : pointer;
margin-right: 20px;

${mobile({
  marginRight : 0,
  marginLeft : '20px'
})}
`
export const InnerRight = styled.div`
flex : 1;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-end;

${mobile({
  flexDirection : 'row',
 
})}
`
export const InnerDiv = styled.div`
display: flex;
align-items: flex-end;

${mobile({
  justifyContent :'flex-start',
 
})}
`