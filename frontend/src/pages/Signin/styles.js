import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 100vh;
  background-color: #f2f2f2;
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  max-width: 350px;
  padding: 20px;
  border-radius: 5px;
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #676767;
`;

export const LabelSignup = styled.label`
  font-size: 16px;
  color: #676767;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #676767;
  }
`;



// import styled from "styled-components";

// export const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background-color: #f2f2f2;
// `;

// export const Label = styled.h1`
//   font-size: 2rem;
//   font-weight: 700;
//   text-align: center;
//   margin-bottom: 2rem;
// `;

// export const Content = styled.div`
//   display: flex;
//   flex-direction: column;
//   background-color: white;
//   border-radius: 8px;
//   box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
//   padding: 2rem;
// `;

// export const labelError = styled.span`
//   font-size: 0.8rem;
//   color: red;
//   margin-bottom: 1rem;
// `;

// export const LabelSignup = styled.p`
//   font-size: 0.8rem;
//   margin-top: 1rem;
//   text-align: center;
// `;

// export const Strong = styled.strong`
//   font-weight: bold;
//   color: blue;
//   cursor: pointer;
//   transition: color 0.2s;

//   &:hover {
//     color: darkblue;
//   }
// `;

// export default { Container, Label, Content, labelError, LabelSignup, Strong };
