import { useEffect, useState, useRef } from 'react';

export default function RollDice() {
	const [rollHistory, setrollHistory] = useState({
		die1: [],
		die2: []
	});
	const [die1, setDie1] = useState();
	const [die2, setDie2] = useState();

	const diceRef = useRef(null);


	function rollDice() {
		const die1 = Math.floor(Math.random() * 6) + 1;
		const die2 = Math.floor(Math.random() * 6) + 1;
		setDie1(die1);
		setDie2(die2);

		console.log("rollDice dice 1: ", die1);
		console.log("rollDice dice 2: ", die2);
		console.log("rollDice roll: ", rollHistory);

		setDie1(die1);
		setDie2(die2);
		setrollHistory({
			die1: [...rollHistory.die1, die1],
			die2: [...rollHistory.die2, die2]
		})
	}


	return (
		<div>
			<h1>Liar's Dice</h1>
			<ul>
				<li>Liar's Dice</li>
			</ul>
			<div>
				<button onClick={rollDice}>Roll</button>
			</div>
			<div>
				<p>die 1: {die1} </p>
				<p>die 2: {die2} </p>
			</div>
		</div>

	)
}