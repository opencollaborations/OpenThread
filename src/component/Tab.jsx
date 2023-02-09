import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Tab = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [swiper, setSwiper] = useState(null);
  useEffect(() => {
    if(!swiper) return
    swiper.slideTo(selectedTab, 300)
  }, [selectedTab,swiper]);
  return (
    <div className="flex flex-col">
      <div className="w-full border-shade flex">
        <Swiper spaceBetween={50}
          slidesPerView={1}
          centeredSlides={true} 
          onInit={setSwiper}
          loop
           breakpoints={{
            // when window width is >= 320px
            620: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            // when window width is >= 480px
            780: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            // when window width is >= 640px
            1240: {
              slidesPerView: 4,
              spaceBetween: 40
            }
          }
          } >
          {
            tabs
              .map((tab,i) => <SwiperSlide key={tab.name} className={`cursor-pointer py-2 px-4 ${selectedTab === i ? 'bg-shade' : ''}`}
                onClick={() => {setSelectedTab(i);}
                } >{tab.name}
              </SwiperSlide>)
          }
        </Swiper>
      </div>
      <div className="w-full p-4">
        {tabs[selectedTab].tab}
      </div>
    </div>
  );
};

export default Tab;
