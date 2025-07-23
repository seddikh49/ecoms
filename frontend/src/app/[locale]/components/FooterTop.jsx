import React from 'react'
import { Map, MapPin, Phone, MdEmail, Mail } from 'lucide-react'
import { MdMarkEmailRead, MdOutlineEmail } from 'react-icons/md'

const FooterTop = () => {
  const data = [
    {
      title: "Visit Us",
      subtitle: "Djelfa , Algeria",
      icon: <Map />

    },

    {
      title: "Call Us",
      subtitle: "+213 664753237",
      icon: <Phone />
    },
    {
      title: "Working Hours",
      subtitle: "Daily",
      icon: <MapPin />

    },
    {
      title: "Email Us",
      subtitle: "seddikh49@gmail.com",
      icon: <Mail />

    }

  ]

  return (
    <div className='grid xl:grid-cols-4 mt-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xm:grid-cols-2 border border-b border-x-0 border-t-0 '>
      {data.map((item, index) => {
        return (
          <div className='flex justify-center items-center gap-3 group hover:bg-gray-50 p-4 transition-colors hoverEffect' key={index}>
            <p>{item.icon} </p>
            <div>
              <h1 className='text-black font-semibold'>{item.title}</h1>
              <h2 className='group-hover:text-black' >{item.subtitle} </h2>
            </div>
          </div>)
      })}
    </div>
  )
}

export default FooterTop
