import styled from 'styled-components';
   
export const Box = styled.div`
  padding:  10%;
  background: Transparent;
 
  bottom: 0;
  width: 100%;
  
   
  @media (max-width: 1000px) {
    padding: 20% 30%;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 20%;
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(40%, 1fr));
  grid-gap: 2%;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: 'white';
  margin-bottom: 10%;
  font-size: 100%;
  text-decoration: none;
   
  &:hover {
      color: #90e0ef;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 150%;
  color: #fff;
  margin-bottom: 10%;
  font-weight: bold;
`;