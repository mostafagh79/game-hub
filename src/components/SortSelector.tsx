import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

const SortSelector = () => {
  return (
     <Menu>
        <MenuButton rightIcon={<BsChevronDown/>} as={Button}>
        Order By
        </MenuButton>
        <MenuList>
          <MenuItem>1</MenuItem>
          <MenuItem>2</MenuItem>
          <MenuItem>3</MenuItem>
          <MenuItem>45</MenuItem>
          <MenuItem></MenuItem>
        </MenuList>

    </Menu>
  )
}

export default SortSelector