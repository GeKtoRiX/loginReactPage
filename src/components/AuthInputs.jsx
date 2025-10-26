// Хук динамической работы с состояниями элементов.
import { useState } from 'react';
// Компонентный подход создания стилизаций элементов.
import { styled } from 'styled-components';
// Стили Кнопок и Полей Ввода.
import Button from './Button.jsx';
import Input from './Input.jsx';

// Компонент стилизации <ControlDiv/>
const ControlDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

export default function AuthInputs() {
  // Хук динамического состояния поля Email(String).
  const [enteredEmail, setEnteredEmail] = useState('');
  // Хук динамического состояния поля Password(String).
  const [enteredPassword, setEnteredPassword] = useState('');
  // Функция измненения состояний полей Email и Password.
  function handleInputChange(identifier, value) {
    // identifier - наименование поля ввода.
    // value - значение поля ввода.

    // Измение состояния хуков в зависимости от identifier.
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  // Хук динамического состояния кнопки Submit(Boolean).
  const [submitted, setSubmitted] = useState(false);
  // Функция измненения состояний кнпоки Submit.
  function handleLogin() {
    setSubmitted(true);
  }

  // Валидация Email: Submit нажат && в email нет символа @
  const emailNotValid = submitted && !enteredEmail.includes('@');
  // Валидация Password: Submit нажат && Password менее 6 символов.
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id='auth-inputs'>
      <ControlDiv>
        <Input
          invalid={emailNotValid}
          label='Email'
          type='email'
          onChange={(event) => handleInputChange('email', event.target.value)}
        />
        <Input
          invalid={passwordNotValid}
          label='Password'
          type='password'
          onChange={(event) =>
            handleInputChange('password', event.target.value)
          }
        />
      </ControlDiv>
      <div className='actions'>
        <button type='button' className='text-button'>
          Create a new account
        </button>
        <Button className='button' onClick={handleLogin}>
          Sign In
        </Button>
      </div>
    </div>
  );
}
