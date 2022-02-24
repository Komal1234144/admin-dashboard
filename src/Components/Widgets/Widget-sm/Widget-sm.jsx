import {Visibility} from '@mui/icons-material';
import { userData } from '../../../data';
import * as styled from './Widget-sm.styled';
import uniqid from 'uniqid';

const WidgetSm = () => {
  
    return (
      <styled.Container>
       <styled.Title>New Join Members</styled.Title>
       {userData.map((userData)=>{
           return(
            <styled.User key={uniqid()}>
            <styled.Image src={userData.img} alt='' />
            <styled.UserData>
              <styled.UserName>{userData.username}</styled.UserName>
              <styled.UserJob>{userData.job}</styled.UserJob>
            </styled.UserData>
            <styled.Button><Visibility className ='visibility-icon'/>Display</styled.Button>
          </styled.User>
           ) 
       })}
      </styled.Container>
  )
};

export default WidgetSm;
