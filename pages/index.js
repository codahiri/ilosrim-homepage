import NextLink from 'next/link'
import { 
	Container, 
	Box, 
	Heading, 
	Image, 
	useColorModeValue,
	Button
} from "@chakra-ui/react"
import Paragraph from "../components/paragraph"
import Section from "../components/section"
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Link from 'next/link'

const Page = ()=> {
	return (
		<Container>
			<Box 
				borderRadius="lg" 
				bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} 
				mb={6} p={3} 
				alignContent="center"
			>
				Hello, I&apos;m a full-stack developer based in Uzbekistan!
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
					<Image 
						borderColor="whiteAlpha.800" 
						borderWidth={2} 
						borderStyle="solid" 
						maxWidth="100px" 
						display="inline-block" 
						borderRadius="full" 
						src="/images/ilosrim.png" 
						alt="Profile image" 
					/>
				</Box>
			</Box>

			<Section delay={0.1}>
				<Heading as="h1" variant="section-title">
					Work
				</Heading>
				<Paragraph>
					A programmer in the field of frontend web and telegram bot production, 
					has +1 years of experience. Creator of e-commerce, single-page and multi-page, 
					as well as admin panel websites. Specializes in project implementation and management. 
					An inquisitive programmer thirsting to learn new knowledge ;)
				</Paragraph>
				<Box align="center" my={4}>
					<NextLink href="/works">
						<Button rightIcon={<ChevronRightIcon />}>
							My portfolio
						</Button>
					</NextLink>
				</Box>
			</Section>

			<Section delay={0.2}>
				<Heading as="h1" variant="section-title">
					Bio
				</Heading>
				<BioSection>
					<BioYear>1998</BioYear>
					Born in Fergana, Uzbekistan
				</BioSection>
				<BioSection>
					<BioYear>2022</BioYear>
					Completed the Bachelor&apos;s degree in the Biology at National universitet of Uzbekistan
				</BioSection>
				<BioSection>
					<BioYear>2022 to present</BioYear>
					Works as Bioinformatics at the Institute of Bioorganics
				</BioSection>
			</Section>

			<Section delay={0.3}>
				<Heading as="h3" variant="section-title">
					I 🖤
				</Heading>
				<Paragraph>
					Art, Music, {' '}
					<Link href="https://books.google.com/">
						Reading
					</Link>
				</Paragraph>
			</Section>
		</Container>
	)
}

export default Page
