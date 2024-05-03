import { LogoDev } from "@mui/icons-material";
import { Button } from "@mui/material";
import Link from "next/link";

export default function Header() {
	return (
		<header>
			<nav className="w-full flex fixed top-0 z-50 py-6 px-24 text-center bg-green-800/60 backdrop-blur-md">
				<div>Logo</div>
				<div>
					<Link href="/">
						<Button>Init</Button>
					</Link>
					<Link href="/links">
						<Button>Links</Button>
					</Link>
				</div>
			</nav>
		</header>
	);
}
