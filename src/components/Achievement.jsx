import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Achievement = () => {

    const [index, setIndex] = useState(0);
    const cursorRef = useRef(null);
    const achievementRef = useRef(null);

    

    const cursorMove = (e) => {
      const rect = achievementRef.current.getBoundingClientRect();
      const cursor = cursorRef.current;
      const cursorWidth = cursor.offsetWidth;
      const cursorHeight = cursor.offsetHeight;

      gsap.to(cursor, {
        scale: 1.5,
        x: e.clientX - rect.left - cursorWidth / 2 - 760,
        y: e.clientY - rect.top - cursorHeight / 2,
        opacity: 1,
        duration: 0.5,
        // ease: 'power2.out'
      });
};

    const cursorLeave = (e) =>{
      gsap.to(cursorRef.current,{
        opacity:0
      })
      // cursorRef.current.style.opacity = 0;

    }

    const achievements = [
        {
          image: './Achievement.png',
          text: 'In research we focused on tackling complex problems.',
        },
        {
          image: './Achievement.png',
          text: 'Our second achievement involves optimizing data structures.',
        },
        {
          image: './Achievement.png',
          text: 'The third step was enhancing user experience through design.',
        },
        {
          image: './Achievement.png',
          text: 'We improved algorithm efficiency in the fourth milestone.',
        },
        {
          image: './Achievement.png',
          text: 'Finally, we ensured cross-platform compatibility in the last phase.',
        },
      ];

      const goToNext = () => {
        if (index < achievements.length - 1) {
          setIndex(index + 1);
        }
      };
    
      // Function to handle the "Back" button click
      const goToPrevious = () => {
        if (index > 0) {
          setIndex(index - 1);
        }
      };
    
  return (
    <div ref={achievementRef} id='achievement' className='flex justify-center items-center flex-col pb-4' onMouseMove={cursorMove} onMouseLeave={cursorLeave}>
      <div ref={cursorRef} className='rounded-2xl w-5 h-5 bg-white/65 opacity-0 pointer-events-none ' id='circularCurosr'></div>
        <div id='achievementSection' className='font-bold text-gray-600 p-7 text-2xl uppercase' >Achievements</div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1'>
            <div className='col-span-2'>
                <img src={achievements[index].image} alt="achievement" className='px-3' />
                <div className='px-3 flex justify-between'> 
                    <div className='number font-bold text-4xl'>
                        0{index + 1}/<span className="text-gray-600">0{achievements.length}</span>
                    </div>
                    <div className='flex gap-2'>
                        <div className='text-sm font-bold bg-[#2D2D2D] border border-[#2D2D2D] mt-1.5 py-2 px-1.5 hover:bg-white hover:text-black hover:cursor-pointer transition' onClick={goToPrevious}>Back</div>
                        <div className='text-sm font-bold bg-[#2D2D2D] border border-[#2D2D2D] mt-1.5 py-2 px-1.5 hover:bg-white hover:text-black hover:cursor-pointer transition' onClick={goToNext}>Next</div>
                    </div>
                </div>
            </div>
            <div className='bg-[#2D2D2D] col-span-1 md:justify-self-center md:col-span-2 lg:col-span-1 p-13 sm:m-4 md:m-0'>
                <div className='md:w-85 flex-col'>
                    <div className='text-[1.5rem] border-white border-b-2 pb-5'>{achievements[index].text}</div>
                    <div className='mt-5 text-[12px] overflow-clip'>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</div>
                    
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Achievement