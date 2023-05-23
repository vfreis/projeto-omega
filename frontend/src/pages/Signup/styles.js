import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 00vh; 
  margin: -200px auto 0;
  
`;

export const Content = styled.div`
  gap: 13px;
  display: flex;
  
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  
 
  padding: 25px;
  border-radius: 25px;
`;

export const Label = styled.label`
  font-size: 25px;
  font-weight: 600;
  color: #171717;
`;

export const LabelSignin = styled.label`
  font-size: 16px;
  
  color: #00000;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #000000;
  }
`;
