import { useEffect, useState, useRef } from 'react';

export default function RollDice() {
	const [dice, setDice] = useState([]);
	const [roll, setRoll] = useState();

	const diceRef = useRef(null);

	function rollDice() {
		setRoll(Math.floor(Math.random() * 6) + 1);

		console.log("rollDice dice: ", dice);
		console.log("rollDice roll: ", roll);
		setDice([...dice, roll]);
	}


	return (
		<div>
			<h1>Roll Dice</h1>
			<div>
				<button onClick={rollDice}>Roll</button>
			</div>
			<div>
				<h2>{roll}</h2>
			</div>
		</div>

	)
}