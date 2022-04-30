import { Container, Box, Heading } from "@chakra-ui/react"

const Page = ()=> {
	return (
		<Container>
			<Box borderRadius="lg" bg="red" mb={6} p={3} alignContent="center">
				Hello, I&apos;m a full-stack developer based in uzbekistan!
			</Box>

			<Box display={{md:'flex'}}>
				<Box flexGrow={1}>
					<Heading as="h2" variant="page-title">
						ilosrim
					</Heading>
					<p>Digital Craftzman ( Bioinformatic / Developer / Designer )</p>
				</Box>
			</Box>
		</Container>
	)
}

export default Page
