import styled from "styled-components";

const Container = styled.div`
  max-width: 1140px;
  min-height: 800px;
  margin: 0 auto;
  border: 1px solid red;
`;
const NavBar=styled.div`
display: flex;
  justify-content: space-between;
  align-items: center;
    & img{
    width: 150px;
      }
  & div{
     border: 1px solid green;
     display: flex;
     justify-content: space-between;
    gap: 20px;

   }
`


export const Styled = {Container, NavBar};