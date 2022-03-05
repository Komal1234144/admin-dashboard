import styled from 'styled-components';
import {mobile} from '../../Responsive';

export const Container = styled.div`
width : 100%;
height : 60px;
padding : clamp(2px , 2vw , 15px);
background-color: white;
display: flex;
justify-content: space-between;
align-items: center;
position: sticky;
top : 0;
z-index : 999;
box-shadow: 3px 3px 8px -1px rgba(0,0,0,0.3);
-webkit-box-shadow: 3px 3px 8px -1px rgba(0,0,0,0.3);
`

export const MenuBar = styled.div`
  display : none;
  ${mobile({
      display : 'block',
      cursor : 'pointer'
  })}
`

export const  Logo = styled.p`
font-weight: bold;
font-size: clamp(20px , 5vw , 30px);
color : #3e517a;
cursor : pointer;
`
export const Icons = styled.div`
display : flex;
align-items: center;

#settings-icon{
  ${mobile({
    display : 'none'
  })}
}
`

export const Image = styled.img`
width : clamp(30px , 5vw , 50px);
height : clamp(30px , 5vw , 50px);
border-radius: 50%;
`