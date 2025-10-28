import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className='flex flex-col items-center justify-center mt-8 mb-8 md:mb-16'>
      <img
        className='w-44 h-44 object-contain mb-8'
        src={logo}
        alt='A canvas'
      />
      <h1 className='m-0 text-2xl md:text-4xl font-semibold tracking-[0.4em] text-center uppercase text-amber-800 font-title '>
        ReactArt
      </h1>
      <p className='m-0 text-center text-stone-500'>
        A community of artists and art-lovers.
      </p>
    </header>
  );
}
