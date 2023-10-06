import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface TSortSelectorProps {
    onSelectSortOrder : (sortOrder : string)=>void
    sortOrder : string
}

const SortSelector = ({onSelectSortOrder ,sortOrder}:TSortSelectorProps) => {
  const sortOrders = [
    { value: "", label: "Relavance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const currentSortOrder = sortOrders.find(order => order.value === sortOrder)
  return (
    <Menu>
      <MenuButton rightIcon={<BsChevronDown />} as={Button}>
      Sort By :  {currentSortOrder?.label || "Relavance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem onClick={()=>onSelectSortOrder(order.value)} key={order.value} value={order.value}>
           {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
