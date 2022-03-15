import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../../components/layout'
import RollDice from '../../components/RollDice'

const ImageTest = () => (
	<Image
		src="/images/latest.png"
		height={144}
		width={144}
		alt="Hooman Shrek"
	/>
)


export default function FirstPost() {
	return (
		<>
			<Layout>
				<Head>
					<title>Liar&apos;s Dice</title>
				</Head>
				{/* <Script
				src="https://connect.facebook.net/en_US/sdk.js"
				strategy="lazyOnload"
				onLoad={() =>
					console.log(`script loaded correctly, window.FB has been populated`)
				}
			/> */}
				<h1>First Post</h1>
				<ImageTest />
				<h2>
					<Link href="/">
						<a>Back to home</a>
					</Link>
				</h2>
				<div>
					<RollDice />
				</div>
			</Layout>
		</>
	)
}