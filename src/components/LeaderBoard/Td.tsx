import { TableCellProps, Td as ChakraTd } from "@chakra-ui/react";
import { ReactNode } from "react";

interface TdProps extends TableCellProps {
  children: ReactNode
  bl?: boolean;
}

export function Td({ 
  children, bl = false, ...rest
}: TdProps) {
  return (
    <ChakraTd
      bg="gray.100"
      //borderBottom="8px"
      borderColor="gray.200"
      fontSize="lg"
      borderTopRightRadius={bl && "xl"}
      borderBottomRightRadius={bl && "xl"}
      borderBottomWidth="8px"
      
      {...rest}
    >
      {children}
    </ChakraTd>
  )
}