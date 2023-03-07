import React, { useState } from 'react';
import { Avatar, Button, Card, Dialog, DialogBody, DialogFooter, DialogHeader, IconButton, Input, Popover, Textarea, Tooltip } from '@material-tailwind/react';
import { GiSpring } from 'react-icons/gi';
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from 'react-icons/ai';
import noImg from '../../../noImage';
import RichTextEditor from './richtexteditor';
import { Link } from 'react-router-dom';

const Fabric = () => {
    const [fullscreen, setFullscreen] = useState(false);
    const [fabric, setFabric] = useState('');

    return (
        <>
            <Card className='flex gap-2 items-center flex-row w-full md:w-4/5 max-w-md m-auto p-4 rounded-lg bg-white my-4'>
                <Avatar src={noImg} className='col-span-1' size='sm' />
                <div className='flex-grow relative'>
                    <Textarea className='h-auto min-h-min max-h-36 overflow-hidden' variant='standard' />
                    <div className='absolute right-0 top-1/2 -translate-y-1/2'>
                        <Tooltip content='tread' placement='right-end' >
                            <>
                                <Link className='md:hidden' to='/fabric'>
                                    <IconButton variant='filled' size='sm' onClick={() => { setFullscreen(true) }}>
                                        <GiSpring className='text-dark' />
                                    </IconButton>
                                </Link>
                                <IconButton variant='filled' size='sm' onClick={() => { setFullscreen(true) }} className='hidden md:flex'>
                                    <GiSpring className='text-dark' />
                                </IconButton>
                            </>
                        </Tooltip>
                    </div>
                    <div className='absolute left-0 top-0'>
                        <Tooltip content='fullscreen' placement='right-end' >
                            <>
                                <Link className='md:hidden' to='/fabric'>
                                    <IconButton variant='text' size='sm' onClick={() => { setFullscreen(true) }}>
                                        <AiOutlineFullscreen className='text-dark' />
                                    </IconButton>
                                </Link>
                                <IconButton variant='text' size='sm' onClick={() => { setFullscreen(true) }} className='hidden md:flex'>
                                    <AiOutlineFullscreen className='text-dark' />
                                </IconButton>
                            </>
                        </Tooltip>
                    </div>
                </div>
            </Card>
            <Dialog open={fullscreen}>

                <DialogBody>
                    <Card className='p-2 gap-2 h-fit ' >
                        <div className='w-full justify-end flex '>
                            <IconButton variant='text' size='sm' className='flex justify-end w-full' onClick={() => { setFullscreen(false) }}>
                                <AiOutlineFullscreenExit className='text-dark' />
                            </IconButton>
                        </div>
                        <Input label='Name' />
                        {/* <div className='h-60'> */}
                        <RichTextEditor />

                        {/* </div> */}
                        {/* <Textarea label='Fabricate' labelProps={{ variant: 'lead' }} className=' h-60 overflow-hidden'></Textarea> */}
                        {/* <Input type='file'/>  */}
                        <IconButton variant='filled' size='sm'>
                            <GiSpring className='text-dark' />
                        </IconButton>
                    </Card>
                </DialogBody>
                {/* <DialogFooter>
                    <Tooltip content='confirm tread' placement='right-end' className='z-auto' >
                    </Tooltip>X
                </DialogFooter> */}
            </Dialog>
        </>
    );
}

export default Fabric;
