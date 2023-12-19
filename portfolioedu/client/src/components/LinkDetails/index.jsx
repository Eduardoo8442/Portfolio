import React, { useEffect } from 'react';
import { Paragrafo, Line, PageStyles } from './styled';
import { useSelector, useDispatch } from 'react-redux';
import { embed } from '../../store/actions';
export default function LinkDetails() {
    const dispatch = useDispatch();
    const showDetails = useSelector(state => state.showDetails ? state.showDetails.showDetails : null);
    useEffect(() => {
      const link = document.querySelector(".link");
      link.addEventListener('click', e => {
        if(showDetails) return;
        dispatch(embed(true));
        console.log(8)
      });


    }, []);
    return (
    <div>
      <PageStyles />
      <a className='link' href='#container'> <Paragrafo className='link'>Ver detalhes</Paragrafo> </a>
       <Line />
    </div>
    )
}