import styled from "styled-components";

export const WelcomePageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
  background: rgb(54, 46, 46);

  .motionDiv {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }

  h1 {
    color: white;
  }
  span {
    color: #dd3939;
  }
`;
