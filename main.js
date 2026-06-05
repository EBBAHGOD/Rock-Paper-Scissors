//  1 .user input function
//  2. computer input function
    // 3. score variable to check Scores 
    // 4. Round status check 
    // 5. Print winner
    
/// Haha this is a very simple game of Rock Paper Scissors
// a reference to all the button nodes
const buttons=document.querySelectorAll('button');
const data={'user_score':0,'comp_score':0,'draw':0 ,'round':0}

 
//an event listener on all buttons that calls the userscore function and passes the user option to it

const option_weight={'scissors':3,'rock':1,'paper':2};
const ICONS = { rock: '🪨', paper: '📄', scissors: '✂️' };


function getComputer_option()
{ const options=['rock','paper','scissors'];         // the list of options the computer can choose from
    let i= Math.floor(Math.random()*(options.length)); // generate a random number between zero and the lenght of the option list.
    return options[i];                       //use the random number to select from the option list
}






function playgame(user_option){
    const comp_option=getComputer_option()
    if ( (option_weight[user_option]-option_weight[comp_option]+3) %3==1) 
    { 
    data.user_score++;
    document.getElementById('resultMsg').innerText='You won'
    }

    else if ( (option_weight[user_option]-option_weight[comp_option]+3) %3==2)
    {
     data.comp_score++;
    document.getElementById('resultMsg').innerText='You lost'
    }
    else{
        data.draw++;
        document.getElementById('resultMsg').innerText="Draw"}



    data.round++
    document.getElementById('cpuScore').innerText=data['comp_score'];
    document.getElementById('userScore').innerText=data['user_score'];
    document.getElementById('userChoice').innerText=ICONS[user_option];
    document.getElementById('cpuChoice').innerText=ICONS[comp_option];
    document.getElementById('roundCount').innerText=data['round'];
    document.getElementById('winCount').innerText=data['user_score']
    document.getElementById('lossCount').innerText=data['comp_score'] 
    document.getElementById('drawCount').innerText=data['draw'] 

   
    






}

//    //if the user's option score is higher than computer's increase user score by one else computer's score by one
//    (user_option_score>computer_option_score)? user_score+=1 :computer_score+=1;
//    // retrieve the element to display the user score
//    document.getElementById('user_score_print').textContent=user_score;
//    //retrive the element to display the computers score
//    document.getElementById('computer_score_print').textContent=computer_score;
//    alert(`computer option is ${computer_option} with score of ${computer_option_score} and the user option is ${user_option} with a score of ${user_option_score}`)
//     // (computer_option_score>user_option_score)? alert(`Computer won. computer option was ${comp_option} and user option was ${user_option}`): ( (user_option_score>computer_option_score) ? alert(`user won. user option was ${user_option} and computer option was ${comp_option}`):alert(`its a tie user option was ${user_option} and computer option was ${comp_option}`))
    
// }
// else{

// (user_score>computer_score)? document.getElementById('result').textContent="Congratulations You won" :document.getElementById('result').textContent="Sorry You Lost!"
// }
// }



// // an event listener that calls the playgame function whenever a button is clicked and pass the button id(which also is the choice ) as ab argument to the funtion
// buttons.forEach((button)=>{button.addEventListener('click',()=> {playgame(button.id)} )})
