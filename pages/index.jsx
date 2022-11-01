import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  useColorModeValue,
  UnorderedList,
  ListItem,
  SimpleGrid,
  Button,
  Text,
  List,
  Icon
} from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoGithub,
  IoLogoDiscord,
  IoLogoBehance,
  IoLogoMedium,
  IoLogoLinkedin
} from 'react-icons/io5'
import placeholder from '../public/images/contents/placeholder.png'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mt={2}
          mb={6}
          align="center"
        >
          Hey! I&apos;m currently looking to talk w/ academics for{' '}
          <Link href="https://neuradao.to/" target="_blank">
            NeuraDAO
          </Link>
          . <br />
          If you&apos;re interested, hit this{' '}
          <Link href="https://calendly.com/ahnaaf/1-1" target="_blank">
            link
          </Link>{' '}
          or send me an{' '}
          <Link href="mailto:ahnaaf@neuradao.to" target="_blank">
            email!
          </Link>
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Ahnaaf Khan
            </Heading>
            <p>Founder & Developer</p>
          </Box>
          <Box
            flexShrink={8}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/ahnaaf.png"
              alt="profile pic"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            As a builder.
          </Heading>
          <Text text-align="centered">
            I’m a 17 y/o self-taught web2 + web3 + neurotech developer and
            graphic designer. Currently, I&apos;m building the future of
            neurotech research at {''}
            <Link href="https://neuradao.to" target="_blank">
              NeuraDAO
            </Link>
            .
            <br />
            <br />
            <Text as={'b'}>Stack:</Text> Figma, ReactJS, Python, DaVinci
            Resolve, Brain-Computer Interfaces.
            <br />
            <Text as={'b'}>Learning:</Text> NextJs, Solidity, PyTorch.
          </Text>
          <br />
          <Text as="u" mt={'1rem'}>
            Past experiences:
          </Text>
          <UnorderedList mt={'1rem'}>
            <ListItem>R&D Intern @ Muse</ListItem>
            <ListItem>PM @ Apollo</ListItem>
            <ListItem>Spoke @ Collision, ETHAmsterdam</ListItem>
            <ListItem>Alumni @ TKS Activate</ListItem>
          </UnorderedList>

        </Section>
        <Section>
        <Heading as="h3" variant="sub-section-title">
            On My Desk.
          </Heading>
          <SimpleGrid columns={[1, 2, 2]} gap={6} mt={2}>
            <GridItem
              href="https://neuradao.to"
              title="NeuraDAO"
              thumbnail={placeholder}
            >
              NeuraDAO
            </GridItem>
            <GridItem
              href="https://neuradao.to"
              title="help"
              thumbnail={placeholder}
            >
              NeuraDAO
            </GridItem>
          </SimpleGrid>
          <Box align="center" my={5}>
            <NextLink href={'/portfolio'}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Check out my Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as={'h3'} variant="section-title">
            As a human.
          </Heading>
          <p text-align="centered">
            In this stage of my life, I&apos;m exploring the world of tech,
            while writing & tweeting about my journey. <br />
            <br />I learned a lot throughout TKS about social entrepreneurship,
            problem-solving, and emerging tech. Now I&apos;m currently learning
            about how much I don&apos;t know. <br />
            <br /> Currently reading Thiel, Harari, Naval, Chamath, Clear, and
            Gates, while listening to Huberman, Parrish, Kanye (his music only),
            Fridman, and Astro Teller.
          </p>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Connect w/ me.
          </Heading>
          <List>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/ahnaaf-khan/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  Ahnaaf Khan
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/ahnaafk" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @ahnaafk
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/ahnaafk" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @ahnaafk
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://ahnaafk.medium.com" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoMedium} />}
                >
                  @ahnaafk
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.behance.net/ahnaafkhan" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoBehance} />}
                >
                  Ahnaaf Khan
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
