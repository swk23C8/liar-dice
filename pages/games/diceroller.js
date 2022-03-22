import RollDice from '../../components/RollDice/RollDice'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function DiceRoller() {
	return (
		<>
			<Layout>
				<Head>
					<title>Liar's Dice</title>
				</Head>
				<div>
					<RollDice />
				</div>
			</Layout>
		</>
	)
}