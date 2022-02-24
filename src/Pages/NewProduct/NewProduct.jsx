import * as styled from './NewProduct.styled';

const NewProduct = () => {
    return(
      <styled.Container>
        <styled.Title>New Product</styled.Title>
        <styled.Main>
        <styled.Form>
          <styled.Label>Image</styled.Label>
          <styled.Input type='file'/>
          <styled.Label>Name</styled.Label>
          <styled.Input placeholder='Apple Airpods'/>
          <styled.Label>Stock</styled.Label>
          <styled.Input placeholder='123'/>
          <styled.Label>Active</styled.Label>
          <styled.Select>
            <styled.Option>Yes</styled.Option>
            <styled.Option>No</styled.Option>
          </styled.Select>
           <styled.Button>Create</styled.Button>   
       </styled.Form>
       </styled.Main>  
     </styled.Container>  
    )
}

export default NewProduct;