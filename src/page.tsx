import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SubHome from '@/components/SubHome';
import React from 'react'
import Achievements from '@/components/Achievements';

const Home = async () => {

  await new Promise((resolve) => setTimeout(resolve, 5000));


  return (
    <div className=' text-cwhite'>

      {/* navigation bar */}
      <header className='sticky top-0 z-50'>
        <Navbar />
      </header>
      <div>
        {/* home page */}
        <section>
          <Hero />
        </section>
        <section className='overflow-hidden'>
          <SubHome />
          <Achievements />
        </section>
      </div>
    </div>
  )
}

export default Home
