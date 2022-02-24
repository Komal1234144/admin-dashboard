import {Featured} from '../../data';
import {ArrowUpward, ArrowDownward} from '@mui/icons-material'
import * as styled from './FeaturedInfo.styled';

const FeaturedInfo = () => {
   return(<styled.Container>   
    {Featured.map((Featured)=>{
       return(
        <styled.Wrapper key={Featured.title}>
          <styled.Title>{Featured.title}</styled.Title>
          <styled.Money>
          <styled.Amount>{Featured.amount}</styled.Amount>
          <styled.Rate>{Featured.rate}</styled.Rate>
          {Featured.tag==='up' ? <ArrowUpward className='arrow-green'/> : <ArrowDownward className='arrow-red' />} 
          </styled.Money> 
          <styled.Desc>{Featured.desc}</styled.Desc>
        </styled.Wrapper>
     
       )
    })}
    </styled.Container>) 
};

export default FeaturedInfo;