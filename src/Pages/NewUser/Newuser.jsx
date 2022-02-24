import * as styled from './NewUser.styled';

const Newuser = () => {
  return (
      <styled.Container>
        <styled.Top>New user</styled.Top>
        <styled.Bottom>
          <styled.Form>
            <styled.Wrapper>
              <styled.Label>Username</styled.Label>
              <styled.Input placeholder='john'/>
             </styled.Wrapper>
             <styled.Wrapper>
             <styled.Label>Full Name</styled.Label>
             <styled.Input placeholder='John Smith'/>
           </styled.Wrapper>
             <styled.Wrapper>
               <styled.Label>Email</styled.Label>
               <styled.Input placeholder='john@gmail.com'/>
             </styled.Wrapper>
             <styled.Wrapper>
               <styled.Label>Phone</styled.Label>
               <styled.Input placeholder='+1 123 456 67'/>
             </styled.Wrapper>
           <styled.Wrapper>
              <styled.Label>Password</styled.Label>
              <styled.Input placeholder='password'/>
            </styled.Wrapper>
            <styled.Wrapper>
              <styled.Label>Address</styled.Label>
              <styled.Input placeholder='New York|USA'/>
            </styled.Wrapper>
            <styled.Wrapper>
            <styled.Label>Gender</styled.Label>
            <styled.GenderWrapper>
            
            <styled.RadioInput type='radio'/>
            <styled.Label>Male</styled.Label>
            
            <styled.RadioInput type='radio'/>
            <styled.Label>Female</styled.Label>
          
          <styled.RadioInput type='radio'/>
          <styled.Label>Other</styled.Label>      
         
         </styled.GenderWrapper>
          </styled.Wrapper>
            <styled.Wrapper>
              <styled.Label>Active</styled.Label>
              <styled.Select>
                <styled.Option>Yes</styled.Option>
                <styled.Option>No</styled.Option>
              </styled.Select>
            </styled.Wrapper>
          </styled.Form>
            <styled.Button>Create</styled.Button>
        </styled.Bottom>
      </styled.Container>
  )
};

export default Newuser;
