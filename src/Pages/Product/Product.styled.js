import styled from 'styled-components';
import {mobile} from '../../Responsive';

export const Container = styled.div`
flex : 4;
margin : 20px 30px;

${mobile({
    width : '100vw',
    margin : '20px 10px'
})}
`

export const Head = styled.div`
display : flex;
justify-content: space-between;
`

export const Title = styled.p`
font-size: clamp(25px , 2vw , 30px);
font-weight: bolder;
margin : 0;
color : darkblue;
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
`

export const Top = styled.div`
display: flex;

${mobile({
    flexDirection : 'column'
})}
`

export const Left = styled.div`
flex : 1;
margin : 20px 0;
margin-right : 20px;
padding : 10px;
box-shadow: 3px 5px 16px -1px rgba(0,0,0,0.4);
-webkit-box-shadow: 3px 5px 16px -1px rgba(0,0,0,0.4);

${mobile({
    marginRight : 0,
})}
`

export const Right = styled.div`
flex : 1;
margin : 20px 0;
padding : 10px;
box-shadow: 3px 5px 16px -1px rgba(0,0,0,0.4);
-webkit-box-shadow: 3px 5px 16px -1px rgba(0,0,0,0.4);
`

export const RightTop = styled.div`
display : flex;
align-items: center;
`

export const Image = styled.img`
width : 40px;
height : 40px;
border-radius: 50%;
`

export const ProductTitle = styled.p`
font-size : clamp(20px , 1.5vw , 30px);
font-weight: bolder;
margin : 0;
margin-left : 10px;
`

export const RightBottom = styled.div`
display : flex;
flex-direction: column;
margin-top: 10px;;
`

export const Info = styled.div`
display : flex;
align-items: center;
margin : 5px 0;
`

export const Key = styled.p`
font-size : clamp(15px , 1vw , 25px);
font-weight: bold;
width : 20%;
margin : 0;
`

export const Property = styled.p`
font-size : clamp(15px , 1vw , 25px);
margin : 0;
`

export const Bottom = styled.div`
display: flex;
justify-content: space-between;
padding : 10px;
box-shadow: 3px 5px 16px -1px rgba(0,0,0,0.4);
-webkit-box-shadow: 3px 5px 16px -1px rgba(0,0,0,0.4);

${mobile({
    flexDirection : 'column'
})}
`

export const BottomLeft = styled.div`
display : flex ;
flex-direction: column;
`

export const Label = styled.label`
color : grey;
font-weight: bolder;
`

export const Input = styled.input`
border : none;
border-bottom: 2px solid grey;
font-size: 15px;
margin : 15px 0;
`

export const Select = styled.select`
padding : 5px;
margin : 10px 0;
`
export const Option = styled.option``

export const BottomRight = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;

${mobile({
 marginTop : '10px',
 flexDirection : 'row',
 alignItems : 'flex-end',
})}
`

export const UploadImage = styled.img`
width : 80px;
height: 80px;
border-radius: 10px;
object-fit: cover;
margin-right: 20px;
`

export const InnerDiv = styled.div`
display: flex;
align-items: flex-end;
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
   width : '30%',
   marginRight : 0 
})}
`