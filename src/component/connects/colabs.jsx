import React from 'react';
import Colab from './colab';
import { useState, useEffect } from 'react';
import { Button, Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';

const Colabs = () => {
    const colab = useColabs()
    return (
        <>
            {/* <Card className='pt-4 ' shadow={false}> */}
            {/* <CardHeader shadow={false} className='mx-1'> */}
            <Typography variant='lead'>Colabs</Typography>
            {/* </CardHeader> */}
            {/* <CardBody className='px-2 pt-1'> */}
            {colab.slice(0, 5).map(({ name, catchphrase }) => <Colab name={name} catchphrase={catchphrase} key={name+catchphrase}/>)}
            <div className='flex justify-center items-center'>
                <Button color='blue' size='sm'>more</Button>
            </div>
            {/* </CardBody> */}
            {/* </Card> */}
        </>
    );
}

export function useColabs() {
    const [colab, setcolab] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/collabs')
            .then((res) => res.json())
            .then((tread) => setcolab(tread))
            .catch((err) => {
                console.error(err)
            });
    }, []);

    return colab
}
export default Colabs;
