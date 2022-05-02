import { ChakraProvider } from "@chakra-ui/react"
import Fonts from "../components/fonts.js"
import Layout from "../components/layouts/main.js"
import theme from "../libs/theme.js"

const Website = ({ Component, pageProps, router}) => {
	return (
		<ChakraProvider theme={theme}>
			<Fonts />
			<Layout router={router}>
				<Component {...pageProps} key={router.route} />
			</Layout>
		</ChakraProvider>
	)
}

export default Website