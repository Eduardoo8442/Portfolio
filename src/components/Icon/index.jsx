import React from 'react';
import { PageStyle, HoverIcon, Paragrafo, Container } from './styled';
export default function Icon() {

    const imagePath = '/img/iconperfil.png';
    return (
        <Container>
            <PageStyle />
     <div className='icon'>
     
        <img src={imagePath}  />
     </div> 
     <HoverIcon>
    <Paragrafo>Foto Discord</Paragrafo>
    </HoverIcon>   
     </Container>
    )
}