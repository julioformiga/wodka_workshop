import { Button, Grid, Icon } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { DarkMode, LightMode } from "@mui/icons-material";

export default function Header() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
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
            <Button
              onClick={() =>
                theme == "dark" ? setTheme("light") : setTheme("dark")
              }
              className="bg-gray-800 dark:bg-gray-50 hover:bg-gray-600 dark:hover:bg-gray-300 transition-all duration-100 text-white dark:text-gray-800 px-2 py-2 md:text-xs rounded-lg text-xs"
            >
              <DarkMode className="visible dark:invisible" />
              <LightMode className="invisible dark:visible" />
            </Button>
          </Grid>
        </Grid>
      </nav>
    </header>
  );
}
