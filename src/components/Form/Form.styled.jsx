import styled from 'styled-components';

export const FormEl = styled.form`
  display: flex;
  flex-direction: column;
`;

export const LabelEl = styled.label`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  font-size: 24px;
  text-align: left;
  font-weight: 600;
`;

export const InputEl = styled.input`
  width: 300px;
  height: 50px;
  padding: 0 5px;
`;

export const SubmitBtn = styled.button`
  display: block;
  margin-top: 40px;
  width: 100px;
  height: 50px;
  font-weight: 600;
  color: white;
  background-color: #5ea5bd;
  border-radius: 7px;
  border-color: transparent;
  &:hover {
    background: linear-gradient(45deg, #3b3b7a, #91617e);
    color: #d3d3d3;
    background-size: cover;
  }
`;
