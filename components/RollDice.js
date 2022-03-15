import { useEffect, useState, useRef } from 'react';

export default function RollDice() {
	const [rollHistory, setrollHistory] = useState([]);
	const [die1, setDie1] = useState();
	const [die2, setDie2] = useState();

	const diceRef = useRef(null);

	function rollDice() {
		setDie1(Math.floor(Math.random() * 6) + 1);
		setDie2(Math.floor(Math.random() * 6) + 1);

		console.log("rollDice dice 1: ", die1);
		console.log("rollDice dice 2: ", die2);
		console.log("rollDice roll: ", rollHistory);
		setrollHistory([...rollHistory, die1]);
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
				<h2>{die1}</h2>
			</div>
		</div>

	)
}