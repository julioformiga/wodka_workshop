import { Button, Grid, IconButton, InputBase, Paper } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { DarkMode, LightMode } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";

export default function Header() {
	const { systemTheme, theme, setTheme } = useTheme();
	const currentTheme = theme === "system" ? systemTheme : theme;
	return (
		<header>
			<nav className="header">
				<Grid container>
					<Grid item md={4} className="text-left">
						<Link href="/" className="pr-10">
							<Button variant="contained">Index</Button>
						</Link>
						<Link href="/links">
							<Button variant="contained">List</Button>
						</Link>
					</Grid>
					<Grid item md={4} className="text-center content-center">
						<Image
							className="fixed content-center top-0"
							alt="Logo"
							src="/rickandmorty.png"
							width="400"
							height="133"
							placeholder="empty"
							priority={true}
						/>
					</Grid>
					<Grid item md={4} className="text-right content-center">
						<Paper
							component="form"
							className="bg-green-300 dark:bg-green-950 w-100"
						>
							<InputBase
								className="text-black dark:text-white"
								placeholder="Search"
								inputProps={{ "aria-label": "search" }}
							/>
							<IconButton type="button" sx={{ p: "4px" }} aria-label="search">
								<SearchIcon />
							</IconButton>
						</Paper>
					</Grid>
				</Grid>
				<Button
					className="darkModeSelector"
					onClick={() =>
						theme == "dark" ? setTheme("light") : setTheme("dark")
					}
				>
					<DarkMode className="block dark:hidden" />
					<LightMode className="hidden dark:block" />
				</Button>
			</nav>
		</header>
	);
}
