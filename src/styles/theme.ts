import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  colors: {
    gray: {
      100: "#fff",
      200: "#f2f3f5",
      300: "#dcdde0",
      350: "#d7d8da",
      360: "#B3B3B3",
      400: "#666666",
      500: "#2e384d",
    },
    purple: "#b3b9ff",
    red: "#e83f5b",
    green: "#4cd62b",
    blue: {
      700: "#2aa9e0",
      800: "#5965e0",
      900: "#4953b8",
    }
  },
  fonts: {
    heading: 'Inter',
    body: 'Inter',
  },
  styles: {
    global: {
      body: {
        bg: "gray.200",
        color: "gray.400"
      }
    }
  }
})