import React, { lazy, Suspense } from "react";
import Card from '../../html/Card';
import { getUrl } from '../../utils';

const Team = () => {
  return (
    <section>
      <React.Suspense fallback={<div>Loading...</div>}>
        <img
          className='w-20 mx-auto my-2'
          src={getUrl("KADSS-logo.png")}
          alt="KADSS Logo"
          title="KADSS Logo"
        />
        <div className="px-4 py-2 rounded-md w-fit mt-1 mb-5 mx-auto border-gray-200 shadow-md flex flex-col gap-1 md:flex-row">
          <div><span className="text-4xl font-bold text-blue-600">K</span><span className="text-lg">OUSTAV</span></div>
          <div><span className="text-4xl font-bold text-blue-600">A</span><span className="text-lg">RPIT</span></div>
          <div><span className="text-4xl font-bold text-blue-600">D</span><span className="text-lg">EBADRITA</span></div>
          <div><span className="text-4xl font-bold text-blue-600">S</span><span className="text-lg">OURAV</span></div>
          <div><span className="text-4xl font-bold text-blue-600">S</span><span className="text-lg">UBHADEEP</span></div>
        </div>

        <div className="justify-center md:grid md:grid-cols-2 md:grid-rows-3 md:gap-5 2xl:grid-cols-3 2xl:grid-rows-2">
          <Card name={"Koustav Das"} img={"koustav.jpg"} linkedin={"koustav-das-in"} email={"itskoustavdas@gmail.com"} />
          <Card name={"Arpit Sarkar"} img={"arpit.jpeg"} linkedin={"arpit-sarkar-444280256"} email={"itskoustavdas@gmail.com"} />
          <Card name={"Debadrita Hazra"} img={"debadrita.jpg"} linkedin={"debadrita-hazra-37249824a"} email={"debadritahazra007@gmail.com"} />
          <Card name={"Sourav Paul"} img={"sourav.jpg"} linkedin={"sourav-paul-10b22b261"} email={"04souravp@gmail.com"} />
          <Card name={"Subhadeep Chakraborty"} img={"subhadeep.jpeg"} linkedin={"subhadeep-chakraborty-353807222"} email={"sc2498112@gmail.com"} />
        </div>
      </React.Suspense>
    </section>
  )
}

export default Team
