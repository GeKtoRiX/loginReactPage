// Компонентный подход создания стилизаций элементов.
import { styled } from 'styled-components';
// Лого сайта.
import logo from '../assets/logo.png';

// Компонент стилизации <StyledHeader/>
const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;

  & img {
    width: 11rem;
    margin-bottom: 2rem;
    height: 11rem;
    object-fit: contain;
  }

  & h1 {
    margin: 0;
    font-family: 'Pacifico', cursive;
    font-size: 1.5rem;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 0.4em;
    color: #9a3412;
  }

  & p {
    margin: 0;
    text-align: center;
    color: #a39191;
  }
  // Медиа-запрос изменения компонениа <StyledHeader/>
  @media (min-width: 768px) {
    // Нижний внешний отступ всего компонента.
    margin-bottom: 4rem;
    & h1 {
      // Увеличение шрифта h1 внутри <StyledHeader/>
      font-size: 2.25rem;
    }
  }
`;

export default function Header() {
  return (
    // Кастомный компонент
    <StyledHeader>
      <img src={logo} alt='A canvas' />
      <h1>ReactArt</h1>
      <p>A community of artists and art-lovers.</p>
    </StyledHeader>
  );
}
