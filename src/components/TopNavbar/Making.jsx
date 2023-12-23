import React, { lazy, Suspense } from "react";
import { getUrl } from '../../utils';

const Making = () => {
  return (
    <main>
      <React.Suspense fallback={<div>Loading...</div>}>
        <div id="fabrication">
          <h2 className='font-semibold mb-1 text-lg'>FABRICATION </h2>
          <p>Based upon our above calculations, wing Section, fuselage section, aerofoil section etc were fabricated using foam board.</p>
        </div>
        <div className='md:grid md:grid-cols-2 md:grid-rows-3 md:gap-5 2xl:grid-cols-3 2xl:grid-rows-2'>

          <div>
            <img
              className='w-80 shadow-lg rounded-lg mx-auto my-4'
              src={getUrl("IMG20231121155152.jpg")}
              alt="KADSS Image"
              loading="lazy"
            />
          </div>

          <div>
            <img
              className='w-80 shadow-lg rounded-lg mx-auto my-4'
              src={getUrl("IMG20231106173159.jpg")}
              alt="KADSS Image" loading="lazy"
            />
          </div>
          <div>
            <img
              className='w-80 shadow-lg rounded-lg mx-auto my-4'
              src={getUrl("IMG20231127173531_01.jpg")}
              alt="KADSS Image" loading="lazy"
            />
          </div>
          <div>
            <img
              className='w-80 shadow-lg rounded-lg mx-auto my-4'
              src={getUrl("IMG20231106173240.jpg")}
              alt="KADSS Image" loading="lazy"
            />
          </div>
          <div>
            <img
              className='w-80 shadow-lg rounded-lg mx-auto my-4'
              src={getUrl("kadss-working-1.jpg")}
              alt="KADSS Image" loading="lazy"
            />
          </div>
          <div>
            <img
              className='w-80 shadow-lg rounded-lg mx-auto my-4'
              src={getUrl("kadss-working-2.jpg")}
              alt="KADSS Image" loading="lazy"
            />
          </div>
        </div>
      </React.Suspense>
    </main>
  )
}

export default Making;
