/*
                                                                                                                                                                  
     ##### #     ##                           /                                               /###           /                     #######                        
  ######  /#    #### /                      #/          #                                    /  ############/                    /       ###                      
 /#   /  / ##    ###/                 #     ##         ###                                  /     #########                     /         ##                      
/    /  /  ##    # #                 ##     ##          #                                   #     /  #                          ##        #                       
    /  /    ##   #                   ##     ##                                               ##  /  ##                           ###                              
   ## ##    ##   #        /###     ######## ##  /##   ###     ###  /###        /###             /  ###            /###          ## ###           /##       /##    
   ## ##     ##  #       / ###  / ########  ## / ###   ###     ###/ #### /    /  ###  /        ##   ##           / ###  /        ### ###        / ###     / ###   
   ## ##     ##  #      /   ###/     ##     ##/   ###   ##      ##   ###/    /    ###/         ##   ##          /   ###/           ### ###     /   ###   /   ###  
   ## ##      ## #     ##    ##      ##     ##     ##   ##      ##    ##    ##     ##          ##   ##         ##    ##              ### /##  ##    ### ##    ### 
   ## ##      ## #     ##    ##      ##     ##     ##   ##      ##    ##    ##     ##          ##   ##         ##    ##                #/ /## ########  ########  
   #  ##       ###     ##    ##      ##     ##     ##   ##      ##    ##    ##     ##           ##  ##         ##    ##                 #/ ## #######   #######   
      /        ###     ##    ##      ##     ##     ##   ##      ##    ##    ##     ##            ## #      /   ##    ##                  # /  ##        ##        
  /##/          ##     ##    ##      ##     ##     ##   ##      ##    ##    ##     ##             ###     /    ##    ##        /##        /   ####    / ####    / 
 /  #####               ######       ##     ##     ##   ### /   ###   ###    ########              ######/      ######        /  ########/     ######/   ######/  
/     ##                 ####         ##     ##    ##    ##/     ###   ###     ### ###               ###         ####        /     #####        #####     #####   
#                                                  /                                ###                                      |                                    
 ##                                               /                           ####   ###                                      \)                                  
                                                 /                          /######  /#                                                                           
                                                /                          /     ###/                                                                             
*/

const handleSoundClick = (btn, audioEl, loop) => {
  if (!audioEl) return;

  // LOOPING LOGIC
  audioEl.currentTime = 0;

  //handle looping
  if (loop) {
    // manage loop state
    if (audioEl.loop === true) {
      audioEl.loop = false;
      audioEl.pause();
      //btn.classList.remove('pressed');
    } else {
      audioEl.loop = true;
      audioEl.play();
      // btn.classList.add('pressed');
    }
  } else {
    //standard play
    audioEl.play();
    //btn.classList.add('pressed');
    btn.classList.toggle('pressed');
    setTimeout(() => {
      btn.classList.toggle('pressed');
    }, 2000);
  }
};

const buttons = document.querySelectorAll('.key-button');

if (buttons?.length > 0) {
  [...buttons].map((btn) => {
    btn.addEventListener('click', (e) => {
      console.log('clicked');
      const btn = e.target.closest('button');
      const keyVal = btn?.getAttribute('data-key') || 0;
      const isLoop = btn?.getAttribute('data-loop') || false;
      const audio = document.querySelector(`audio[data-Key="${keyVal}"]`);
      console.log('keval and audio element', keyVal, isLoop, audio);
      handleSoundClick(btn, audio, isLoop);
    });
  });
}
