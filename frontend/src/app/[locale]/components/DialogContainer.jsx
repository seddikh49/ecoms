"use client"
import React, { useEffect, useRef, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../../@/components/ui/dialog"

import { MdInput } from 'react-icons/md'
import { Input } from '../../../../@/components/ui/input'
import { Loader2, Search, X } from 'lucide-react'
import { fetchProducts } from '../../../../lib/fetchProducts'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../../../../@/components/ui/button'
import { usePathname } from 'next/navigation';

const DialogContainer = ({ allProducts }) => {
  const pathname = usePathname();
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showSearch, setShowSearch] = useState(false);


  useEffect(() => {
    if (!search) {
      return setProducts([])
    }
    setLoading(true)
    const filterProducts = () => {
      const filteredProducts = allProducts.filter((item) =>
        item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      )
      setProducts(filteredProducts)
      setLoading(false)
    }
    const debounceTimer = setTimeout(() => {
      filterProducts()
    }, 300)
    return () => {
      clearTimeout(debounceTimer)
    }
  }, [search]);




  return (
    <>
      <Dialog open={showSearch} onOpenChange={() => setShowSearch(!showSearch)} >
        <DialogTrigger>
          <FaSearch className='w-5 h-5 hover:text-black hoverEffect cursor-pointer' />
        </DialogTrigger>
        <DialogContent className="min-h-[90vh] max-h-[90vh] overflow-hidden flex flex-col ">
          <DialogHeader className={" h-max"}>
            <DialogTitle>Product Searchbar</DialogTitle>
            <DialogDescription className={''}>
            </DialogDescription>
            <form action="" className='relative overflow-hidden   '>
              <Input value={search} onChange={(e) => setSearch(e.target.value)} type="" className='flex-1 rouded-md py-5 focus:border-2 rounded-br-md' placeholder='Search product here...' />
              <button className='absolute flex justify-center items-center right-0 w-10 top-0 hover:bg-black hover:text-white hoverEffect bg-black/10 h-full rounded-br-md cursor-pointer rounded-tr-md '>
                <Search className='w-5 h-5' />
              </button>
              {search && <X onClick={() => setSearch('')} className='absolute right-11 h-5 w-5 hover:text-red-400 hoverEffect top-3' />}
            </form>
          </DialogHeader>
          <div className='border border-black/10  rounded-md  '>
            {search ? (
              <div className='w-full h-full p-2 rounded-md '>

                {loading ? (<div className='flex gap-2 text-yellow-600 w-full px-6'> <Loader2 className='animate-spin' /><p>searching on progress...</p></div>) :
                  (<div className='overflow-y-scroll  h-[70vh]   ' >
                    {products.length ? products?.map((item) => {
                      return (
                        <div className='flex items-center px-2 p-1  border-b-1 hover:bg-gray-100 hoverEffect' onClick={() => setShowSearch(false)} key={item.id}>
                          {/* <DialogClose asChild> */}
                          <Link className='inline-block border overflow-hidden group  border-black/20 rounded-md md:w-16 md:h-16 sm:h-15 sm:w-15 xm:h-15 xm:w-15   xl:h-24 xl:w-24' onClick={() => setShowSearch(true)} href={`/collection/${item.name}`}  >
                            <Image className=" object-cover h-full w-full  group-hover:scale-110 hoverEffect  " width={200} height={200} alt='images' src={`${item.image[0]}`} />
                          </Link>
                          {/* </DialogClose> */}
                          <div className='flex-grow px-4 py-2 text-gray-800 '>
                            <Link href={`/collection/${item.name}`} replace className='' >
                              <h2 className='xl:text-xl font-semibold line-clamp-1 '>
                                {item.name}
                              </h2>
                              <p className=' text-gray-600   line-clamp-1 '>
                                {item.description.slice(0, 18)}...
                              </p>
                            </Link>

                            <div className='flex gap-1 font-semibold'>
                              <span>دج</span>
                              <h1 >{item.price}</h1>
                            </div>

                          </div>
                          <Link href={`/collection/${item.name}`} >
                            <Button className={'cursor-pointer   xl:w-60 bg-white border-black/20 text-black border hover:text-white xm:w-15 text-[10px]'}>شراء المنتج</Button>
                          </Link>

                        </div>
                      )
                    }) : <p className='text-center line-clamp-2 px-2'>Nothing match with the keyword <span className='font-semibold underline text-red-900 px-2'>{""}"{search}" </span> ,Please try something else</p>}
                  </div>)}
              </div>
            ) : <div className='flex py-10 text-green-600 justify-center items-center gap-2 xl:text-lg lg:text-lg md:text-sm sm:text-sm xm:text-[10px] px-1 tracking-wider'>
              <Search className='' />
              Search and explore your products from Kamsed
            </div>}
            {/* <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose> */}
          </div>
        </DialogContent>
      </Dialog >
    </>

  )
}

export default DialogContainer
