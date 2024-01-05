import React from 'react';
import Image from '../Image';
import Details from '../Details';
import { useSelector } from 'react-redux';
import FormEmail from '../FormEmail';
import { TextEmail, ContainerEmail, Container } from './styled';
import IconsEmail from '../IconsEmail';
export default function Main() {
    const showDetails = useSelector(state => state.showDetails ? state.showDetails.showDetails : null);
    return (
    <Container>
    <Image />
    {showDetails ? (
        <ContainerEmail>
    <Details /> 
    <TextEmail>Enviar um email</TextEmail>
    <FormEmail />
    <IconsEmail />
    </ContainerEmail>
    ) : null}
    </Container>
    )
}