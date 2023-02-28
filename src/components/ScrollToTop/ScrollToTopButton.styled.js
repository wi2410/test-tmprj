import styled from 'styled-components';

export const ToTopBtn = styled.button`
  position: fixed;
  cursor: pointer;
  color: #f59256;
  bottom: 50px;
  right: 50px;
  height: 50px;
  width: 50px;
  font-size: 50px;
  border: 2px solid #f59256;
  border-radius: 50%;
  background-color: rgba (217, 217, 217 0.5);
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);

  :hover {
    background: orange;
    color: black;
  }
`;
