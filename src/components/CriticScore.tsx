import { Badge } from "@chakra-ui/react"

interface TCriticScoreProps {
    score : number
}

const CriticScore = ({score} : TCriticScoreProps ) => {
    let color = score > 75 ? "green" : score >60 ? "yellow": "";
  return (
    <Badge colorScheme={color} fontSize="12px" paddingX="8px" borderRadius="4px">{score}</Badge>
  )
}

export default CriticScore