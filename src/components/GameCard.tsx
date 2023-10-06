import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import PlatformIconList from "./PlatformIconList"
import CriticScore from "./CriticScore"
import noImage from "../../public/assets/no-image-placeholder-6f3882e0.webp"
import Emoji from "./Emoji"

interface TGameCardProps {
  game : Game
}
const GameCard = ({game}: TGameCardProps) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image ?? noImage}/>
      <CardBody _light={{backgroundColor:"gray.300"}}>
        <Heading fontSize="xl">
          {game.name}
        </Heading> 
        <HStack flexWrap="wrap" justifyContent="space-between">
        <PlatformIconList platforms={game.parent_platforms.map(p=>p.platform)}/>
        <CriticScore score={game.metacritic}/>
        </HStack>
        <Heading fontSize="2xl">
          <Emoji rating={game.rating_top}/>
        </Heading>
      </CardBody>
    </Card>
  )
}

export default GameCard