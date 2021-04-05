import React from 'react';
import Link from "next/link";

function trial() {
    return (
        <div className="bg-about-smile bg-cover min-h-screen p-20">
            <div className="bg-white mt-40 rounded-full border-gray-800 p-20 float-left ml-0 w-1/2 h-96 pt-5">
          <section className="m-5 py-9">
            <span className="text-4xl text-blue-700">
              Africa's Blockchain Center for Developers
            </span>
            <p className="text-lg">
              empowering the African woman for greater exploits...
            </p>
          </section>
          <section className="mx-5 my-10">
            <Link href="/">
              <a className="bg-blue-700 hover:bg-blue-100 text-white hover:text-blue-700 p-5 rounded-lg">
                Learn more
              </a>
            </Link>
          </section>

        </div>


       <div className="z-40 p-20 bg-white">1</div>
       <div className="z-30 p-20 bg-blue-400">2</div>
       <div className="z-20 p-20 bg-red-400">2</div>
       <div className="z-10 p-20 bg-green-400">2</div>
       <div className="z-0 p-20 bg-yellow-400">2</div>
            
        </div>
    )
}

export default trial
