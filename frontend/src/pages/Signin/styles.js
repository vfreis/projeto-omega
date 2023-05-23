import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 0vh; 
  margin: -200px auto 0;
  
  
`;


export const Content = styled.form`
  gap: 15px;
  display: flex;
  border:none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  
  
  max-width: 435px;
  padding: 50px;
  gap: 20px;
  border-radius: 25px;
  
  
`;

export const Label = styled.label`
  font-size: 25px;
  font-weight: 600;
  color: #171717;
`;

export const LabelSignup = styled.label`
  font-size: 20px;
  color: #171717;
`;

export const labelError = styled.label`
  font-size: 20px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #171717;
  }
`;




