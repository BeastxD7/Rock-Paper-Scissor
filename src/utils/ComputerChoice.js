const ComputerChoice = () => {
  
    const choices = [{choice: 'rock', img: 'https://cdn.discordapp.com/attachments/1225854231169466539/1279337253889638421/pngtree-close-up-of-big-stone-isolated-big-rock-png-image_10211347.png?ex=66d4132a&is=66d2c1aa&hm=ab05fbc252b4c2c97e55fd0f3b3358f4c6002e5b290bc19dc3b972aa80272a06&'}, {choice: 'paper', img: 'https://cdn.discordapp.com/attachments/1225854231169466539/1279337553048375306/Pngtreeblue_checkered_notebook_paper_clipart_5903385.png?ex=66d41371&is=66d2c1f1&hm=1f62b2d1e4e18c2c6295c7b9929e89b63d8afc23eb63be1bc4cfec0ab34cd87b&'}, {choice: 'scissors', img: 'https://cdn.discordapp.com/attachments/1225854231169466539/1279337992829534238/Pngtreegray_scissors_hand-painted_scissors_beautiful_3870580.png?ex=66d413da&is=66d2c25a&hm=4d4cfb731ded035609f324f9a520d03c43807ff5f9a0f93e027f6cf3a9def804&'}];
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

export default ComputerChoice