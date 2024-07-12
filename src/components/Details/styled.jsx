import { styled ,createGlobalStyle} from 'styled-components';

export const PageStyle = createGlobalStyle`
    img {
    width: 100px;
    margin-top: 14px;
    border-radius: 50%;
    height: 100px;
    }
    @font-face {
    font-family: 'Whitney-BoldItalic';
    src: url('fonts/whitney-bolditalicsc.otf') format('opentype');
}

.allt {
    display: flex;
    flex-direction: column;
}
svg {
    margin-left: 6px;
}
.imagea {
    display: flex;
    justify-content: center;
}
.ballds {
    display: flex;
    justify-content: center;
    margin-top: 25px;
}
.ballpds {
display: flex;
justify-content: center;
  width: 30px;
  height: 30px;
  align-items: center;
  color: blue;
  margin-right: 15px;
  border-radius: 50%;
  animation: pulse 1s infinite alternate;
}
.ballgh {
    display: flex;
    justify-content: center;
    margin-top: 45px;
}
.ballpgh {
display: flex;
justify-content: center;
  width: 30px;
  color: white;
  margin-right: 15px;
  height: 30px;
  border-radius: 50%;
  animation: pulse 1s infinite alternate;
}

.ballld {
    display: flex;
    justify-content: center;
    margin-top: 45px;
}
.ballpld {
display: flex;
justify-content: center;
  width: 30px;
  height: 30px;
  margin-right: 15px;
  color: #06b3ca;
  border-radius: 50%;
  animation: pulse 1s infinite alternate;
}

@keyframes pulse {
  0% {
    transform: scale(2.0);

  }
  100% {
    transform: scale(2.5);
 
  }
}
.contatods {
    display: flex;
    justify-content: center;
    width: 140px;
    height: 40px;
    border-radius: 10px;
    font-size: 20px;
    color: white;
    border-style: none;
    align-items: center;
    background-color: blue;
    font-family: 'Whitney-BoldItalic', sans-serif;
    transition: 300ms;
    &:hover {
        transition: 300ms;
        background-color: #fafafa;
        color: blue;
    }
}
.contatogh {
    display: flex;
    justify-content: center;
    width: 140px;
    height: 40px;
    border-radius: 10px;
    font-size: 20px;
    color: #252424;
    border-style: none;
    align-items: center;
    background-color: white;
    font-family: 'Whitney-BoldItalic', sans-serif;
    transition: 300ms;
    &:hover {
        transition: 300ms;
        background-color: #000000;
        color: white;
    }
}
.contatold {
    display: flex;
    justify-content: center;
    width: 140px;
    height: 40px;
    border-radius: 10px;
    font-size: 20px;
    color: white;
    border-style: none;
    align-items: center;
    background-color: #06b3ca;
    font-family: 'Whitney-BoldItalic', sans-serif;
    transition: 300ms;
    &:hover {
        transition: 300ms;
        background-color: #ffffff;
        color: #06b3ca;;
    }
}
.contato {
    display: flex;
    justify-content: center;
}
.titulo {
    display: flex;
    justify-content: center;
}
`;
export const Titulo = styled.p`
font-family: 'Whitney-BoldItalic', sans-serif;
color: white;
font-size: 25px;
`;
export const Discord = styled.div`
border: 2px black solid;
width: 260px;
height: 430px;
border-radius: 20px;
background-color: #212222;
transition: 300ms;
&:hover {
    border: 5px blue solid;
}
`;
export const Github = styled.div`
border: 2px black solid;
width: 260px;
height: 430px;
border-radius: 20px;
background-color: #212222;
transition: 300ms;
@media (max-width: 600px) {
 margin-top: 16px;
    } 
&:hover {
    border: 5px white solid;
}
`;
export const Linkedin = styled.div`
border: 2px black solid;
width: 260px;
height: 430px;
border-radius: 20px;
background-color: #212222;
transition: 300ms;
@media (max-width: 600px) {
 margin-top: 16px;
    } 
&:hover {
    border: 5px #06b3ca solid;
}
`;
export const Container = styled.div`
display: flex;
justify-content: space-between;
margin: 80px;
flex-direction: row;
@media (max-width: 600px) {
   display: flex;
   justify-content: center;
   flex-direction: column;
   margin: auto;
   margin-top: 80px;
   margin-bottom: 80px;
    } 
`;