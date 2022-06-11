import styled from "styled-components";

export const RegisterPageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
  background: rgb(54, 46, 46);
`;

export const RegisterPageForm = styled.form`
  width: 30vw;
  min-width: 250px;
  height: fit-content;
  max-height: 490px;
  gap: 2.5rem;
  padding: 1.5rem 0;

  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.15);
  background: rgba(255, 255, 255, 0.95);

  .inputDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }
`;
