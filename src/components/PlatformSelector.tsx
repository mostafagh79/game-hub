import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import usePlatforms from '../hooks/usePlatforms'
import { Platform } from '../hooks/useGames'

interface TPlatformSelectorProps{
    onSelectPlatform : (platforn : Platform)=>void
    selectedPlatform : Platform | null
}

const PlatformSelector = ({onSelectPlatform, selectedPlatform}: TPlatformSelectorProps) => {
   const {data} =  usePlatforms()
  return (
    <Menu>
        <MenuButton rightIcon={<BsChevronDown/>} as={Button}>
        {selectedPlatform?.name || "Platforms"}
        </MenuButton>
        <MenuList>
           {data.map(platform => <MenuItem onClick={()=>onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>)}
        </MenuList>

    </Menu>
  )
}

export default PlatformSelector