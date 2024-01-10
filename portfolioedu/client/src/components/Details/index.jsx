import React from "react";
import { Github, Linkedin, Discord, Container, PageStyle, Titulo } from "./styled";
import { FaDiscord } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Details() {
  const discordPath = '/img/iconperfil.png';
  const githubPath = '/img/github.png';
  const linkedinPath = '/img/linkedin.png';
  function showGitHub() {
    window.location.href = '  https://github.com/eduardoo8442';
  }
  function showLink() {
    toast.error("Em breve.", {
      position: toast.POSITION.BOTTOM_CENTER
  });
  }
  function showDiscord() {
    window.location.href = 'https://discord.com/users/347853688649547776';
  }
  return (
    <Container id='container'> 
      <PageStyle />
      <Discord>
        <div className="allt">
      <div className="imagea">
      <img src={discordPath}  />
      </div>
      <div className="titulo">
      <Titulo>discord</Titulo>
      </div>
      <div className="contato">
        <button className="contatods" onClick={showDiscord}>contato <FaDiscord /></button>
      </div>
      <div className="ballds">
      <div className="ballpds"><FaDiscord size={18}/></div>
      </div>
      </div>
      </Discord>
      
      
      <Github>
      <div className="allt">
      <div className="imagea">
      <img src={githubPath}  />
      </div>
      <div className="titulo">
      <Titulo>github</Titulo>
      </div>
      <div className="contato">
        <button className="contatogh" onClick={showGitHub}>perfil <FaGithub /></button>
      </div>
      <div className="ballgh">
      <div className="ballpgh"><FaGithub /></div>
      </div>
      </div>
      </Github>
      <Linkedin>
      <div className="allt">
      <div className="imagea">
      <img src={linkedinPath}  />
      </div>
      <div className="titulo">
      <Titulo>linkedin</Titulo>
      </div>
      <div className="contato">
        <button className="contatold" onClick={showLink}>perfil <FaLinkedin /></button>
      </div>
      <div className="ballld">
      <div className="ballpld"><FaLinkedin /></div>
      </div>
      </div>
      </Linkedin>
    </Container>
  )

}