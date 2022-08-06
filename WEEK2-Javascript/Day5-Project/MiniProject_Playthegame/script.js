function compareNumbers(userNumber,computerNumber) {
	for (let i=0; i<3; i++)	{
		if (userNumber == computerNumber) {
			alert('WINNER');
			return;
		} else if (userNumber > computerNumber) {
			userNumber = prompt("Your number is bigger then the computer's, guess again");
		} else {
			userNumber = prompt("Your number is smaller then the computer's, guess again");
		}
	}
	alert('out of chances, You Lose!');
 }

function playTheGame() {
	let question = confirm('would you like to play the game?'); 
	if (question == true)  {
		let num=parseInt(prompt('Throw me a number from 1 to 10'));

		if (isNaN(num) == true) {
			alert('Sorry not a number, bye');
			return;

		} else if (num < 0 || num > 10) {
			alert('Sorry not a GOOD number bye');
			return;
		}
		
		let computerNumber=parseInt(Math.random()*11);
		compareNumbers (num,computerNumber);
	}
	else {
		alert('No problem, goodbye');
		return;
	}
 }
