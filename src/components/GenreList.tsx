import { Button, HStack, Image, List, ListItem, Spinner } from "@chakra-ui/react"
import useGenre, { Genre } from "../hooks/useGenere"


interface TGenreListProps {
    onSelectGenre : (genre: Genre)=> void
}
const GenreList = ({onSelectGenre} : TGenreListProps) => {
    const {data , isLoading}=useGenre()

        if (isLoading) return <Spinner/>
  return (
    <List>
        {data.map(genre => <ListItem paddingY="8px"  key={genre.id}> 
        <HStack><Image borderRadius="8px" width="100px" height="60px" src={genre.image_background}/>
        <Button onClick={()=>onSelectGenre(genre)} variant="link" fontSize="lg">{genre.name}</Button>
        </HStack>
        </ListItem >)}
    </List>
  )
}

export default GenreList