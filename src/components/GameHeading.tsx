import { Heading } from '@chakra-ui/react'
import { GameQuery } from '../App'

interface TGameHeadingProps{
    gameQuery : GameQuery
}

const GameHeading = ({gameQuery}:TGameHeadingProps) => {

    const heading = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`
  return (
    <Heading paddingLeft={3} marginY={4} as="h1">
        {heading}
    </Heading>
  )
}

export default GameHeading