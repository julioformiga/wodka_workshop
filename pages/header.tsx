import { Button, Grid } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
	return (
		<header>
			<nav className="w-full flex fixed top-0 z-50 py-10 px-24 text-center bg-green-900/90 backdrop-blur-lg">
				<Grid container>
					<Grid item xs={4}>
						<Link href="/">
							<Button>Links</Button>
						</Link>
						<Link href="/links">
							<Button>Links</Button>
						</Link>
					</Grid>
					<Grid item xs={4}>
						<Image
							className="fixed content-center top-0"
							alt="Logo"
							src="/rickandmorty.png"
							width="400"
							height="155"
							placeholder="empty"
							priority={true}
						/>
					</Grid>
					<Grid item xs={4}>
						<Link href="/">
							<Button>Links</Button>
						</Link>
						<Link href="/links">
							<Button>Links</Button>
						</Link>
					</Grid>
				</Grid>
			</nav>
		</header>
	);
}
