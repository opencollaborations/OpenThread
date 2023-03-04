import { Card, Input, Textarea } from '@material-tailwind/react';
import React from 'react';

const Collab = () => {
    return (
        <section>
            <Card className='p-2 gap-2' >
                <Input label='comments'/>
                <Textarea label='fabricate'  labelProps={{variant:'lead'}} className=' h-60 overflow-hidden'></Textarea>
                
            </Card>
        </section>
    );

}

export default Collab;
