import { Grid } from "@mui/material";
import { DisplayCharacters } from "./DisplayCharacters";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

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
