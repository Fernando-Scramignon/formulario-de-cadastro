import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  outline: none;
  background: #bf3b3b;
  color: white;
  margin-top: 2.7rem;
  padding: 10px 50px;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    filter: brightness(0.9);
    transition: 0.3s;
  }
`;
