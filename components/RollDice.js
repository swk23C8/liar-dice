import { useEffect, useState, useRef } from 'react';
import Image from 'next/image'
import { render } from 'react-dom';



const DieOne = () => (
	<Image
		src={"/images/die-1.png"}
		height={50}
		width={50}
		alt="die-1 image"
	/>
)
const DieTwo = () => (
	<Image
		src={"/images/die-2.png"}
		height={50}
		width={50}
		alt="die-2 image"
	/>
)
const DieThree = () => (
	<Image
		src={"/images/die-3.png"}
		height={50}
		width={50}
		alt="die-3 image"
	/>
)
const DieFour = () => (
	<Image
		src={"/images/die-4.png"}
		height={50}
		width={50}
		alt="die-4 image"
	/>
)
const DieFive = () => (
	<Image
		src={"/images/die-5.png"}
		height={50}
		width={50}
		alt="die-5 image"
	/>
)
const DieSix = () => (
	<Image
		src={"/images/die-6.png"}
		height={50}
		width={50}
		alt="die-6 image"
	/>
)
let currentPlayer = 1;
export default function RollDice() {
	// total dice count for each player
	const [diceCount, setDiceCount] = useState({
		one: 0,
		two: 0,
		three: 0,
		four: 0,
		five: 0,
		six: 0
	});

	// player 1 variables
	const [rollHistory1, setrollHistory1] = useState({
		die1_1: [],
		die1_2: [],
		die1_3: [],
		die1_4: [],
		die1_5: []
	});
	const [die1_1, setDie1_1] = useState();
	const [die1_2, setDie1_2] = useState();
	const [die1_3, setDie1_3] = useState();
	const [die1_4, setDie1_4] = useState();
	const [die1_5, setDie1_5] = useState();
	var dice1 = [die1_1, die1_2, die1_3, die1_4, die1_5];
	const diceRef1 = useRef(null);

	const [player1BetDie, setPlayer1BetDie] = useState({
		numberOfDice: 0,
		dieFace: 0
	});

	const [player2BetDie, setPlayer2BetDie] = useState({
		numberOfDice: 0,
		dieFace: 0
	});


	// player 2 variables
	const [rollHistory2, setrollHistory2] = useState({
		die2_1: [],
		die2_2: [],
		die2_3: [],
		die2_4: [],
		die2_5: []
	});
	const [die2_1, setDie2_1] = useState();
	const [die2_2, setDie2_2] = useState();
	const [die2_3, setDie2_3] = useState();
	const [die2_4, setDie2_4] = useState();
	const [die2_5, setDie2_5] = useState();
	var dice2 = [die2_1, die2_2, die2_3, die2_4, die2_5];

	const diceRef2 = useRef(null);

	// function for player 1 rolling dice
	function rollDice1() {
		currentPlayer = 1;
		for (let i = 0; i < 5; i++) {
			let roll6 = Math.floor(Math.random() * 6) + 1;
			dice1[i] = roll6;
		}
		setDie1_1(dice1[0]);
		setDie1_2(dice1[1]);
		setDie1_3(dice1[2]);
		setDie1_4(dice1[3]);
		setDie1_5(dice1[4]);
		setrollHistory1({
			die1_1: [...rollHistory1.die1_1, dice1[0]],
			die1_2: [...rollHistory1.die1_2, dice1[1]],
			die1_3: [...rollHistory1.die1_3, dice1[2]],
			die1_4: [...rollHistory1.die1_4, dice1[3]],
			die1_5: [...rollHistory1.die1_5, dice1[4]]
		});
		diceSum(dice1);
	}

	// function for player 2 rolling dice
	function rollDice2() {
		currentPlayer = 2;
		for (let i = 0; i < 5; i++) {
			let roll6 = Math.floor(Math.random() * 6) + 1;
			dice2[i] = roll6;
		}
		setDie2_1(dice2[0]);
		setDie2_2(dice2[1]);
		setDie2_3(dice2[2]);
		setDie2_4(dice2[3]);
		setDie2_5(dice2[4]);
		setrollHistory2({
			die2_1: [...rollHistory2.die2_1, dice2[0]],
			die2_2: [...rollHistory2.die2_2, dice2[1]],
			die2_3: [...rollHistory2.die2_3, dice2[2]],
			die2_4: [...rollHistory2.die2_4, dice2[3]],
			die2_5: [...rollHistory2.die2_5, dice2[4]]
		});
		diceSum(dice2);
	}


	// function for summing up the dice for each player
	function diceSum(currentDice) {
		// console.log(currentDice)
		// console.log(dice1)
		// for loop through currentDice and add to diceCount for each die face
		for (let i = 0; i < 5; i++) {
			// console.log(typeof (currentDice[i]));
			if (currentDice[i] === 1) {
				setDiceCount((diceCount) => ({
					...diceCount,
					one: diceCount.one + 1
				}));
			}
			if (currentDice[i] === 2) {
				setDiceCount((diceCount) => ({
					...diceCount,
					two: diceCount.two + 1
				}));
			}
			if (currentDice[i] === 3) {
				setDiceCount((diceCount) => ({
					...diceCount,
					three: diceCount.three + 1
				}));
			}
			if (currentDice[i] === 4) {
				setDiceCount((diceCount) => ({
					...diceCount,
					four: diceCount.four + 1
				}));
			}
			if (currentDice[i] === 5) {
				setDiceCount((diceCount) => ({
					...diceCount,
					five: diceCount.five + 1
				}));
			}
			if (currentDice[i] === 6) {
				setDiceCount((diceCount) => ({
					...diceCount,
					six: diceCount.six + 1
				}));
			}
		}
	}

	// function for resetting the dice count
	function resetDice() {
		setDiceCount({
			one: 0,
			two: 0,
			three: 0,
			four: 0,
			five: 0,
			six: 0
		})
		setrollHistory1({
			die1_1: [],
			die1_2: [],
			die1_3: [],
			die1_4: [],
			die1_5: []
		})
		setrollHistory2({
			die2_1: [],
			die2_2: [],
			die2_3: [],
			die2_4: [],
			die2_5: []
		})
		setDie1_1();
		setDie1_2();
		setDie1_3();
		setDie1_4();
		setDie1_5();
		setDie2_1();
		setDie2_2();
		setDie2_3();
		setDie2_4();
		setDie2_5();
	}

	// function for setting the bet for each player
	function increaseDice(currentPlayer, dieFace) {
		if (currentPlayer === 1) {
			setPlayer1BetDie({
				numberOfDice: player1BetDie.numberOfDice + 1,
				dieFace: dieFace
			})
		}
		if (currentPlayer === 2) {
			setPlayer2BetDie({
				numberOfDice: player2BetDie.numberOfDice + 1,
				dieFace: dieFace
			})
		}
	}
	function decreaseDice(currentPlayer, dieFace) {
		if (currentPlayer === 1) {
			setPlayer1BetDie({
				numberOfDice: player1BetDie.numberOfDice - 1,
				dieFace: dieFace
			})
		}
		if (currentPlayer === 2) {
			setPlayer2BetDie({
				numberOfDice: player2BetDie.numberOfDice - 1,
				dieFace: dieFace
			})
		}
	}

	// function for setting the bet for each player
	function insertBet() {
		if (currentPlayer === 1) {
			if (player2BetDie.numberOfDice <= player1BetDie.numberOfDice) {
				if (player2BetDie.dieFace <= player1BetDie.dieFace) {
					console.log("Bet approved")
				}
				else {
					console.log("Bet denied")
				}
			}
			else if(player2BetDie.dieFace <= player1BetDie.dieFace){
				if (player2BetDie.numberOfDice <= player1BetDie.numberOfDice) {
					console.log("Bet approved")
				}
				else {
					console.log("Bet denied")
				}
			}
		}
		if (currentPlayer === 2) {
			if (player1BetDie.numberOfDice <= player2BetDie.numberOfDice) {
				if (player1BetDie.dieFace <= player2BetDie.dieFace) {
					console.log("Bet approved")
				}
				else {
					console.log("Bet denied")
				}
			}
			else if(player1BetDie.dieFace <= player2BetDie.dieFace){
				if (player1BetDie.numberOfDice <= player2BetDie.numberOfDice) {
					console.log("Bet approved")
				}
				else {
					console.log("Bet denied")
				}
			}
		}
	}


	// console.log(rollHistory1);
	console.log("player1: " + dice1);
	// console.log(rollHistory2);
	console.log("player2: " + dice2);
	console.log("total dice count: " + (diceCount.one + diceCount.two + diceCount.three + diceCount.four + diceCount.five + diceCount.six));
	console.log("⚀: " + diceCount.one);
	console.log("⚁: " + diceCount.two);
	console.log("⚂: " + diceCount.three);
	console.log("⚃: " + diceCount.four);
	console.log("⚄: " + diceCount.five);
	console.log("⚅: " + diceCount.six);
	console.log("Current Player: " + currentPlayer);
	console.log("Player 1 Bet: " + player1BetDie.dieFace + " " + player1BetDie.numberOfDice);
	console.log("Player 2 Bet: " + player2BetDie.dieFace + " " + player2BetDie.numberOfDice);



	return (
		<div>
			<h1>Liar's Dice</h1>
			<ul>
				<li>Liar's Dice</li>
			</ul>
			<div>
				<button onClick={rollDice1}>Roll1</button>
				<button onClick={rollDice2}>Roll2</button>
				<button onClick={insertBet}>Bet</button>
				<button onClick={resetDice}>Reset</button>
			</div>
			<div className="player_1" style={{ 'display': 'flex' }}>
				<h3 style={{ 'paddingRight': '10px' }}>Player 1:</h3>
				<p style={{ 'paddingRight': '15px' }}>🎲: {die1_1} </p>
				<p style={{ 'paddingRight': '15px' }}>🎲: {die1_2} </p>
				<p style={{ 'paddingRight': '15px' }}>🎲: {die1_3} </p>
				<p style={{ 'paddingRight': '15px' }}>🎲: {die1_4} </p>
				<p style={{ 'paddingRight': '15px' }}>🎲: {die1_5} </p>
			</div>
			<div className="player_2" style={{ display: 'flex' }}>
				<h3 style={{ 'paddingRight': '10px' }}>Player 2:</h3>
				<p style={{ 'paddingRight': '15px' }}>🎲: {die2_1} </p>
				<p style={{ 'paddingRight': '15px' }}>🎲: {die2_2} </p>
				<p style={{ 'paddingRight': '15px' }}>🎲: {die2_3} </p>
				<p style={{ 'paddingRight': '15px' }}>🎲: {die2_4} </p>
				<p style={{ 'paddingRight': '15px' }}>🎲: {die2_5} </p>
			</div>
			<div className="diceCount" style={{ display: 'flex' }}>
				<h3 style={{ 'paddingRight': '10px' }}>Dice Count:</h3>
				<p style={{ 'paddingRight': '15px' }}><DieOne />: {diceCount.one} </p>
				<p style={{ 'paddingRight': '15px' }}><DieTwo />: {diceCount.two} </p>
				<p style={{ 'paddingRight': '15px' }}><DieThree />: {diceCount.three} </p>
				<p style={{ 'paddingRight': '15px' }}><DieFour />: {diceCount.four} </p>
				<p style={{ 'paddingRight': '15px' }}><DieFive />: {diceCount.five} </p>
				<p style={{ 'paddingRight': '15px' }}><DieSix />: {diceCount.six} </p>
			</div>
			{
				currentPlayer === 1 ?
					<div className="player_1" style={{ 'display': 'flex' }}>
						<h3 style={{ 'paddingRight': '10px' }}>Current Player is 1: Face={player1BetDie.dieFace} Count={player1BetDie.numberOfDice}</h3>
					</div> :
					<div className="player_2" style={{ display: 'flex' }}>
						<h3 style={{ 'paddingRight': '10px' }}>Current Player is 2: Face={player2BetDie.dieFace} Count={player2BetDie.numberOfDice}</h3>
					</div>
			}
			{/* <h1 style={{ 'color': 'brown' }}>PENIS</h1> */}
			<div className="Bet" style={{ display: 'flex' }}>
				<h3 style={{ 'paddingRight': '10px' }}>Bet💰:</h3>
				<p style={{ 'paddingRight': '15px' }}>{<DieOne />}
					<button onClick={() => increaseDice(currentPlayer, 1)}>+</button>
					<button onClick={() => decreaseDice(currentPlayer, 1)}>-</button>
				</p>
				<p style={{ 'paddingRight': '15px' }}>{<DieTwo />}
					<button onClick={() => increaseDice(currentPlayer, 2)}>+</button>
					<button onClick={() => decreaseDice(currentPlayer, 2)}>-</button>
				</p>
				<p style={{ 'paddingRight': '15px' }}>{<DieThree />}
					<button onClick={() => increaseDice(currentPlayer, 3)}>+</button>
					<button onClick={() => decreaseDice(currentPlayer, 3)}>-</button>
				</p>
				<p style={{ 'paddingRight': '15px' }}>{<DieFour />}
					<button onClick={() => increaseDice(currentPlayer, 4)}>+</button>
					<button onClick={() => decreaseDice(currentPlayer, 4)}>-</button>
				</p>
				<p style={{ 'paddingRight': '15px' }}>{<DieFive />}
					<button onClick={() => increaseDice(currentPlayer, 5)}>+</button>
					<button onClick={() => decreaseDice(currentPlayer, 5)}>-</button>
				</p>
				<p style={{ 'paddingRight': '15px' }}>{<DieSix />}
					<button onClick={() => increaseDice(currentPlayer, 6)}>+</button>
					<button onClick={() => decreaseDice(currentPlayer, 6)}>-</button>
				</p>
			</div>
		</div>
	)
}