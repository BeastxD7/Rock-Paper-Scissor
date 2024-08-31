import React from 'react'
import Output from './Output'
import ComputerChoice from '../utils/ComputerChoice'

const choice = [{choice: 'rock', img: 'https://cdn.discordapp.com/attachments/1225854231169466539/1279337253889638421/pngtree-close-up-of-big-stone-isolated-big-rock-png-image_10211347.png?ex=66d4132a&is=66d2c1aa&hm=ab05fbc252b4c2c97e55fd0f3b3358f4c6002e5b290bc19dc3b972aa80272a06&'}, {choice: 'paper', img: 'https://cdn.discordapp.com/attachments/1225854231169466539/1279337553048375306/Pngtreeblue_checkered_notebook_paper_clipart_5903385.png?ex=66d41371&is=66d2c1f1&hm=1f62b2d1e4e18c2c6295c7b9929e89b63d8afc23eb63be1bc4cfec0ab34cd87b&'}, {choice: 'scissors', img: 'https://cdn.discordapp.com/attachments/1225854231169466539/1279337992829534238/Pngtreegray_scissors_hand-painted_scissors_beautiful_3870580.png?ex=66d413da&is=66d2c25a&hm=4d4cfb731ded035609f324f9a520d03c43807ff5f9a0f93e027f6cf3a9def804&'}];

const Menu = () => {

    const [userChoice , setUserChoice] = React.useState({
        choice: 'question', img: 'https://cdn.discordapp.com/attachments/1225854231169466539/1279344916039995492/thoughtful-woman-with-laptop-looking-big-question-mark.png?ex=66d41a4d&is=66d2c8cd&hm=a943087824b19b3cb6f226fcb057593dead49e97e79e236e8286f0bd0da904d5&'    
    })

    const [computerChoice , setcomputerChoice] = React.useState("")
    const handleUserChoice = (e) => {
        setUserChoice(choice[e.target.value])
        setcomputerChoice(ComputerChoice())
        // console.log(`userChoice`, userChoice);
        
    }

  return (
    <section className='h-[89%] sm:h-[90%]  w-full flex items-center justify-center'>
        <div className=' overflow-hidden lg:flex lg:gap-10 w-[90%] h-[90%] rounded-lg'>
            <Output ComputerChoice= {computerChoice}/>
            <div className='h-[50%] lg:w-[50%] p-5 lg:p-10 rounded-lg  lg:h-[100%] '>

                <h1 className='hidden lg:block text-[1.3rem] text-center poppins-semibold py-3'>User</h1>

                <div className='bg-gradient-to-l from-purple-200 to-purple-800 h-[80%] rounded-lg overflow-hidden'>
                <div className=' flex h-full w-full items-center justify-center'>
                    <img className='h-64 lg:h-96' src={userChoice.img} alt={userChoice.choice} />
                    </div>
                </div>

                <h1 className='lg:hidden text-[1.3rem] text-center poppins-semibold py-3'>User</h1>

                <div className='w-full flex justify-center lg:py-10'>
                <button type="button" value="0" onClick={handleUserChoice} className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Rock</button>

                <button type="button" value="1" onClick={handleUserChoice} className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Paper</button>

                <button type="button" value="2" onClick={handleUserChoice} className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Scissor</button>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Menu