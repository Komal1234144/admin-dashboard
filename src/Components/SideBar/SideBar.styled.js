import styled from "styled-components";
import { mobile } from "../../Responsive";

export const Container = styled.div`
flex :  1;
height : calc(100vh - 60px);
padding : 10px 0;
background-color: #e6dbe1;
position: sticky;
top : 60px;
z-index : 20;
transition: all 0.5s ease-in ;
${mobile({
    position : 'fixed',
})}
`

export const wrapper = styled.div`
//border : 1px solid black;
`
export const Title = styled.p`
margin : 0;
text-align: left;
margin-left: 10%;
font-weight: bolder;
color : #b493a7;
//border : 1px solid purple;
`

export const ul = styled.ul`
list-style-type: none;
margin : 15px ;
margin-left: 0;
//border : 1px solid red;
`
export const li = styled.li`
display: flex;
align-items: center;
margin : 5px 0;
border-radius: 10px;
//border : 1px solid blue;

&>a{
    text-decoration: none;
    color : inherit;
}

&:active,
&:hover{
    background-color: #d0bcc8;
}
`