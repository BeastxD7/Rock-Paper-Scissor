import { useState } from 'react'
import React  from 'react'
// import ComputerChoice from '../utils/ComputerChoice'

const Output = ({ComputerChoice}) => {

  // console.log(ComputerChoice.choice);
  

const [choice , SetChoice] = React.useState({choice: 'question', img: 'https://cdn.discordapp.com/attachments/1225854231169466539/1279344916039995492/thoughtful-woman-with-laptop-looking-big-question-mark.png?ex=66d41a4d&is=66d2c8cd&hm=a943087824b19b3cb6f226fcb057593dead49e97e79e236e8286f0bd0da904d5&'})
    
  return (
    <>
    <div className='h-[50%]  p-5 lg:p-10 rounded-lg  lg:h-[100%] lg:w-[50%]'>

<h1 className=' poppins-semibold text-center text-[1.3rem] py-3'>Computer</h1>
<div className='bg-gradient-to-r from-purple-200 to-purple-800  overflow-hidden h-[80%] rounded-lg'>
    <div className=' flex h-full w-full items-center justify-center'>
    <img
      className="h-64 lg:h-96"
      src={ ComputerChoice.img||choice.img} alt={choice.choice}
    />
    </div>
</div>

</div>
    </>
  )
}

export default Output