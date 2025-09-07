import React from 'react'

const Projects = () => {
  return (
    <div className="mt-10">
      <h2 className="text-5xl text-center font-bold">My Projects</h2>

      <div className="flex flex-wrap items-center justify-center gap-5 my-5 mx-5">

        {/* Todo List */}
        <div className="flex flex-col bg-gray-300 rounded-full">
          <a
            href="https://muhammad-junaid-ab.github.io/basic-todo-app/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-90 h-60 cursor-pointer hover:bg-gray-300 bg-[url('/assets/todoListIMG.png')] bg-cover bg-center border-2 border-gray-300 hover:border-black"
          ></a>
          <div className="text-center py-2 font-medium rounded-lg">
            TODO LIST
          </div>
        </div>

        {/* Multi Task Calculator */}
        <div className="flex flex-col bg-gray-300 rounded-full">
          <a
            href="https://muhammad-junaid-ab.github.io/multi-functional-calculator/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-90 h-60 cursor-pointer hover:bg-gray-300 bg-[url('/assets/MTCalculator.jpg')] bg-cover bg-center border-2 border-gray-300 hover:border-black"
          ></a>
          <div className="text-center py-2 font-medium rounded-lg">
            MULTI TASK CALCULATOR
          </div>
        </div>

        {/* Contact App */}
        <div className="flex flex-col bg-gray-300 rounded-full">
          <a
            href="https://muhammad-junaid-ab.github.io/contact-app/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-90 h-60 cursor-pointer hover:bg-gray-300 bg-[url('/assets/contact-app.png')] bg-cover bg-center border-2 border-gray-300 hover:border-black"
          ></a>
          <div className="text-center py-2 font-medium rounded-lg">
            CONTACT APP
          </div>
        </div>

        {/* E-Commerce Website */}
        <div className="flex flex-col bg-gray-300 rounded-full">
          <a
            href="https://muhammad-junaid-ab.github.io/e-commerce-website/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-90 h-60 cursor-pointer hover:bg-gray-300 bg-[url('/assets/e-commerce.jpg')] bg-cover bg-center border-2 border-gray-300 hover:border-black"
          ></a>
          <div className="text-center py-2 font-medium rounded-lg">
            E-COMMERCE WEBSITE
          </div>
        </div>

        {/* Amazon Homepage Clone */}
        <div className="flex flex-col bg-gray-300 rounded-full">
          <a
            href="https://muhammad-junaid-ab.github.io/amazon-homepage-clone/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-90 h-60 cursor-pointer hover:bg-gray-300 bg-[url('/assets/amazone-homepage.jpg')] bg-cover bg-center border-2 border-gray-300 hover:border-black"
          ></a>
          <div className="text-center py-2 font-medium rounded-lg">
            AMAZON HOME PAGE CLONE
          </div>
        </div>

      </div>
    </div>
  )
}

export default Projects
