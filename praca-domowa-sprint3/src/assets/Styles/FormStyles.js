import styled from "styled-components";

export const FormContainer = styled.div`
  background: #3b3f47;
  padding: 30px;
  border-radius: 12px;
  width: 450px;
  color: #e1e1e1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SectionTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: #ff9800;
  display: block;
`;

export const Error = styled.span`
  font-size: 14px;
  color: #8b0000;
`;

export const Input = styled.input`
  width: 100%;
  padding: 14px;
  background: #4a4f58;
  border: 1px solid #666;
  color: #fff;
  border-radius: 6px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  background: #4a4f58;
  border: 1px solid #666;
  color: white;
  border-radius: 6px;
  height: auto;
  display: block;
  overflow: hidden;
  outline: none;
  border-radius: 6px;
`;

export const ExperienceSelect = styled.select`
  padding: 10px;
  background: #4a4f58;
  border: 1px solid #666;
  color: white;
  border-radius: 6px;
  outline: none;
  appearance: none; 
  flex: 1; 
`;
export const CheckBox = styled.label`
  display: flex;
  gap: 10px;
`;

export const DeleteButton = styled.button`
  padding: 10px 14px;
  background: #ff0000; 
  color: black;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  flex-shrink: 0; 
  &:hover {
    background: #cc0000; 
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 14px;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background: #45a049;
  }

  background: #007bff;
  &:hover {
    background: #0056b3;
  }
`;

export const RadioWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const ExperienceWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 10px;
`;
