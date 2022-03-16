import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'


const ImageTest = () => (
	<Image
		src="/images/latest.png"
		height={144}
		width={144}
		alt="Hooman Shrek"
	/>
)

const RulesEl = () => (
	<>
		<h1>Rules</h1>
		<ul>
			<li>Liar&apos;s Dice</li>
		</ul>
		<div>
			<Link href="/">
				<a>Back to home</a>
			</Link>
		</div>
	</>
)

export default function Rules() {
	return (
		<>
			<Head>
				<title>Liar&apos;s Dice's Rules</title>
			</Head>
			<RulesEl />
			<ImageTest />
		</>
	)
}