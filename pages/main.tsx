import { Grid } from "@mui/material";
import { DisplayCharacters } from "./DisplayCharacters";
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	gql,
} from "@apollo/client";

export const client = new ApolloClient({
	uri: "https://rickandmortyapi.com/graphql",
	cache: new InMemoryCache(),
});

export const GET_CHARACTERS = gql`
  query GetCharacters {
    characters(page: 1, filter: { name: "rick" }) {
      info {
        count
      }
      results {
        id
        name
        image
      }
    }
    location(id: 1) {
      id
      name
      type
      dimension
    }
    episodesByIds(ids: [1, 2]) {
      id
    }
  }
`;

export default function Main() {
	return (
		<main className="w-full p-24 pt-44">
			<div className="flex">
				<Grid container spacing={2} rowSpacing={2} columnSpacing={2}>
					<ApolloProvider client={client}>
						<DisplayCharacters />
					</ApolloProvider>
				</Grid>
			</div>
		</main>
	);
}
