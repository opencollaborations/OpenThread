import React, { useEffect, useState } from 'react';
import Projects from '../component/projects';
import Tab from '../component/Tab';
import Tread from '../component/Tread';
import noImg from '../../noImage';
import Fabric from './../component/fabric';
// import profile from './../asserts/image/profile/profile_3 bgremove.png'
// import companys from './../asserts/image/companys/*.jpg'

const Home = () => {
    const treads = useTreads()
    // console.log(tabs)
    return (
        <section className='w-full overflow-auto'>
            <Fabric />
            {treads.map(({ name, date, poem, author, applauds, treads, echos }, i) => <Tread key={name + date + poem} image={noImg} name={name} date={date} poem={poem} authour={author} id={0} applauds={applauds} treads={treads} echos={echos} />)}
        </section>
    );
}

export default Home;

export function useTreads() {

    const [treads, setTreads] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/treads')
            .then((res) => res.json())
            .then((tread) => setTreads(tread))
            .catch((err) => {
                console.error(err)
            });
    }, []);

    return treads
}