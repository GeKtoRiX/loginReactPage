// Верхняя часть сайта(header).
import Header from '@/components/Header.jsx';
// Поля ввода Email и Password.
import AuthInputs from '@/components/AuthInputs.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <AuthInputs />
      </main>
    </>
  );
}
