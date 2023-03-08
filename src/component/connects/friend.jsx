import { Button, Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import { useState, useEffect } from 'react';
import Colabs from './colabs';
import Connect from './connect';

const Friends = () => {
    const connect = useConnects()
    return (
        <Card className='pt-4 ' shadow={false}>
            <CardHeader shadow={false} className='mx-1'>
                <Typography variant='lead'>Friends</Typography>
            </CardHeader>
            <CardBody className='px-2 pt-1'>
                {connect.map(({ name, catchphrase }) => <Connect key={name + catchphrase} name={name} catchphrase={catchphrase} />)}
            </CardBody>
        </Card> 
    );
}

export function useConnects() {
    const [connect, setconnect] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/friends')
            .then((res) => res.json())
            .then((tread) => setconnect(tread))
            .catch((err) => {
                console.error(err)
            });
    }, []);

    return connect
}
export default Friends;
