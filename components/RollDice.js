import { useEffect, useState, useRef } from 'react';

export default function RollDice() {
	const [rollHistory, setrollHistory] = useState([]);
	const [dice1, setDice1] = useState();

	const diceRef = useRef(null);

	function rollDice() {
		setDice1(Math.floor(Math.random() * 6) + 1);

		console.log("rollDice dice 1: ", dice1);
		console.log("rollDice roll: ", rollHistory);
		setrollHistory([...rollHistory, dice1]);
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
				<h2>{dice1}</h2>
			</div>
		</div>

	)
}