import { TableCellProps, Td as ChakraTd } from "@chakra-ui/react";
import { ReactNode } from "react";

interface TdProps extends TableCellProps {
  children: ReactNode
  bl?: boolean;
  br?: boolean;
}

export function Td({ 
  children, bl = false, br = false, ...rest
}: TdProps) {
  return (
    <ChakraTd
      bg="gray.100"
      //borderBottom="8px"
      borderColor="gray.200"
      fontSize="lg"
      borderTopLeftRadius={bl && "xl"}
      borderBottomLeftRadius={bl && "xl"}
      borderTopRightRadius={br && "xl"}
      borderBottomRightRadius={br && "xl"}
      borderBottomWidth="6px"
      
      {...rest}
    >
      {children}
    </ChakraTd>
  )
}