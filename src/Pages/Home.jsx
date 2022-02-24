import styled from 'styled-components';
import FeaturedInfo from '../Components/FeaturedInfo/FeaturedInfo';
import Chart from '../Components/Chart/Chart';
import WidgetSm from '../Components/Widgets/Widget-sm/Widget-sm';
import WidgetLg from '../Components/Widgets/Widget-lg/Widget-lg';
import {mobile} from '../Responsive';
import { chartUserData } from '../data';
import { useContext } from 'react';
import { Context } from '../Context';

const Container = styled.div`
 flex : 4;

${mobile({
  flex : 1,
  width :'100vw'
})}
`
const WidgetContainer = styled.div`
  height: 400px;
  box-sizing: border-box;
  margin : 20px 30px;
  display : flex;
  justify-content: space-between;
 
 ${mobile({
   flexDirection : 'column',
   margin : 0
 })}
`

const ChartContainer = styled.div`
margin : 20px 30px;
padding : 10px;
box-shadow: 3px 5px 16px -1px rgba(0,0,0,0.4);
-webkit-box-shadow: 3px 5px 16px -1px rgba(0,0,0,0.4);

${mobile({
 maxWidth : '100vw',
 margin : '5px',
 marginBottom : '15px',
 padding : '5px'
})}
`
function Home() {
  const {open} = useContext(Context);

  return (
      <Container open={open}>
        <FeaturedInfo/>
        <ChartContainer>
        <Chart data={chartUserData} datakeyXaxis={'name'} datakeyLine={'ActiveUsers'} title={'User Analytics'}/>
        </ChartContainer>
        <WidgetContainer>
          <WidgetSm/>
          <WidgetLg/>
        </WidgetContainer>
      </Container>
  )
}

export default Home;
