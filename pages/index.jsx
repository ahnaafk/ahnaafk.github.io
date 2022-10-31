import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  useColorModeValue,
  UnorderedList,
  ListItem,
  Button,
  Text
} from '@chakra-ui/react'
import Section from '../components/section'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'

const Page = () => {
  return (
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
        <NextLink href="https://neuradao.to/">
          <Link>NeuraDAO</Link>
        </NextLink>
        . <br />
        If you&apos;re interested, hit this{' '}
        <NextLink href="https://calendly.com/ahnaaf/1-1">
          <Link>link</Link>
        </NextLink>{' '}
        or send me an{' '}
        <NextLink href="mailto:ahnaaf@neuradao.to">
          <Link>email!</Link>
        </NextLink>
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
          I’m a 17 y/o self-taught web2 + web3 + neurotech developer and graphic
          designer. Currently, I&apos;m building the future of neurotech
          research at {''}
          <NextLink href="https://neuradao.to/">
            <Link>NeuraDAO</Link>
          </NextLink>
          .
          <br />
          <br />
          <Text as={'b'}>Stack:</Text> Figma, ReactJS, Python, DaVinci Resolve,
          Brain-Computer Interfaces.
          <br />
          <Text as={'b'}>Learning:</Text> NextJs, Solidity, PyTorch.
        </Text>
        <br />
        <Text as="u" mt={'1rem'}>
          Things I did in the past:
        </Text>
        <UnorderedList mt={'1rem'}>
          <ListItem>R&D Intern @ Muse</ListItem>
          <ListItem>PM @ Apollo</ListItem>
          <ListItem>Spoke @ Collision, ETHAmsterdam</ListItem>
          <ListItem>Alumni @ TKS Activate</ListItem>
        </UnorderedList>
        <Box align="center" my={4}>
          <NextLink href={'/portfolio'}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="purple">
              Check out my Portfolio!
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as={'h3'} variant="section-title">
          As a human.
        </Heading>
        <p text-align="centered">
          Broadly, I&apos;m exploring the world of tech, while writing & tweeting
          about my journey. <br />
          <br />I learned a lot throughout TKS about social entrepreneurship,
          problem-solving, and emerging tech. Now I&apos;m currently learning
          about how much I don&apos;t know. <br />
          <br /> Currently reading Thiel, Harari, Naval, Chamath, Clear,
          and Gates, while listening to Huberman, Parrish, Kanye (his music
          only), Fridman, and Astro Teller.
        </p>
      </Section>
    </Container>
  )
}

export default Page
