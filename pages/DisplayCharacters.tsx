import Typography from "@mui/material/Typography";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";
import { useQuery, gql } from "@apollo/client";
import Link from "next/link";

const GET_CHARACTERS = gql`
  query GetCharacters {
    characters(page: 1, filter: { name: "mo" }) {
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

export function TotalCharacters() {
  const { loading, error, data } = useQuery(GET_CHARACTERS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;
  return (
    <Typography variant="h6">{data.characters.info.count} / 826</Typography>
  );
}

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
        <Link href={`/character/${id}`}>
          <Card
            sx={{ minWidth: 150, minHeight: 160 }}
            variant="elevation"
            className="bg-green-50 dark:bg-green-950 dark:text-green-50"
          >
            <CardActionArea>
              <CardContent>
                <Typography
                  variant="body2"
                  color="text.secondary dark:text-green-50"
                >
                  {name}
                </Typography>
              </CardContent>
              <CardMedia sx={{ minHeight: 160 }} image={image} />
            </CardActionArea>
          </Card>
        </Link>
      </Grid>
    );
  });
}
