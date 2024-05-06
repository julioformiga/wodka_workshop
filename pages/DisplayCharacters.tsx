import Typography from "@mui/material/Typography";
import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Grid,
} from "@mui/material";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "./main";

export function DisplayCharacters() {
	const { loading, error, data } = useQuery(GET_CHARACTERS);
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error : {error.message}</p>;
	return data.characters.results.map(function ({
		id,
		name,
		image,
	}: {
		id: number;
		name: string;
		image: string;
	}) {
		return (
			<Grid item xs={4} md={3} key={id}>
				<Card sx={{ minWidth: 200, minHeight: 200 }} variant="elevation">
					<CardActionArea>
						<CardContent>
							<Typography variant="body2" color="text.secondary">
								{name}
							</Typography>
						</CardContent>
						<CardMedia sx={{ minHeight: 240 }} image={image} />
					</CardActionArea>
				</Card>
			</Grid>
		);
	});
}
