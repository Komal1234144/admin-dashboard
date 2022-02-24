import styled from 'styled-components';
import {mobile} from '../../Responsive';
export const Container = styled.div`
width : 100%;
padding : 20px;
display : flex;
justify-content: space-between;

${mobile({
  flexDirection : 'column',
  width : '100vw',
  margin : 'auto',
})}
`

export const Wrapper = styled.div`
  flex : 1; 
  padding :  10px; 
  margin : 0 10px;
  box-sizing: border-box;
  box-shadow: 3px 5px 16px -1px rgba(0,0,0,0.4);
-webkit-box-shadow: 3px 5px 16px -1px rgba(0,0,0,0.4);

${mobile({
  flex : 0,
  margin : '10px '
})}
`

export const Title = styled.p`
font-size : 20px;
font-weight: bold;
margin : 0;

`

export const Money = styled.div`
margin : 0;
display : flex;
align-items: center;
font-size: 20px;

`
export const Amount = styled.p`
font-size: 25px;
font-weight: bolder;
`

export const Rate = styled.p`
margin : 0 15
px;
`

export const Desc = styled.p`
margin : 0;
`

