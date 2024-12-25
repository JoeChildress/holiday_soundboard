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
    } else {
      audioEl.loop = true;
      audioEl.play();
    }
  } else {
    audioEl.play();
    btn.classList.toggle('pressed');
    setTimeout(() => {
      btn.classList.toggle('pressed');
    }, 1500);
  }
};

const buttons = document.querySelectorAll('.key-button');

if (buttons?.length > 0) {
  [...buttons].map((btn) => {
    btn.addEventListener('click', (e) => {
      const btn = e.target.closest('button');
      const keyVal = btn?.getAttribute('data-key') || 0;
      const isLoop = btn?.getAttribute('data-loop') || false;
      const audio = document.querySelector(`audio[data-Key="${keyVal}"]`);
      if (isLoop) {
        btn.classList.toggle('pressed');
      }
      handleSoundClick(btn, audio, isLoop);
    });
  });
}
