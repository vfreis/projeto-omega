import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh; 
  background-color: rgba(140, 198, 236, 0.603);
`;

export const Content = styled.div`
  gap: 13px;
  display: flex;
  
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 90%;
  max-width: 350px;
  box-shadow: 20px 20px 30px #0003;
  background-color:  rgba(140, 198, 236, 0.603);
  padding: 25px;
  border-radius: 25px;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #676767;
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
