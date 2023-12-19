import React from 'react';
import { PageStyle } from './styled';
export default function Icon() {

    const imagePath = '/img/iconperfil.png';
    return (
        <div>
            <PageStyle />
     <div className='icon'>
     
        <img src={imagePath}  />
     </div>
     </div>
    )
}