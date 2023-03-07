import { Card, CardBody, Typography, Avatar } from '@material-tailwind/react';
import React from 'react';
import noImg from '../../../noImage';

const Message = ({ chat: { members = [], messages } }) => {
    const { text, senderId } = messages[messages.length - 1];
    const name = members.find((member) => member.id === senderId).name

    // return (
    //     <CardBody className='flex-row flex items-center gap-2 my-2 mx-2'>
    //         <div className="flex flex-row gab-2">
    //             <Avatar size='sm' variant='circular' src={'/asserts/image/profile/profile 3.JPG'} className='object-top' />
    //             <div className="flex flex-col">
    //                 <Typography >{name}</Typography>
    //                 <Typography >{text}</Typography>
    //             </div>
    //         </div>
    //     </CardBody>
    // );
    return <div className="flex items-center justify-between p-4 bg-white hover:bg-gray-100 cursor-pointer">
          <div className="flex items-center gap-2">
            <Avatar src={'/asserts/image/profile/profile 3.JPG'} alt={name} />
            <div>
              <Typography variant="h5" fontWeight="medium">
                {name}
              </Typography>
              <Typography variant="body" color="textSecondary" className='truncate whitespace-normal text-sm'>
                {truncateText(text,50)}
              </Typography>
            </div>
          </div>
          <div className="text-right">
            <Typography variant="caption" color="textSecondary">
                2:05
            </Typography>
            <span className="bg-transparent border border-shade p-2 rounded-full w-3 h-3 text-sm flex items-center justify-center text-dark  mt-1">2</span>
          </div>
        </div>
      
    
    
}

export default Message;

function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength - 3) + "...";
  }
  