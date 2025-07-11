
import { useTranslations, useLocale } from 'next-intl';
import HeaderMenu from "./HeaderMenu"
import { MdLanguage } from "react-icons/md";
// import { motion } from 'framer-motion';
import Container from './Container'
import MobileMenu from './MobileMenu'
import SearchBar from './SearchBar'
import LanguageIcon from './LanguageIcon'





import Link from 'next/link';
// import { useState, useEffect } from 'react';
// import { usePathname, useSearchParams, useRouter } from 'next/navigation';
// import { Search, Menu, X } from 'lucide-react';
// import { useShop } from '../context/shopContext';


export default function Header() {
  // const { setSearch, } = useShop()
  // const pathname = usePathname();
  // const router = useRouter();
  // const locale = useLocale(); // يعيد: "ar", "en", ...
  // const [language, setLanguage] = useState(locale);
  
  // const [menuOpen, setMenuOpen] = useState(false);
  // const [isSticky, setIsSticky] = useState(false);



 
 








  // const changeLanguage = (e) => {
  //   const newLocale = e.target.value;
  //   if (!newLocale) return
  //   const segments = pathname.split('/');
  //   segments[1] = newLocale;
  //   router.replace(segments.join('/'));

  // }



  return (
    <header className={`bg-white border-b border-b-gray-200 py-5 `}>
       <Container  className='flex justify-between gap-7 '>
         <HeaderMenu />
         <div className='xl:w-1/3   flex justify-center items-center gap-3'>
          <MobileMenu />
          <Link href={'/'} className='text-2xl tracking-wider text-black font-black '>
            KAMSED
          </Link>
     
          </div>
         <div  className='xl:w-1/3 flex justify-end items-center gap-5 '>
          <SearchBar/>
          <LanguageIcon/>
         </div>
      
       </Container>
         
    </header>
  );
}











//  <div className="w-full mx-auto flex items-center justify-between ">

//         {/* الشعار */}
//         <Link href={'/'} className="xl:text-4xl lg:text-3xl md:text-3xl sm:text-2xl  xm:text-2xl font-extrabold tracking-widest">
//           KAMSED<span className='text-orange-500'>.</span>
//         </Link>

//         {/* روابط التنقل */}
//         <nav className={`xl:flex md:hidden lg:flex xm:hidden sm:hidden gap-5   `}     >
//           {navLinks.map((link) => (
//             <Link
//               key={t(`${link}.href`)}
//               href={t(`${link}.href`)}
//               // className={`font-bold xl:text-lg lg:text-sm transition hover:text-orange-500 ${`/${pathname.split('/')[pathname.split('/').length - 1]}` === t(`${link}.href`) ? 'text-orange-500' :'text-gray-600'
//               //   }`}
//               className={`font-bold xl:text-lg lg:text-sm transition hover:text-orange-500 ${currentPath === t(`${link}.href`) ? "text-orange-500" : "text-gray-600" } `}
//             >
//               {t(`${link}.label`)}
//             </Link>
//           ))}
//         </nav>

//         {/* أيقونة البحث + القائمة للجوال */}
//         <div className="flex items-center gap-2 space-x-4 space-x-reverse  ">
//           {/* مكان الأيقونة محفوظ دائمًا */}

//           <div className=" xl:flex lg:flex md:flex justify-end text-gray-600 xm:hidden sm:flex  ">
//             {pathname.split('/')[2] === 'collection' ? (

//               <div className="relative max-w-md xl:w-50  h-10 md:w-44 sm:w-44 xm:w-24 lg:w-32">

//                 <input
                 
//                   onChange={(e) => setSearch(e.target.value)}
//                   type="text"
//                   placeholder="ابحث..."
//                   className="w-full h-full pl-12 pr-4 rounded-2xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
//                 />
//                 <Search size={20} className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
//               </div>


//             ):<div className={`xl:w-50 h-10 md:w-44 sm:w-44 xm:w-24 lg:w-32 `}></div>}

//           </div>
//            <div className='flex items-center rounded-2xl  p-1 justify-between'>
//              <MdLanguage className='xl:text-2xl lg:text-xl sm:text-xl  xm:text-md' />
//              <select className=' ' onChange={(e) => changeLanguage(e)} defaultValue={language}>
//             <option value='' key='lang'> اختر اللغة</option>
//             <option value='ar' key='ar'>العربية </option>
//             <option value='an' key='an'>الانجليزية </option>
//           </select>
//            </div>
    
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="xl;hidden lg:hidden  text-gray-800"
//             aria-label="Open menu"
//           >
//             {menuOpen ? <X size={35} /> : <Menu size={35} />}
//           </button>
//         </div>
//       </div>

//       {/* قائمة جانبية للجوال */}
//       {menuOpen && (
//         <div className="md:hidden mt-4 flex flex-col items-end space-y-4 pr-4">
//           {/* {navItems.map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               onClick={() => setMenuOpen(false)}
//               className={`text-base font-medium hover:text-pink-600 ${`/${pathname.split('/')[pathname.split('/').length - 1]}` === item.href ? 'text-pink-700' : 'text-gray-800'
//                 }`}
//             >
//               {item.label}
//             </Link>
//           ))} */}
//            {navLinks.map((link) => (
//             <Link
//               key={t(`${link}.href`)}
//               href={t(`${link}.href`)}
//               className={`font-bold xl:text-lg lg:text-sm transition hover:text-orange-500 ${`/${pathname.split('/')[pathname.split('/').length - 1]}` === t(`${link}.href`) ? 'text-orange-500' : 'text-gray-600'
//                 }`}
//             >
//               {t(`${link}.label`)}
//             </Link>
//           ))}
//         </div>
//       )}
