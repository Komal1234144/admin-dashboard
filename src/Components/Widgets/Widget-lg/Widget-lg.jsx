import * as styled from './Widget-lg.styled';
import { customer } from '../../../data';

const WidgetLg = () => {
  return (
      <styled.Container>
         <styled.Title>Latest Transactions</styled.Title>
         <styled.Table>
           <styled.TableRow>
             <styled.TableHeading>Customer</styled.TableHeading>
             <styled.TableHeading>Date</styled.TableHeading>
             <styled.TableHeading>Amount</styled.TableHeading>
             <styled.TableHeading>Status</styled.TableHeading>
           </styled.TableRow>
           {customer.map((data)=>{
               return(
            <styled.TableRow key={data.name}>   
            <styled.TableImage>
              <styled.Image src={data.img} alt=''/>
              <styled.Customer>{data.name}</styled.Customer>
            </styled.TableImage>
            <styled.TableData>{data.date}</styled.TableData>
            <styled.TableData>{data.amount}</styled.TableData>
            <styled.TableData>
              <styled.Button type={data.status}>{data.status}</styled.Button>
            </styled.TableData>
            </styled.TableRow>
            )
           })}
         </styled.Table>
      </styled.Container>
  )
};

export default WidgetLg;
