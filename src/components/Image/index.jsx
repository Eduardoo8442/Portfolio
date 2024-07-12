import React from 'react';
import { Div, PageStyle } from './styled';
import Icon from '../Icon';
import TextMain from '../Text';
import LinkDetails from '../LinkDetails';
import { SiTypescript } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
export default function Image() {
    return (
        <Div>
        <PageStyle />
        <Icon className='icon'/>
        <div className='linguagem'>
            <SiTypescript  size={30} className='typescript'/><IoLogoJavascript  size={33}  className='javascript'/>
        </div>
        <TextMain />
        <LinkDetails />
    </Div>
    );
}