import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenere";

interface TGenreListProps {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ onSelectGenre, selectedGenre }: TGenreListProps) => {
  const { data, isLoading } = useGenre();

  if (isLoading) return <Spinner />;
  return (
    <>
    <Heading fontSize="2xl" marginBottom={3}>Genres</Heading>
    <List>
      {data.map((genre) => (
        <ListItem paddingY="8px" key={genre.id}>
          <HStack>
            <Image
              borderRadius="8px"
              width="100px"
              height="60px"
              src={genre.image_background}
            />
            <Button
            textAlign="left"
            whiteSpace="normal"
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              sx={{ textOverflow: "hidden" }}
              onClick={() => onSelectGenre(genre)}
              variant="link"
              fontSize="lg"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>
  );
};

export default GenreList;
