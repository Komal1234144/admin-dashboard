import styled from 'styled-components';
import {mobile} from '../../Responsive';

export const Container = styled.div`
flex : 4;
margin : 20px 30px;

${mobile({
    maxWidth : '100vw',
    margin : '20px 0px',
    paddingLeft : '10px',
})}
`

export const Top = styled.div`
font-size : clamp(20px , 2vw , 30px);
font-weight: bolder;
color : darkblue;
`

export const Bottom = styled.div`
margin-top: 15px;
`

export const Form = styled.form`
display : flex;
flex-wrap: wrap;
`

export const Wrapper = styled.div`
width : 400px;
display: flex;
flex-direction: column;
margin-right: 20px;
margin-top : 8px;
`

export const Label = styled.label``

export const Input = styled.input`
height: 50px;
margin-top : 10px;
padding : 5px;
font-size: 15px;
`
export const GenderWrapper = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
height: 50px;
`
export const Gender = styled.div`
display: flex;
border : 1px solid red;
align-items: center;
margin-right: 10px;
`
export const RadioInput = styled.input`
width : 20px;
height: 20px;
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
width : 50%;
font-size: 15px;
height: 2.5em;
width : 20%;
cursor : pointer;
margin-right: 20px;

${mobile({
    marginTop : '10px'
})}
`
