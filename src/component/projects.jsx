import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from "swiper";
import "swiper/css/navigation";
// import profile from '../asserts/profile 4.jpg'
import { Link } from 'react-router-dom';


const Projects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/projects')
        .then((res) => res.json())
        .then((projects) => setProjects(projects))
        .catch((e) => { console.error(e) })
    },[])
    return (
        <div className='my-6 font'>
            <span className='font-bold'> <Link to={'/project'}> Projects </Link> </span>
            <Swiper spaceBetween={50}
                slidesPerView={1} modules={[Navigation]} centeredSlides={true} loop breakpoints={{
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
                    projects
                        .map((project) => <SwiperSlide key={project.name}>
                            <div className='p-4'>
                                <div>
                                    <img src={'/asserts/image/projects/fespace.png'} alt="" className=' rounded grayscale-[35%] hover:grayscale-0' />
                                </div>
                                <div className='my-2'>
                                    <span className='font-bold text-lg'>{project.name}</span>
                                    <ReadMore main={project.description.main} more={project.description.more} />
                                </div>
                            </div></SwiperSlide>)
                }
            </Swiper>
        </div >
    )
}

export default Projects;

const ReadMore = ({ main, more, className }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <p className={className}>
            {main}
            {expanded ? (
                <>
                    {more}
                    <a
                        className="text-dark underline hover:text-black"
                        onClick={() => setExpanded(!expanded)}
                    >
                        .  Read Less
                    </a>
                </>
            ) : (
                <>
                    ...
                    <a
                        className="text-dark underline hover:text-black"
                        onClick={() => setExpanded(!expanded)}
                    >
                        Read More
                    </a>
                </>
            )}
        </p>
    );
};
