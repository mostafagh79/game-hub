import useGenre from "../hooks/useGenere"

const GenreList = () => {
    const {genres}=useGenre()
  return (
    <ul>
        {genres.map(genre => <li key={genre.id}> {genre.name}</li>)}
    </ul>
  )
}

export default GenreList