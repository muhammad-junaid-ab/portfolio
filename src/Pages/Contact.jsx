import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { IoIosContact } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  }
  return (
    <div className='flex flex-col justify-center items-center gap-8 my-5 mx-5'>
      <h2 className="text-5xl text-center font-bold">My Contact</h2>
      <form
        action='https://formspree.io/f/xpwjkdel'
        method="POST"
        className="flex flex-col items-center justify-center gap-5"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="px-2 border-2 border-gray-600 py-4 w-80 md:w-96 lg:w-[600px] rounded-sm"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="px-2 border-2 border-gray-600 py-4 w-80 md:w-96 lg:w-[600px] rounded-sm"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          className="px-2 border-2 border-gray-600 py-4 w-80 md:w-96 lg:w-[600px] rounded-sm"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="px-2 border-2 border-gray-600 py-4 w-80 md:w-96 lg:w-[600px] rounded-sm"
        ></textarea>
        <button
          type="submit"
          className="bg-yellow-500 px-6 text-white py-3 text-lg border-3 border-transparent hover:border-yellow-500 hover:bg-white hover:text-yellow-500 rounded-lg font-bold cursor-pointer"
        >
          Send Message
        </button>
      </form>


      <div className='flex gap-5'>
        {/* LinkedIn */}
        <a
          href='https://www.linkedin.com/in/junaidab313'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedinIn className='text-6xl cursor-pointer' />
        </a>

        {/* Gmail */}
        <a href='mailto:junaidab313@gmail.com'>
          <CgMail className='text-6xl cursor-pointer' />
        </a>

        {/* Contact */}
        <a href='tel:+923125252826'>
          <IoIosContact className='text-6xl cursor-pointer' />
        </a>

        {/* Location */}
        <a
          href='https://www.google.com/maps/place/Peshawar'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLocationDot className='text-6xl cursor-pointer' />
        </a>
      </div>


    </div>
  )
}

export default Contact


