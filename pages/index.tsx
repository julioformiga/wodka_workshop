import { Inter } from "next/font/google";
import Head from "next/head";
import Header from "./header";
import Footer from "./footer";
import Main from "./main";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<div className={`${inter.className}`}>
			<Head>
				<title>Wodka42</title>
			</Head>
			<Header />
			<Main />
			<Footer />
		</div>
	);
}
