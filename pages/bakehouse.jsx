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
import {
  IoLogoTwitter,
  IoLogoGithub,
  IoLogoBehance,
  IoLogoMedium,
  IoLogoLinkedin
} from 'react-icons/io5'
import { SiGmail } from 'react-icons/si'

const Page = () => {
  return (
    <Layout>
      <Container maxW={{base:'100%', md: "60%"}}>
          <Box
            flexShrink={8}
            mt={{ base: 5, md: 4 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={0}
              borderStyle="solid"
              maxWidth={{md: "50%", base:"70%"}}
              display="inline-block"
              src="/images/bakehouse/bakehouse-light.png"
              alt="bakehouse logo"
            />
          </Box>
        <Section delay={0.1}>
          <Box display={{ md: 'flex' }} align="center">
            <Box
              flexShrink={8}
              mr={{ md: 6 }}
              align="left"
            >
              <Heading as="h3" variant="section-title">
                Welcome to the House!
              </Heading>
              <Text text-align="centered">
                We&apos;re a pop-up artisanal bakeshop in Bowmanville & Kingston.
                Currently, we exclusively sell NY-style cheesecakes, check out
                our menu.
              </Text>
              <br />
              <Text>
              I started to bake as a hobby when I didn&apos;t want to do my engineering homework and 
              since then my skills as a baker have developed quite a bit. 
              A lot of my close friends and family have told me that my cheesecake is really good, 
              and that I should try selling it.
              </Text>
              <br />
              <Text>
              That&apos;s what I&apos;m doing here. Hope you enjoy!
              </Text>
              <Link href="https://www.instagram.com/bakehouse.ahnaafk/" isExternal>
              <Button
                rightIcon={<ChevronRightIcon />}
                colorScheme="blue"
                my={'10%'}
                href="instagram.com"
              >
                Order now!
              </Button>
            </Link>
            </Box>
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={0}
              borderStyle="solid"
              maxWidth="60%"
              display="inline-block"
              src="/images/bakehouse/bakehouse-flyer.png"
              alt="bakehouse logo"
            />
          </Box>
        </Section>
        {/* <Section>
          <Heading as="h3" variant="section-title">
            On My Desk.
          </Heading>
          <SimpleGrid columns={[1, 2, 1]} gap={6} mt={2}>
            <GridItem
              href="https://neuradao.to"
              title="NeuraDAO"
              thumbnail={ThumbNeuradao}
            >
              First time founder @ NeuraDAO. We&apos;re building the future of
              neurotech research.
            </GridItem>
          </SimpleGrid>
          <Box align="center" my={5}>
            <NextLink href={'/portfolio'}>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
                Check out my Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section> */}
      </Container>
    </Layout>
  )
}

export default Page
