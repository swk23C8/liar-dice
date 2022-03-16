import { useEffect, useState, useRef } from 'react';

export default function RollDice() {
	const [diceCount, setDiceCount] = useState({
		one: 0,
		two: 0,
		three: 0,
		four: 0,
		five: 0,
		six: 0
	});

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
	let dice1 = [die1_1, die1_2, die1_3, die1_4, die1_5];

	const diceRef1 = useRef(null);

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
	let dice2 = [die2_1, die2_2, die2_3, die2_4, die2_5];

	const diceRef2 = useRef(null);

	function rollDice1() {
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

	function rollDice2() {
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
	console.log(" ");
	// console.log(rollHistory1);
	console.log("player1: " + dice1);
	// console.log(rollHistory2);
	console.log("player2: " + dice2);
	console.log("⚀: " + diceCount.one);
	console.log("⚁: " + diceCount.two);
	console.log("⚂: " + diceCount.three);
	console.log("⚃: " + diceCount.four);
	console.log("⚄: " + diceCount.five);
	console.log("⚅: " + diceCount.six);


	function diceSum(currentDice) {
		console.log(currentDice[0])
		for (let i = 0; i < currentDice.length; i++) {
			if (currentDice[i] === 1) {
				setDiceCount({
					...diceCount,
					one: diceCount.one + 1
				});
			} else if (currentDice[i] === 2) {
				setDiceCount({
					...diceCount,
					two: diceCount.two + 1
				});
			}
			else if (currentDice[i] === 3) {
				setDiceCount({
					...diceCount,
					three: diceCount.three + 1
				});
			}
			else if (currentDice[i] === 4) {
				setDiceCount({
					...diceCount,
					four: diceCount.four + 1
				});
			}
			else if (currentDice[i] === 5) {
				setDiceCount({
					...diceCount,
					five: diceCount.five + 1
				});
			}
			else if (currentDice[i] === 6) {
				setDiceCount({
					...diceCount,
					six: diceCount.six + 1
				});
			}
		}
	}


	return (
		<div>
			<h1>Liar's Dice</h1>
			<ul>
				<li>Liar's Dice</li>
			</ul>
			<div>
				<button onClick={rollDice1}>Roll1</button>
				<button onClick={rollDice2}>Roll2</button>
			</div>
			<div className="player_1" style={{ 'display': 'flex' }}>
				<h3 style={{ 'padding-right': '10px' }}>Player 1</h3>
				<p style={{ 'padding-right': '15px' }}>die1: {die1_1} </p>
				<p style={{ 'padding-right': '15px' }}>die2: {die1_2} </p>
				<p style={{ 'padding-right': '15px' }}>die3: {die1_3} </p>
				<p style={{ 'padding-right': '15px' }}>die4: {die1_4} </p>
				<p style={{ 'padding-right': '15px' }}>die5: {die1_5} </p>
			</div>
			<div className="player_2" style={{ display: 'flex' }}>
				<h3 style={{ 'padding-right': '10px' }}>Player 2</h3>
				<p style={{ 'padding-right': '15px' }}>die1: {die2_1} </p>
				<p style={{ 'padding-right': '15px' }}>die2: {die2_2} </p>
				<p style={{ 'padding-right': '15px' }}>die3: {die2_3} </p>
				<p style={{ 'padding-right': '15px' }}>die4: {die2_4} </p>
				<p style={{ 'padding-right': '15px' }}>die5: {die2_5} </p>
			</div>
			<div className="diceCount" style={{ display: 'flex' }}>
				<h3 style={{ 'padding-right': '10px' }}>Dice Count</h3>
				<p style={{ 'padding-right': '15px' }}>die1: {die1_1 + die2_1} </p>
				<p style={{ 'padding-right': '15px' }}>die2: {die1_2 + die2_2} </p>
				<p style={{ 'padding-right': '15px' }}>die3: {die1_3 + die2_3} </p>
				<p style={{ 'padding-right': '15px' }}>die4: {die1_4 + die2_4} </p>
				<p style={{ 'padding-right': '15px' }}>die5: {die1_5 + die2_5} </p>
			</div>
		</div>
	)
}