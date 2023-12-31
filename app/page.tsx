import Image from 'next/image'
import React from "react";
// @ts-ignore
import Homepage from "@/app/home/Homepage";
import GetStartedButton from "@/app/clientComponents/getStartedButton";

export default function Home() {
  return (
      <>

      <div className="hero min-h-screen" style={{backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)'}}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                  <p className="mb-5">This is the home page of the new look of the web BingeTaku .</p>
                  <GetStartedButton />
              </div>
          </div>
      </div>

          <Homepage />

      </>

  )
}
