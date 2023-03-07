import { Card, IconButton, Input } from '@material-tailwind/react';
import React from 'react';
import { AiOutlineArrowLeft, AiOutlineBackward, AiOutlineFullscreenExit } from 'react-icons/ai';
import { GiSpring } from 'react-icons/gi';
import { useLocation } from 'react-router-dom';
import RichTextEditor from './richtexteditor';


const MobileFabric = () => {
    return (
        <section>
            <Card className='p-2 gap-2 h-fit ' >
                <div className=' flex '>
                    <Link to='/'>
                        <IconButton variant='text' size='md' className='flex justify-end w-full'>
                            <AiOutlineArrowLeft className='text-dark' />
                        </IconButton>
                    </Link>
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
        </section>
    );
}

export default MobileFabric;
