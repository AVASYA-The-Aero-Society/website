'use client'
import React, { useState } from "react";
import Image from "next/image";

const Achievements = () => {
    const [index, setIndex] = useState(0);

    const achievements = [
        {
          image: '/Achievement.png',
          text: 'In research we focused on tackling complex problems.',
        },
        {
          image: '/Achievement.png',
          text: 'Our second achievement involves optimizing data structures.',
        },
        {
          image: '/Achievement.png',
          text: 'The third step was enhancing user experience through design.',
        },
        {
          image: '/Achievement.png',
          text: 'We improved algorithm efficiency in the fourth milestone.',
        },
        {
          image: '/Achievement.png',
          text: 'Finally, we ensured cross-platform compatibility in the last phase.',
        },
      ];
    const goToNext = () => {
        if (index < achievements.length - 1) {
            setIndex(index + 1);
        }
    };

    const goToPrevious = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };
    

  return (
    <div className="w-[1920px] flex pt-[184.5px] px-[198px] pb-[184.1px] justify-center items-center">
      <div className="flex w-[1524px] flex-col gap-16 shrink-0 items-center ">
        <div className="text-center font-archivo text-cgray text-[12px] font-[800] uppercase tracking-[0.48px] leading-normal">
          Achievements
        </div>
        <div className="flex flex-center gap-[24px] self-stretch">
          <div className="flex flex-col flex-start gap-[22px] w-[1078px]">
            <Image
              src={achievements[index].image}
              alt="achievement"
              width={1078}
              height={554.40}
              className="self-stretch object-cover"
            />
            <div className="flex items-center self-stretch justify-between">
              <div className="font-[900] text-[48px] leading-normal uppercase font-inter">
                 0{index + 1}/<span className="text-join">0{achievements.length}</span>
              </div>
              <div className="flex items-center gap-[13px]">
                <div className="flex h-12 py-0 px-3 justify-center items-center gap-2.5 rounded-sm bg-join hover:cursor-pointer" onClick={goToPrevious}>
                  <div className="font-archivo text-[14px] font-[800] text-cwhite uppercase " >
                    back
                  </div>
                </div>
                <div className="flex h-12 py-0 px-3 justify-center items-center gap-2.5 rounded-sm bg-join hover:cursor-pointer" onClick={goToNext}>
                  <div className="font-archivo text-[14px] font-[800] text-cwhite uppercase " >
                    next
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-[629px] p-12 flex-col items-start bg-join">
            <div className="font-archivo w-[326px] text-2xl font-[400] leading-normal tracking-[0.48px] text-cwhite self-stretch">
              {achievements[index].text}
            </div>
            <div className="self-stretch py-7 inline-flex flex-col justify-start items-start gap-2.5">
              <div className="self-stretch h-0 outline-1 outline-offset-[-0.50px] outline-white"></div>
            </div>
            <div className="w-80 justify-start text-white font-otameal text-lg font-normal leading-tight tracking-tight">
              &quot;Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
