import { Card, CardBody, CardHeader } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import noImg from '../../../noImage';
import Tread from '../../component/Tread';
import { useTreads } from '../Home';

const Profile = () => {
    const { cover_quote,treads } = useProfileInfo()
    const tread = useTreads()

    return (
        <section className='w-full overflow-auto'>
            <Card>
                <CardHeader className='mt-0 w-full md:w-4/5 max-w-md m-auto p-4 rounded-lg bg-white my-4'><img src={"http://localhost:3001?text=" + cover_quote} alt="favourite qoute" className='object-cover w-full' /></CardHeader>
                <CardBody>
                    {!!tread.length && treads && treads.map((i) => {
                        console.log(`tread[i]`, tread[i]);
                        const { name, date, poem, author, applauds, treads, echos } = tread[i]
                        return <Tread key={name + date + poem} image={noImg} name={name} date={date} poem={poem} authour={author} id={0} applauds={applauds} treads={treads} echos={echos} />
                    })}
                </CardBody>
            </Card>
        </section>
    );
}

export default Profile;

export function useProfileInfo() {
    const { id } = useParams()
    const [profile_info, setprofile_info] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/profile')
            .then((res) => res.json())
            .then((tread) => setprofile_info(tread[id || 0]))
            .catch((err) => {
                console.error(err)
            });
    }, []);
    return profile_info
}