import styled from 'styled-components';
import {mobile} from '../../../Responsive';

export const Container = styled.div`
 flex : 1;
 display: flex;
 flex-direction: column;
 box-shadow: 3px 5px 16px -1px rgba(0,0,0,0.4);
-webkit-box-shadow: 3px 5px 16px -1px rgba(0,0,0,0.4); 

${mobile({  
   margin : '10px 5px',
})}

`

export const Title = styled.p`
  font-size : clamp(18px , 1.8vw , 30px);
  text-align: center;
  font-weight: bold;
  letter-spacing : -1px;

  ${mobile({
    letterSpacing : '0px',
    wordSpacing : '2px'
  })}
`
export const User = styled.div`
  display : flex;
  align-items: center;
  justify-content: space-around;
  padding : 0 5px;
  height: 100px;

  ${mobile({
    justifyContent : 'space-evenly'
  })}
`

export const Image = styled.img`
 width : clamp(35px , 5vw , 40px);
 height : clamp(35px , 5vw , 40px);
 border-radius: 50%;
 object-fit: contain;
`

export const UserData = styled.div`
 display : flex;
 flex-direction: column;
 width : 50%;
`
export const UserName = styled.p`
 font-size: clamp(15px , 1.2vw , 25px);
 font-weight: bold;
 margin : 0;

`
export const UserJob = styled.p`
  margin: 0;
`
export const Button = styled.button`
 display: flex;
 align-items: center;
 padding : 0.2em 0.4em;
 border-radius: 10px;
 border : none;
 background-color: #ebe7ee;
`