import styled from 'styled-components';
import {mobile} from '../../Responsive';

export const Container = styled.div`
flex : 4;
margin : 20px 30px;
`

export const Title = styled.p`
font-size : clamp(25px , 2vw , 30px);
font-weight: bolder;
color : darkblue
`

export const Main = styled.div`
margin-top: 15px;
width : 50%;

${mobile({
    width : '90%'
})}
`

export const Form = styled.form`
display : flex;
flex-direction: column;
`

export const Label = styled.label`
font-size: 20px;
font-weight: bold;
`

export const Input = styled.input`
height: 50px;
margin : 10px;
margin-left: 0;
padding : 5px;
font-size: 15px;
`

export const Select = styled.select`
margin-top: 10px;
height: 50px;
`

export const Option = styled.option``

export const Button = styled.button`
border : none;
background-color: darkblue;
color : white;
border-radius: 10px;
width : 100px;
font-size: 25px;
height: 1.8em;
letter-spacing : 2px;
cursor : pointer;
margin: 20px;
`