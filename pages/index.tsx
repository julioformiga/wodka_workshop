import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "./header";
import Footer from "./footer";
import Main from "./main";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main className={`${inter.className}`}>
			<Header />
			<Main />
			<Footer />
		</main>
	);
}
