/* eslint-disable @next/next/no-img-element */
import Countdown from 'components/Countdown'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Participants from 'components/Participants'
import Sponsors from 'components/Sponsors'
import { Instagram, Whatsapp } from 'styled-icons/boxicons-logos'
import { EmailOutline } from 'styled-icons/evaicons-outline'
import Activities from '../../components/Activities'
import * as S from './styles'

const Home = () => (
  <S.Wrapper>
    <S.Hero>
      <Header transparent hideLogo />
      <S.HeroContent>
        <img src="/img/logo2.png" />
        <S.HeroText>
          <h1>I congresso roraimense de trauma e emergências médicas</h1>
          <p style={{ color: '#D1B53F' }}>17, 18, 19 de novembro</p>
        </S.HeroText>

        <S.ButtonsWrapper>
          {/* <Button as="a" href="/valores">
            Quero participar
            <Check2 />
          </Button> */}
        </S.ButtonsWrapper>

        <S.SocialButtonsWrapper>
          <a
            href="https://www.instagram.com/gepet_uerr/"
            target="_blank"
            rel="noreferrer"
          >
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
        <strong style={{ textAlign: 'left' }}>
          I Congresso Roraimense de Trauma e Emergências Médicas
        </strong>
        <p style={{ lineHeight: '3rem' }}>
          De 17 a 19 de novembro vamos estar juntos, em Boa Vista-RR, no evento
          do GEPET mais aguardado dos últimos tempos. Será um momento especial
          para nos reencontrarmos, compartilharmos experiências, aprendizados, e
          nos tornarmos ainda melhores!
        </p>
        {/* <Button as="a" href="/valores">
          INSCREVA-SE
        </Button> */}
      </S.AboutText>

      <S.AboutImage>
        <img src="/img/doctors.jpg" alt="doctors" />
      </S.AboutImage>
    </S.About>

    {/* <ScheduleSection /> */}

    <S.About className="bv">
      <S.AboutText>
        <p id="about">Local</p>
        <strong>Em Boa Vista, RR</strong>
        <S.AboutImage>
          <img src="/img/bv.jpeg" alt="doctors" />
        </S.AboutImage>
      </S.AboutText>
    </S.About>

    <S.About>
      <S.AboutText>
        {/* <p id="about">Credenciamento</p> */}
        <strong style={{ textAlign: 'left' }}>
          Credenciamento, Palestras e Apresentações Orais: Conselho Regional de
          Medicina (CRM)
        </strong>
        <p style={{ lineHeight: '3rem' }}>
          O coração da medicina em Roraima pronto para receber os congressistas
        </p>
      </S.AboutText>
      <S.AboutImage>
        <img src="/img/crm_foto.png" alt="doctors" />
      </S.AboutImage>
    </S.About>

    <S.About>
      <S.AboutText>
        {/* <p id="about">Sobre o congresso</p> */}
        <strong style={{ textAlign: 'left' }}>
          Palestras, Pôsters e Minicursos: UERR, Campus Boa Vista
        </strong>
      </S.AboutText>
      <S.AboutImage>
        <img src="/img/Uerr_foto.JPG" alt="doctors" />
      </S.AboutImage>
    </S.About>

    <Participants />

    <Activities />

    <Countdown />

    <Sponsors />

    <Footer />
  </S.Wrapper>
)

export default Home
