/* eslint-disable @next/next/no-img-element */
import Button from 'components/Button'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Participants from 'components/Participants'
import ScheduleSection from 'components/ScheduleSection'
import { Check2, FileEarmarkRichtext } from 'styled-icons/bootstrap'
import { Instagram, Whatsapp } from 'styled-icons/boxicons-logos'
import { EmailOutline } from 'styled-icons/evaicons-outline'
import * as S from './styles'

const Home = () => (
  <S.Wrapper>
    <S.Hero>
      <Header transparent hideLogo />
      <S.HeroContent>
        <img src="/img/logo.png" />
        <S.HeroText>
          <h1>1º congresso roraimense de trauma e emergências médicas</h1>
          <p>24, 25, 26 de novembro</p>
        </S.HeroText>

        <S.ButtonsWrapper>
          <Button as="a" href="/inscricao">
            Quero participar
            <Check2 />
          </Button>
          <Button as="a" href="/inscricao/artigo" backgroundColor="red">
            Submissão de artigos
            <FileEarmarkRichtext />
          </Button>
        </S.ButtonsWrapper>

        <S.SocialButtonsWrapper>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <Instagram />
          </a>

          <a
            href="https://wa.me/559581190726?lang=pt_br"
            target="_blank"
            rel="noreferrer"
          >
            <Whatsapp />
          </a>

          <a href="mailto:grupogepet46@gmail.com">
            <EmailOutline />
          </a>
        </S.SocialButtonsWrapper>
      </S.HeroContent>
    </S.Hero>

    <S.About>
      <S.AboutText>
        <p id="about">Sobre o congresso</p>
        <strong>INSIRA SEU TEXTO AQUI</strong>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Button as="a" href="/inscricao">
          INSCREVA-SE
        </Button>
      </S.AboutText>

      <S.AboutImage>
        <img src="/img/doctors.jpg" alt="doctors" />
      </S.AboutImage>
    </S.About>

    <ScheduleSection />

    <Participants />

    <Footer />
  </S.Wrapper>
)

export default Home
