import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    IconButton,
    Textarea,
    Input,
    Button,
    Tooltip,
} from "@material-tailwind/react";
import { AiOutlineFileAdd } from 'react-icons/ai';
import { GiEchoRipples, GiSpring } from 'react-icons/gi';
import noImg from '../../../noImage';
import applaud from '../../svg/tread.svg?url'

const Tread = ({ image, poem, date, name, authour, applauds, treads, echos }) => {
    return (
        <Card className='w-full md:w-4/5 max-w-md m-auto p-4 rounded-lg bg-white my-4'>
            <div className='flex gap-2'>
                <Avatar src={image} alt={authour} className='shadow' variant='circular' />
                <div className='flex flex-col'>
                    <Typography variant="h6">{authour}</Typography>
                    <Typography variant="small" className='ml-2'>{date}</Typography>
                </div>
            </div>
            <CardBody className=''>
                <Typography variant='lead'>{name}</Typography>
                <Typography variant='paragraph'>{poem}</Typography>
                <div className='flex justify-between my-2' >
                    <Typography variant='small' className='flex items-center'>
                        <img src={applaud} />
                    </Typography>
                    <div className='flex gap-1'>
                        <Typography variant='small' className='flex items-center'>
                            <GiSpring /> {treads} treads
                        </Typography>
                        <Typography variant='small' className='flex items-center'>
                            <GiEchoRipples /> {echos} echo
                        </Typography>
                    </div>
                </div>
            </CardBody>
            <CardFooter divider>
                <div className='flex justify-between'>
                    <IconButton variant='text' className='flex justify-center items-center w-full'>
                        <img src={applaud} />
                    </IconButton>
                    <IconButton variant='text'>
                        <AiOutlineFileAdd className='w-8 h-8 text-dark' />
                    </IconButton>
                    <IconButton variant='text'>
                        <GiEchoRipples className='w-8 h-8 text-dark' />
                    </IconButton>
                    <IconButton variant='text'>
                        <GiSpring className='w-8 h-8 text-dark' />
                    </IconButton>
                </div>
                <div className='flex gap-2 items-center'>
                    <Avatar src={noImg} className='col-span-1' size='sm' />
                    <div className='flex-grow relative'>
                        {/* <Input variant='standard' /> */}
                        <Textarea className='h-auto min-h-min max-h-36 overflow-hidden' variant='standard' />
                        <div className='absolute right-0 top-1/2 -translate-y-1/2'>
                            {/* <Button>Tread</Button> */}
                            <Tooltip content='tread' placement='right-end' >
                                <IconButton variant='filled' size='sm'>
                                    <GiSpring className='text-dark' />
                                </IconButton>
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
}

export default Tread;
