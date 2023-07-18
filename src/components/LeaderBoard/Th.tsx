import { Th as ChakraTh, TableColumnHeaderProps } from "@chakra-ui/table";
import { ReactNode } from "react";
interface ThProps extends TableColumnHeaderProps {
  children: ReactNode
}

export function Th({ children, ...rest }: ThProps) {
  return (
    <ChakraTh
      color="gray.500"
      fontStyle="normal"
      fontWeight="bold"
      fontSize="md"
      opacity="0.6"
      textTransform="uppercase"
      {...rest}
    >
      {children}
    </ChakraTh>
  )
}