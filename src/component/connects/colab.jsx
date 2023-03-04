import React from 'react';
import { Avatar, Button, Card, CardBody, CardHeader, Tooltip, Typography } from '@material-tailwind/react';
import noImg from '../../../noImage';


const Colab = ({name,catchphrase }) => {
    return (
        <Tooltip content={catchphrase}>
            <Card shadow={false} variant='gradient' className='flex flex-row items-center gap-4 my-2 bg-white rounded p-1 hover:shadow'>
                <Avatar src={noImg} size='md' />
                <Typography variant='paragraph'>{name}</Typography>
            </Card>
        </Tooltip>
    );
}

export default Colab;
