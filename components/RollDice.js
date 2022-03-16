import { useEffect, useState, useRef } from 'react';

export default function RollDice() {
	const [rollHistory, setrollHistory] = useState({
		die1: [],
		die2: [],
		die3: [],
		die4: [],
		die5: []
	});
	const [die1, setDie1] = useState();
	const [die2, setDie2] = useState();
	const [die3, setDie3] = useState();
	const [die4, setDie4] = useState();
	const [die5, setDie5] = useState();

	const diceRef = useRef(null);

	let dice = [die1, die2, die3, die4, die5];
	function rollDice() {
		for (let i = 0; i < 5; i++) {
			let roll6 = Math.floor(Math.random() * 6) + 1;
			dice[i] = roll6;
		}
		setDie1(dice[0]);
		setDie2(dice[1]);
		setDie3(dice[2]);
		setDie4(dice[3]);
		setDie5(dice[4]);
		setrollHistory({
			die1: [...rollHistory.die1, dice[0]],
			die2: [...rollHistory.die2, dice[1]],
			die3: [...rollHistory.die3, dice[2]],
			die4: [...rollHistory.die4, dice[3]],
			die5: [...rollHistory.die5, dice[4]]
		});
	}
	console.log(rollHistory);
	console.log(dice);
	// console.log(diceRef);
	// console.log(diceRef.current);
	// console.log(diceRef.current.children);
	// console.log(diceRef.current.children[0]);
	// console.log(diceRef.current.children[0].children);
	// console.log(diceRef.current.children[0].children[0]);

	// useEffect(() => {
	// 	diceRef.current.children[0].children[0].innerHTML = die1;
	// 	diceRef.current.children[0].children[1].innerHTML = die2;
	// 	diceRef.current.children[0].children[2].innerHTML = die3;
	// 	diceRef.current.children[0].children[3].innerHTML = die4;
	// 	diceRef.current.children[0].children[4].innerHTML = die5;
	// }, [die1, die2, die3, die4, die5]);




	return (
		<div>
			<h1>Liar's Dice</h1>
			<ul>
				<li>Liar's Dice</li>
			</ul>
			<div>
				<button onClick={rollDice}>Roll</button>
			</div>
			<div className="player 1" style={{'display': 'flex'}}>
				<p style={{'padding-right': '15px'}}>die1: {die1} </p>
				<p style={{'padding-right': '15px'}}>die2: {die2} </p>
				<p style={{'padding-right': '15px'}}>die3: {die3} </p>
				<p style={{'padding-right': '15px'}}>die4: {die4} </p>
				<p style={{'padding-right': '15px'}}>die5: {die5} </p>
			</div>
			<div className="player 2" style={{display: 'flex'}}>
				<p style={{'padding-right': '15px'}}>die1: {die1} </p>
				<p style={{'padding-right': '15px'}}>die2: {die2} </p>
				<p style={{'padding-right': '15px'}}>die3: {die3} </p>
				<p style={{'padding-right': '15px'}}>die4: {die4} </p>
				<p style={{'padding-right': '15px'}}>die5: {die5} </p>
			</div>
			
		</div>

	)
}