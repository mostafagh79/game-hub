import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react"
import useGenre from "../hooks/useGenere"

const GenreList = () => {
    const {genres , isLoading}=useGenre()

        if (isLoading) return <Spinner/>
  return (
    <List>
        {genres.map(genre => <ListItem paddingY="8px"  key={genre.id}> 
        <HStack><Image borderRadius="8px" width="100px" height="60px" src={genre.image_background}/>
        <Text fontSize="lg">{genre.name}</Text>
        </HStack>
        </ListItem >)}
    </List>
  )
}

export default GenreList