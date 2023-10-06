import bullsEye from "../../public/assets/bulls-eye.webp"
import thumbsUp from "../../public/assets/thumbs-up.webp"
import meh from "../../public/assets/meh.webp"
import { Image, ImageProps } from "@chakra-ui/react"

interface TEmojiProps {
    rating: number
}

const Emoji = ({rating} : TEmojiProps) => {
    if(rating <3 ) return null;
    
    const emojiMap :{[key : number] : ImageProps}= {
        3: {src:meh , alt: "meh"},
        4: {src:thumbsUp , alt: "recommended"},
        5: {src:bullsEye , alt: "exceptional"},
    }
  return (
    <Image {...emojiMap[rating]} boxSize="24px"/>
  )
}

export default Emoji