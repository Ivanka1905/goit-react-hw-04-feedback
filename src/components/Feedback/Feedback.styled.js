import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const Button = styled.button`
  background-color: #F1C40F;
  font-weight: 600;
  transition: all 400ms;
  :hover {
	cursor: pointer;
  color: white;
}
:first-child {
  background-color: #2ECC71;
}
:last-child {
  background-color: #E74C3C;
}
`;

