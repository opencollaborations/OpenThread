import React, { useEffect, useState } from 'react';
import Projects from '../component/projects';
import Tab from '../component/Tab';
// import profile from './../asserts/image/profile/profile_3 bgremove.png'
// import companys from './../asserts/image/companys/*.jpg'

const Home = () => {
    const tabs = useCompany()
    console.log(tabs)
    return (
        <div className=''>
            <div className='w-full flex flex-row justify-center my-4 relative'>
                <img src={'asserts/image/profile/profile_3 bgremove.png'} alt="" className='grayscale-[75%]' />
                <div className='absolute w-full h-1/4 bottom-0 bg-gradient-to-t    from-white/30'></div>
            </div>
            {/* what i know */}
            <div>
                {['tailwind', 'nodejs', 'expressjs', 'mogoose', 'reacct'].map((skill, i) => <div className='w-full mb-3 flex items-center gap-1' key={skill}>
                    <div className={'before:content-[""] before:w-full before:absolute before:bg-dark before:h-1 after:content-[""] after:w-2 after:h-2 after:absolute after:right-0 after:top-1/2 after:rounded-full after:bg-dark h-1 before:rounded-r  relative after:-translate-y-1/2'} style={{ width: ((1 - (i / 5)) * 0.8) * 100 + '%' }}></div>
                    <span>{skill}</span>
                </div>)}
            </div>
            {/* worksed projects */}
            <Projects />
            {/* timeline */}
            <div>
                <span className='font-bold'>Timeline</span>
                {tabs.length && <Tab tabs={tabs} />}
            </div>
            {/* about */}
            <div>
                <span className='font-bold'>About Me</span>
                <p>
                    Hi, I'm Olatunde Marvelous Anthony, a professional web developer with 3 years of experience in the field. I specialize in the MERN stack and have a strong understanding of Tailwind CSS. Additionally, I have expertise in machine learning and have successfully integrated it into several projects.

                    I am passionate about creating innovative and user-friendly web applications. I take pride in delivering high-quality work and always aim to exceed client expectations. With my technical skills, creativity, and attention to detail, I am confident in my ability to bring any project to life.
                </p>
            </div>
            {/* education */}
        </div>
    );
}

export default Home;

function useCompany() {

    const [companys, setCompanys] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/tabs')
            .then((res) => res.json())
            .then((company) => setCompanys(company))
            .catch((err) => {
                console.error(err)
            });
    }, []);

    return companys.map(({ company: name, company_description }) => ({
        name, tab: <p>
            {company_description}
        </p>
    }))
}