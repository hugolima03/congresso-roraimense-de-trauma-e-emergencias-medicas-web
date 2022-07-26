/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { Instagram, Whatsapp } from 'styled-icons/boxicons-logos'
import { EmailOutline } from 'styled-icons/evaicons-outline'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <S.Grid>
      <S.Column id="contact">
        <S.Strong>Contato</S.Strong>
        <S.TextRow>
          <Whatsapp />
          (95) 98119-0726
        </S.TextRow>
        <S.TextRow>
          <Instagram />
          <a
            href="https://www.instagram.com/gepet_uerr/"
            target="_blank"
            rel="noreferrer"
          >
            @gepet_uerr
          </a>
        </S.TextRow>
        <S.TextRow style={{ wordBreak: 'break-word' }}>
          <EmailOutline />
          grupogepet46@gmail.com
        </S.TextRow>
      </S.Column>

      <S.Column id="event">
        <S.Strong>Evento</S.Strong>
        <Link href="/">Início</Link>
        {/* <Link href="/valores">Incrições</Link> */}
        {/* <Link href="/info">Envio de artigos</Link> */}
        <Link href="/programacao">Programação</Link>
      </S.Column>

      {/* <S.Column id="madeby">
        <S.Strong>Realização</S.Strong>

        <S.Row>
          <img src="/img/logo-red.png" alt="logo" />
          <img src="/img/crm.JPG" alt="logo" />
          <img src="/img/uerr.PNG" alt="logo" />
        </S.Row>
      </S.Column> */}

      <S.Copyright>
        Copyright © 2022 – I Congresso Roraimense de Trauma e Emergências
        Médicas
      </S.Copyright>
    </S.Grid>
  </S.Wrapper>
)

export default Footer
