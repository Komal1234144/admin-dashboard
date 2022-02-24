import styled from 'styled-components'
import {mobile} from '../../../Responsive';

export const Container = styled.div`
 flex : 2;
 display: flex;
 margin-left: 20px;
 padding : 10px 15px;
 flex-direction: column;
 box-shadow: 3px 5px 16px -1px rgba(0,0,0,0.4);
-webkit-box-shadow: 3px 5px 16px -1px rgba(0,0,0,0.4); 

${mobile({
   maxWidth : '100vw',
   margin : '10px 2px'
})}
`
export const Title = styled.p`
  font-size : clamp(20px , 1.8vw , 30px);
  text-align: left;
  font-weight: bold;
  letter-spacing : -1px;
  margin : 10px 0;
`

export const Table = styled.table`
${mobile({
  fontSize : '12px'
})}
`

export const TableRow = styled.tbody`

`

export const TableHeading = styled.th`
  font-size: clamp(15px , 1.5vw , 25px);
  font-weight: bold;
  text-align: left;
  padding-bottom: 10px;
`

export const Image = styled.img`
 width : clamp(30px , 5vw , 40px);
 height : clamp(30px , 5vw , 40px);
 border-radius: 50%;
 border : 1px solid black;
 object-fit: contain;
`

export const Customer = styled.p`
 margin-left: 10px;

 ${mobile({
  fontSize : '15px'
})}
`

export const TableImage = styled.tr`
  font-size: clamp(15px , 1.2vw , 25px);
  font-weight: bold;
  display : flex;
  align-items: center;
`

export const TableData = styled.td``

export const Button = styled.button`
 display: flex;
 align-items: center;
 justify-content: center;
 height: 30px;
 width : 70px;
 border-radius: 10px;
 border : none;
 background-color: ${(props)=>props.type==='approved'?
                    '#9ee6b0' : props.type==='declined' ?
                    '#ffd6df' : '#e3c9e3'};

 color : ${(props)=>props.type==='approved' ? 
          '#2ca03d' : props.type==='declined' ? 
          '#ff476f' : '#ba78ba' };                 
`