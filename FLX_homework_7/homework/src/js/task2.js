
let question= confirm('Do you want to play a game?');
let maxnumber= 5;
let win = 0;
let maxwin = 10;
let count= 3;
while (question) { 
    const number = Math.floor(Math.random() *(5)) + 1;
    let curentwin= maxwin;
 while (count) {
let usernum= parseInt(prompt(`
            Enter a number from 0 to ${maxnumber}
            Attempts left: ${count}
            Total prize: ${win}
            Possible prize on curent attempt: ${curentwin}
            `, 0));
        if (usernum === number) { 
            win+= curentwin;
            maxnumber*= 2; 
            maxwin*= 3;
            count= 3;
            question= confirm("Congratulation! Your prize is ${win} Do you want to continue?");
            break;
        } else {  
            count--;
            curentwin= Math.floor(curentwin / 2);
        }
    }
        if (!question || !count) {
        alert("Thank you for a game. Your prize is ${win}");
        question = confirm("Do you want to play again?");
     maxwin= 10; 
        win= 0;
        count= 3;
        maxnumber= 5;
    }
} 
alert("You did not become a millionaire but You can");