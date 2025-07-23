import { useTranslations, useLocale } from 'next-intl';
import HeaderMenu from "./HeaderMenu"
import { MdLanguage } from "react-icons/md";
import Container from './Container'
import MobileMenu from './MobileMenu'
import SearchBar from './SearchBar'
import LanguageIcon from './LanguageIcon'
import Link from 'next/link';


export default function Header() {

  return (
    <header className={`bg-white border-b border-b-gray-200 py-5 `}>
      <Container className='flex justify-between gap-7 '>
        <HeaderMenu />
        <div className='xl:w-1/3   flex justify-center items-center gap-3'>
          <MobileMenu />
          <Link href={'/'} className='text-2xl tracking-wider text-black font-black '>
            KAMSED
          </Link>

        </div>
        <div className='xl:w-1/3 flex justify-end items-center gap-5 '>
          <SearchBar />
          <LanguageIcon />
        </div>
      </Container>
    </header>
  );
}






