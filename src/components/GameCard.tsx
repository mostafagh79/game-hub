import { Card, CardBody, Heading, Image } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"

interface TGameCardProps {
  game : Game
}
const GameCard = ({game}: TGameCardProps) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image}/>
      <CardBody>
        <Heading fontSize="xl">
          {game.name}
        </Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard