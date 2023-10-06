import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'

const PlatformSelector = () => {
   const {data} =  usePlatforms()
  return (
    <Menu>
        <MenuButton rightIcon={<BsChevronDown/>} as={Button}>
        Platforms
        </MenuButton>
        <MenuList>
           {data.map(platform => <MenuItem key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>

    </Menu>
  )
}

export default PlatformSelector