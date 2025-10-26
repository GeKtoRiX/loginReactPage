import { styled } from 'styled-components';

// Стилизация label.
const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  // Изменение цвета текста в зависимости от валидации поля ввода(email/password).
  color: ${({ $invalid }) => ($invalid ? '#f87171' : '#6b7280')};
`;

// Стилизация input.
const StyledInput = styled.input`
  width: 100%;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  // Изменение цвета границ в зависимости от валидации поля ввода(email/password).
  border-color: ${({ $invalid }) => ($invalid ? '#f73f3f' : 'transparent')};
  padding: 0.75rem 1rem;
  line-height: 1.5;
  // Изменение цвета текста в зависимости от валидации поля ввода(email/password).
  color: ${({ $invalid }) => ($invalid ? '#ef4444' : '#374151')};
  // Изменение цвета фона в зависимости от валидации поля ввода(email/password).
  background-color: ${({ $invalid }) => ($invalid ? '#fed2d2' : '#d1d5db')};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;

export default function Input({ label, invalid, type, onChange }) {
  /* 
  label - текст внутри label тега.
  invalid - валидация поля ввода(email/password).
  type - тип поля ввода.
  onChange - пробрасывание функции handleInputChange('emain/password', event.target.value).
  */
  return (
    <p>
      <Label $invalid={invalid}>{label}</Label>
      <StyledInput $invalid={invalid} type={type} onChange={onChange} />
    </p>
  );
}
