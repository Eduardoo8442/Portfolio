import styled from "styled-components";
export const DivProject = styled.div`
display: flex;
flex-direction: column;
`;
export const Image = styled.img`
  position: absolute;
  user-select: none;
`;
export const DivEmbed = styled.div`
    position: relative;
  height: 140px;
  width: 250px;
  margin-top: 40px;
  border: 1px solid grey;
  border-radius: 10px;
  background-color: #242b23;
  .testee {
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center; 
    height: 100%;
  }

  .teste {
    position: absolute;
    top: 0;
    left: 0;
    color: white;
    font-family: sans-serif;
    width: 100%; 
    height: 70%;
    font-weight: bold;
    font-size: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 300ms;
    z-index: 1;
    @media (max-width: 360px) {
    font-size: 18px;
  } 
  @media (max-width: 264px) {
    font-size: 14px;
  } 
  }

  @media (max-width: 826px) {
    height: 140px;
    width: 200px;
  } 
    @media (max-width: 652px) {
height: 140px;
width: 160px;
    }
    @media (max-width: 526px) {
height: 140px;
width: 140px;
    }
    @media (max-width: 458px) {
height: 140px;
width: 110px;
    }
    @media (max-width: 375px) {
height: 140px;
width: 100px;
    }
    @media (max-width: 362px) {
height: 100px;
width: 80px;
    }
    @media (max-width: 280px) {
height: 80px;
width: 60px;
    }
    transition: 300ms;
    &:hover {
      background-color: #151316;
    .testee {
        transition: 300ms;
      filter: brightness(0.4) blur(2px);
    }
    .teste {
      opacity: 1;
    }
  }
`;
export const Container = styled.div`
 .perfil {
  left: 200px;
  top: 1250px;
  border: 2px solid #1bff07;
  transform: rotate(60deg);
  @media (max-width: 888px) {
    left: 140px;
     top: 1250px;
    } 
    @media (max-width: 774px) {
    left: 80px;
     top: 1230px;
    } 
    @media (max-width: 686px) {
    left: 80px;
     top: 1290px;
    } 
    @media (max-width: 630px) {
    left: 40px;
     top: 1290px;
    } 
    @media (max-width: 600px) {
    left: 40px;
     top: 2450px;
    } 
     @media (max-width: 540px) {
    left: 20px;
     top: 2450px;
     width: 80px;
     height: 80px;
    } 
     @media (max-width: 460px) {
    left: 10px;
     top: 2490px;
     width: 60px;
     height: 60px;
    } 
      @media (max-width: 440px) {
    left: 10px;
     top: 2460px;
     width: 60px;
     height: 60px;
    } 
    @media (max-width: 412px) {
    left: 10px;
     top: 2460px;
     width: 50px;
     height: 50px;
    } 
     @media (max-width: 392px) {
    left: 10px;
     top: 2540px;
     width: 40px;
     height: 40px;
    } 
    @media (max-width: 375px) {
    left: 10px;
     top: 2530px;
     width: 40px;
     height: 40px;
    } 
     @media (max-width: 356px) {
    left: 10px;
     top: 2518px;
     width: 40px;
     height: 40px;
    } 
    @media (max-width: 326px) {
    left: 10px;
     top: 2510px;
     width: 40px;
     height: 40px;
    } 
    @media (max-width: 300px) {
    left: 10px;
     top: 2548px;
     width: 30px;
     height: 30px;
    } 
  }
  .laptop {
  right: 160px;
  top: 1590px;
  width: 200px;
  height: 200px;
  @media (max-width: 1178px) {
    right: 120px;
    top: 1590px;
    } 
    @media (max-width: 1108px) {
    right: 70px;
    top: 1590px;
    } 
    @media (max-width: 1026px) {
    right: 40px;
    top: 1590px;
    } 
    @media (max-width: 966px) {
    right: 20px;
    top: 1590px;
    } 
    @media (max-width: 924px) {
    right: -8px;
    top: 1590px;
    width: 180px;
    height: 180px;
    } 
    @media (max-width: 764px) {
    right: 10px;
    top: 1590px;
    width: 150px;
   height: 150px;
    } 
    @media (max-width: 708px) {
    right: 8px;
    top: 1590px;
    width: 130px;
   height: 130px;
    } 
    @media (max-width: 670px) {
    right: -2px;
    top: 1660px;
    width: 130px;
   height: 130px;
    } 
    @media (max-width: 600px) {
    right: -2px;
    top: 2790px;
    width: 130px;
   height: 130px;
    }
    @media (max-width: 566px) {
    right: -2px;
    top: 2790px;
    width: 110px;
   height: 110px;
    }  
    @media (max-width: 532px) {
    right: -2px;
    top: 2790px;
    width: 100px;
   height: 100px;
    } 
    @media (max-width: 400px) {
    right: -10px;
    top: 2790px;
    width: 100px;
   height: 100px;
    } 
    @media (max-width: 360px) {
    right: -4px;
    top: 2690px;
    width: 100px;
   height: 100px;
    } 
  }
`;
export const TituloEmbed = styled.h1`
color: white;
margin: auto;
@media (max-width: 826px) {
font-size: 28px;
    } 
    @media (max-width: 652px) {
        font-size: 28px;
    }
    @media (max-width: 638px) {
        font-size: 22px;
    }
    @media (max-width: 516px) {
        font-size: 20px;
    }
    @media (max-width: 428px) {
        font-size: 15px;
    }
    @media (max-width: 334px) {
        font-size: 10px;
    }
`;
export const Titulo = styled.h1`
color: white;
margin: auto;
margin-bottom: 20px;
`;
export const Table = styled.table` 
  margin: auto;
`;

export const TableRow = styled.tr`
  display: flex;
  justify-content: center;
`;

export const TableCell = styled.td`
  padding: 10px;
`;
export const ParagrafoEmbed = styled.p`
color: white;
padding: 10px;
text-align: center;
margin: auto;
@media (max-width: 826px) {
font-size: 18px;
    } 
    @media (max-width: 652px) {
        font-size: 10px;
    }
    @media (max-width: 638px) {
        font-size: 15px;
    }
    @media (max-width: 516px) {
        font-size: 14px;
    }
    @media (max-width: 434px) {
        font-size: 10px;
    }
    @media (max-width: 362px) {
        font-size: 7px;
    }
`;
export const Paragrafo = styled.p`
color: white;
margin: auto;
`;