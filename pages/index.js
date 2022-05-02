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
						Mirsoli Mirsultonov
					</Heading>
					<p>Digital Craftzman ( Bioinformatic / Developer / Designer )</p>
				</Box>
				<Box 
					flexShrink={0} 
					mt={{base: 4, md: 0}} 
					ml={{md: 6}}
					align="center"
				>
					<Image />
				</Box>
			</Box>
		</Container>
	)
}

export default Page
