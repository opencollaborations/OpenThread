import { Avatar, Card, Tooltip, Typography } from '@material-tailwind/react';
import React from 'react';
import noImg from '../../../noImage';

const Connect = ({ name, catchphrase }) => {
    return (
        <Tooltip content={catchphrase}>
            <Card shadow={false} variant='gradient' className='flex flex-row items-center gap-4 my-2 bg-white rounded p-1 hover:shadow'>
                <Avatar src={noImg} size='md' />
                <Typography variant='paragraph'>{name}</Typography>
                {/* </div> */}
            </Card>
        </Tooltip>
    );
}

export default Connect;
