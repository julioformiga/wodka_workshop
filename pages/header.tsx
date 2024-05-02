import Head from "next/head";
import Link from "next/link";

export default function Header() {
	return (
		<header>
			<Head>
				<title>Wodka42</title>
			</Head>
			<nav className="w-full fixed top-0 z-50">
				<ul className="flex p-6 mb-4 bg-green-800/60 backdrop-blur-md">
					<li className="flex-row">
						<Link href="/">Index</Link>
					</li>
					<li className="flex-row">
						<Link href="/list">List</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
