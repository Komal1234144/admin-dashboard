import {chartUserData} from '../../data';
import styled from 'styled-components';
import CommonChart from '../CommonChart';
import {mobile} from '../../Responsive';

const Container = styled.div`
height : 200px;
margin : 10px 0;
padding : 0px;
//box-shadow: 3px 5px 16px -1px rgba(0,0,0,0.4);
//-webkit-box-shadow: 3px 5px 16px -1px rgba(0,0,0,0.4);

${mobile({
  width : '100%',
  padding : 0,
  margin : 'auto',
  height : '200px',
  marginBottom : '20px',
  marginTop : '0px',
})}
`

const Title = styled.p`
padding: 0 17px;
font-size: 20px;
font-weight: bolder;
margin : 0;
margin-bottom : 10px
`

const Chart = ({data , datakeyXaxis  , datakeyLine , title}) => {
  return (
      <Container>
        <Title>{title}</Title>
        <CommonChart data={data} datakeyXaxis={datakeyXaxis} datakeyLine={datakeyLine}/>    
      </Container>
  )
};

export default Chart;
