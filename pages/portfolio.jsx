import {
  Container,
  Box,
  Heading,
  SimpleGrid,
  Divider,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import Section from '../components/section'
import { PortfolioGridItem, GridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import ThumbNeuradao from '../public/images/contents/thumb-neuradao.png'
import ThumbLiberia from '../public/images/contents/thumb-liberia.png'
import ThumbLeague from '../public/images/contents/thumb-league.png'
import ThumbShazam from '../public/images/contents/thumb-shazam.png'
import ThumbDinosaur from '../public/images/contents/thumb-dinosaur.png'
import ThumbCollision from '../public/images/contents/thumb-collision.png'
import ThumbDesciday from '../public/images/contents/thumb-desciday.png'

const Portfolio = () => {
  return (
    <Layout>
      <Container
      maxW={"60%"}>
        <Heading as="h1" fontSize={40} mt={4}>
          Portfolio
        </Heading>
        <Text>
          Welcome to my Portfolio. I&apos;ve been primarily focusing on
          neurotech development, NeuraDAO and full-stack development.  
        </Text>
        <Divider
          my={4}
          borderWidth={1}
          borderColor={useColorModeValue('#1a202c', '#eeeeee')}
        />
        <Heading as="h3" fontSize={20} mt={2} mb={4}>
          Projects
        </Heading>
        <SimpleGrid columns={[1, 1, 1]} gap={6}>
          <Section delay={0.3}>
            <PortfolioGridItem
              id="neuradao"
              title="NeuraDAO"
              thumbnail={ThumbNeuradao}
            >
              First time founder @ NeuraDAO. We&apos;re building the future of
              neurotech research.
            </PortfolioGridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.3} marginBottom={3}>
          <Divider
            my={4}
            borderWidth={1}
            borderColor={useColorModeValue('#1a202c', '#eeeeee')}
          />
          <Heading as="h3" fontSize={20} mt={2}>
            Talks
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <GridItem
              href="https://www.youtube.com/watch?v=IXb5zh8OdM0"
              title="DeSci Day @ ETHAmsterdam 22: NeuraDAO Pitch"
              thumbnail={ThumbDesciday}
            >
              At the first ever DeSci Day, I was given the opportunity to pitch
              NeuraDAO onstage.
            </GridItem>
          </Section>
          <Section delay={0.3}>
            <GridItem
              href="https://youtu.be/nAMt23Fjz1A"
              title="Collision 2022: Why Should We Care about Web3 Social Media?"
              thumbnail={ThumbCollision}
            >
              A panel w/ CEO of AAVE, CMO of Award Pool and I, regarding Web3 x
              Social Media.
            </GridItem>
          </Section>
        </SimpleGrid>

        <Section delay={0.3} marginBottom={3}>
          <Divider
            my={4}
            borderWidth={1}
            borderColor={useColorModeValue('#1a202c', '#eeeeee')}
          />
          <Heading as="h3" fontSize={20} mt={2}>
            Old Projects
          </Heading>
        </Section>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <PortfolioGridItem
              id="liberia"
              title="TKS Earthshot: Electrify Liberia"
              thumbnail={ThumbLiberia}
            >
              Capstone project @ TKS Activate, where we built a social
              entrepreneurship solution to a real problem to try and solve it.
            </PortfolioGridItem>
          </Section>
          <Section delay={0.3}>
            <PortfolioGridItem
              id="dinosaur"
              title="Playing The Dino Game With My Brain"
              thumbnail={ThumbDinosaur}
            >
              My first Brain-Computer Interface project w/ the OpenBCI Ganglion,
              and Brainflow.
            </PortfolioGridItem>
          </Section>
          <Section delay={0.3}>
            <PortfolioGridItem
              id="league"
              title="Playing League Of Legends With BCIs"
              thumbnail={ThumbLeague}
            >
              One of my first Brain-Computer Interface projects w/ the OpenBCI
              Ganglion, and Brainflow.
            </PortfolioGridItem>
          </Section>
          <Section delay={0.3}>
            <GridItem
              href="https://ahnaafk.medium.com/a-shazam-for-your-brain-d42c50ebabe"
              title="A Shazam for Your Brain?"
              thumbnail={ThumbShazam}
            >
              A more intensive BCI project focusing on stimulus reconstruction
              from the OpenMIIR Dataset.
            </GridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Portfolio
