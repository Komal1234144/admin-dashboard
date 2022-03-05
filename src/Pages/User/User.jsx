import {PersonOutline , CalendarToday, PhoneAndroid , MailOutline , GpsNotFixed, Publish} from '@mui/icons-material';
import * as styled from './User.styled';
import { useContext } from 'react';
import { Context } from '../../Context';

 const User = () => {

  //const {user} = useContext(Context);

  return (
      <styled.Container>
        <styled.Heading>
          <styled.EditUser>Edit User</styled.EditUser>
          <styled.Button><a href='/newUser'>Create</a></styled.Button>
        </styled.Heading>
        <styled.Main>
          <styled.Left>
            <styled.Top>
              <styled.Image src='https://i.ibb.co/ygQwmsV/black-user.webp' alt=''/>
              <styled.Info>
               <styled.Name>user-123</styled.Name>
               <styled.Job>Software Engineer</styled.Job>
              </styled.Info>
            </styled.Top>
            <styled.Down>
              <styled.TextHead>Account Details</styled.TextHead>
              <styled.Text><PersonOutline sx={{marginRight : '5px'}}/>username99</styled.Text>
              <styled.Text><CalendarToday sx={{marginRight : '5px'}}/>10.12.1999</styled.Text>
              <styled.TextHead>Contact Details</styled.TextHead>
              <styled.Text><PhoneAndroid sx={{marginRight : '5px'}}/>+1 123 456 67</styled.Text>
              <styled.Text><MailOutline sx={{marginRight : '5px'}}/>random@gmail.com</styled.Text>
              <styled.Text><GpsNotFixed sx={{marginRight : '5px'}}/>New York|USA</styled.Text>
            </styled.Down>
          </styled.Left>
          <styled.Right>
          <styled.Top><p>Edit</p></styled.Top>
            <styled.Wrapper>
              <styled.InnerLeft>
                <styled.Label>Username</styled.Label>
                <styled.Input placeholder="username99"/>
                
                <styled.Label>Full Name</styled.Label>
                <styled.Input placeholder="User-123"/>
                
                <styled.Label>Email</styled.Label>
                <styled.Input placeholder="random@gamil.com"/>
                
                <styled.Label>Phone</styled.Label>
                <styled.Input placeholder="+1 123 456 67"/>
                
                <styled.Label>Address</styled.Label>
                <styled.Input placeholder="New York|USA"/>
                
              </styled.InnerLeft>
               <styled.InnerRight>
                 <styled.InnerDiv>
                 <styled.UploadImage src='https://i.ibb.co/yn0Xjf8/user-5.png' alt=''/>
                 <styled.Label htmlFor='file'>
                   <Publish sx={{fontSize:'50px'}}/>
                 </styled.Label>
                 <styled.Input id='file' type='file' style={{display:'none'}}/>
                 </styled.InnerDiv>
                 <styled.UpdateButton>Update</styled.UpdateButton>
               </styled.InnerRight>  
           </styled.Wrapper>
          </styled.Right>
        </styled.Main>
      </styled.Container>
  )
};

export default User;