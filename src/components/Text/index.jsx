import React, { useState, useEffect } from 'react';
import { Paragrafo, PageStyles, Container } from './styled';
export default function TextMain() {
    const [ponto, setPonto] = useState('');
    const [nome, setNome] = useState('');
    useEffect(() => {
      const nick = 'eduardo';
      let index = 0;
      const intervalNIck = setInterval(() => {
        if (index === 6) clearInterval(intervalNIck);
        setNome(prevNome => `${prevNome}${nick[prevNome.length]}`);
        index++;
      }, 100);
    
      return () => clearInterval(intervalNIck);
    }, []);
    
  useEffect(() => {
      const intervalId = setInterval(() => {
        if (ponto.length === 3) {
            setPonto('');
          } else {
            setPonto(`${ponto}.`);
          }
      }, 200);
      
      return () => {
        clearInterval(intervalId);
      }
    }, [ponto]);
    return (
        <Container>
        <PageStyles />
          <Paragrafo>
            Olá, meu nome é <span>{nome}</span> {ponto} <br />
            E sou desenvolvedor full-stack
          </Paragrafo>
          </Container>
    )
}