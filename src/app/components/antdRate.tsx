import React, { useState } from 'react';
import { Flex, Rate, Input } from 'antd';
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const { TextArea } = Input;

const Rating = () => {
  const [value, setValue] = useState(5);
  return (<div className='flex justify-evenly'>
    <div className=''>
    <Flex gap="middle" vertical>
        {/* <h1 className=' text-black text-lg '>Rate Us !</h1> */}
      <Rate tooltips={desc} onChange={setValue} value={value} />
      {value ? <h1 className='text-gray-900 text-lg '>{desc[value - 1]}</h1> : null}
    </Flex>
    </div>
    <div>
        <h1 className=' text-black text-lg pb-2' >Enter your feedback</h1>

    <TextArea className=' border border-purple-600 w-64' placeholder='Enter your feedback here.'></TextArea>

    </div>
  </div>
    
  );
};
export default Rating;