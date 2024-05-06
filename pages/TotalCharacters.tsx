import Typography from "@mui/material/Typography";
import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "./main";

export function TotalCharacters() {
	const { loading, error, data } = useQuery(GET_CHARACTERS);
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error : {error.message}</p>;
	return (
		<Typography variant="h6">{data.characters.info.count} / 812</Typography>
	);
}
