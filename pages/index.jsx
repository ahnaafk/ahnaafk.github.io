/* eslint-disable react/no-unescaped-entities */
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
  IoLogoBehance,
  IoLogoMedium,
  IoLogoLinkedin
} from 'react-icons/io5'
import { SiGmail } from 'react-icons/si'

const Page = () => {
  const profileImageSrc = '/images/headshot.jpeg'; // You can change this dynamically based on your logic

  return (
    <Layout>
      <Container maxW={{base: '100%', md: '60%'}}>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mt={2}
          mb={6}
          align="center"
        >
          Hey! I&apos;m currently exploring new domains in space tech and climate tech. <br />
          If you&apos;d like to talk about either, feel free to send me an{' '}
          <Link href="mailto:ahnaafk@gmail.com" target="_blank">
            email!
          </Link>
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Ahnaaf Khan
            </Heading>
            <p>Mechatronics & Robotics Engineering Undergraduate @ Queen&apos;s University</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              width={{ base: '120px', sm: '140px', md: '150px' }}
              maxWidth="150px"
              display="inline-block"
              borderRadius="full"
              src={profileImageSrc} // Use the dynamic source here
              alt="profile pic"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Professionally.
          </Heading>
          <Text text-align="centered">
           I&apos;m a mechatronics engineering undergraduate @ Queen&apos;s University with experience across climate tech, 
           robotics, and neurotech. My best work is done when I’m taking new ideas from 0-1, or working on interesting problems. 
          </Text>

          <Text mt={'1rem'} mb={'1.5rem'}>
            Currently, I’m an engineering intern at <Link href="https://www.mda.space/" target="_blank">MDA Space</Link> working with the Guidance, Navigation and Controls group. 
            With this internship, my goal is to learn control theory and robotics design through the unique challenges presented in space tech. 
          </Text>

          <Text as="u">
            <Text as="b">Past Works:</Text>
          </Text>
          <UnorderedList mt={'0.5rem'}>
            <ListItem><Text as="b">Cofounder @ Qlean</Text> - built the premier climate engineering design club at Queen&apos;s University, bringing 40+ engineering students together to build engineering solutions to climate change</ListItem>
            <ListItem><Text as="b">Assistant Course Developer @ Queen&apos;s University</Text> - Created and redesigned instructional resources adopted by 300+ students per term</ListItem>
            <ListItem><Text as="b">Assistant AI Instructor @ SureStart</Text> - Launched the inaugural Slingshot Academy: AI Labs at Branksome Hall, designing and delivering curriculum on Generative AI for students with no prior coding experience</ListItem>
            <ListItem><Text as="b">R&amp;D Intern @ Muse</Text> - Helped launch a consumer neurofeedback product, increasing sleep quality for 200k+ users by 20%</ListItem>
            <ListItem>Spoke at several conferences around the world, most notably Collision and ETHAmsterdam</ListItem>
          </UnorderedList>
          
          <Text mt={'1rem'} mb={'1rem'}>
            On my nights and weekends, I write personal essays on my <Link href="https://ahnaafk.substack.com" target="_blank">Substack</Link>, and articles about tech &amp; startups. Here&apos;s a sample of my writing that I&apos;m particularly proud of:
          </Text>

          <UnorderedList>
            <ListItem>
              <Link href="https://www.queensjournal.ca/i-saw-a-glimpse-of-the-future-of-education-with-genai-and-i-hate-it/" target="_blank">
                I saw a glimpse of the future of education with GenAI, and I hate it
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://ahnaafk.substack.com/p/a-letter-to-2024-ahnaafs-24th-life" target="_blank">
                A letter to 2024
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://medium.com/@ahnaafk/understanding-dacs-pathways-to-profitability-9755fc4dab2b" target="_blank">
                Understanding DAC's Pathways to Profitability
              </Link>
            </ListItem>
          </UnorderedList>

          <Text mt={'1.5rem'} mb={'1.5rem'}>
            <Text as={'b'}>Technologies I&apos;ve worked with:</Text> Python, C/C++, JavaScript, React,
            Arduino, SolidWorks, LTSpice, Figma
          </Text>

          <Box display="flex" flexDirection={{ base: "column", md: "row" }} justifyContent={{ base: "center", md: "space-between" }} alignItems="center" gap={{ base: 4, md: 2 }} width="100%">
            <NextLink href={'/portfolio'}>
              <Button
                colorScheme="blue"
                my={'1.5%'}
                width={{ base: "100%", md: "auto" }}
              >
                Check out my Portfolio
              </Button>
            </NextLink>
            {/* <a href="/resume.pdf" download> */}
              <Button
                as="a"
                href="/resume.pdf"
                download
                colorScheme="blue"
                my={'1.5%'}
                width={{ base: "100%", md: "auto" }}
              >
                Download my Resume
              </Button>
            {/* </a> */}
          </Box>
          <Section delay={0.2}>
            <Heading as={'h3'} variant="sub-section-title">
              Personally!
            </Heading>

            <Text text-align="centered" mt={4}>
              I spend my free time listening to music, training in Muay
              Thai, baking cheesecakes, taking photos, seeing friends, and reading.{' '}
              <br />
              <br />
              In the past 6 months, I started my 3rd year at university, learned how to skateboard, and started playing the harmonica. <br />
            </Text>
          </Section>
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

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Connect w/ me.
          </Heading>
          <SimpleGrid columns={{ base: 2, md: 3 }} gap={{ base: 6, md: 4 }} width="100%">
            <Box>
              <Link
                href="https://www.linkedin.com/in/ahnaaf-khan/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="blue"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                  width="100%"
                  height="100%"
                >
                  Ahnaaf Khan
                </Button>
              </Link>
            </Box>
            <Box>
              <Link href="mailto:ahnaafk@gmail.com" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="blue"
                  leftIcon={<Icon as={SiGmail} />}
                  width="100%"
                  height="100%"
                >
                  ahnaafk@gmail.com
                </Button>
              </Link>
            </Box>
            <Box>
              <Link href="https://twitter.com/ahnaafkk" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="blue"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                  width="100%"
                  height="100%"
                >
                  @ahnaafkk
                </Button>
              </Link>
            </Box>
            <Box>
              <Link href="https://github.com/ahnaafk" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="blue"
                  leftIcon={<Icon as={IoLogoGithub} />}
                  width="100%"
                  height="100%"
                >
                  @ahnaafk
                </Button>
              </Link>
            </Box>
            <Box>
              <Link href="https://ahnaafk.medium.com" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="blue"
                  leftIcon={<Icon as={IoLogoMedium} />}
                  width="100%"
                  height="100%"
                >
                  @ahnaafk
                </Button>
              </Link>
            </Box>
            <Box>
              <Link href="https://www.behance.net/ahnaafkhan" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="blue"
                  leftIcon={<Icon as={IoLogoBehance} />}
                  width="100%"
                  height="100%"
                >
                  Ahnaaf Khan
                </Button>
              </Link>
            </Box>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
