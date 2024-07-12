import React from 'react';
import { Container, Titulo, Paragrafo, DivProject, Image, DivEmbed, TableCell, TableRow, TituloEmbed, Table, ParagrafoEmbed } from './styled';
export default function Projects() {
  return (
   <Container>
    <Image className='perfil' src='img/iconperfil.png' />
      <Image className='laptop' src='img/laptop.png' />
    <DivProject>
    <Titulo>Projetos</Titulo>
         <Paragrafo>
        Alguns projetos já desenvolvido.
         </Paragrafo>
    </DivProject>
    <Table>
  <TableRow>
    <TableCell>
      <DivEmbed>
        <div className='testee'>
        <TituloEmbed>Jogo</TituloEmbed>
        <ParagrafoEmbed>Jogo simples desenvolvido em React, Node e WebSockets</ParagrafoEmbed>
       </div>
        <p className='teste'>Github</p>
      </DivEmbed>
    </TableCell>
    <TableCell>
      <DivEmbed>
      <div className='testee'>
        <TituloEmbed>Chat</TituloEmbed>
        <ParagrafoEmbed>Chat completo utilizando React, Node e WebSockets</ParagrafoEmbed>
        </div>
        <p className='teste'>Github</p>
      </DivEmbed>
    </TableCell>
    <TableCell>
      <DivEmbed>
      <div className='testee'>
        <TituloEmbed>Samp query</TituloEmbed>
        <ParagrafoEmbed>API para consultar servidores samp em typescript</ParagrafoEmbed>
        </div>
        <p className='teste'>Github</p>
      </DivEmbed>
    </TableCell>
  </TableRow>
  <TableRow>
    <TableCell>
      <DivEmbed>
      <div className='testee'>
        <TituloEmbed>Noivado</TituloEmbed>
        <ParagrafoEmbed>Site para um noivado</ParagrafoEmbed>
        </div>
        <p className='teste'>Privado</p>
      </DivEmbed>
    </TableCell>
    <TableCell>
      <DivEmbed>
      <div className='testee'>
        <TituloEmbed>API restart</TituloEmbed>
        <ParagrafoEmbed>API para alertar usuários quando um determinado site reinicia</ParagrafoEmbed>
      </div>
      <p className='teste'>Github</p>
      </DivEmbed>
    </TableCell>
  </TableRow>
</Table>
   </Container>

    )
}