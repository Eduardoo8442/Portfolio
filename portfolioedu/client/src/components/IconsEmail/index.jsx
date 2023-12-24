import React from "react";
import { Container } from './styled';
import { FaGithub, FaSteam, FaDiscord } from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function IconsEmail() {
    function handleGit() {
        window.location.href = 'https://github.com/eduardoo8442';
    }
    function handleSteam() {
        return null;
    }
    function handleDiscord() {
            toast.info('Nick Discord: eduardoo84', {
              position: toast.POSITION.BOTTOM_CENTER,
              icon: <FaDiscord/>, 
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
             draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }
    return (
        <Container>
       <FaGithub size={20} className="icon" onClick={handleGit}/>
       <FaSteam size={20} className="icon" onClick={handleSteam}/>
       <FaDiscord size={20} className="icon" onClick={handleDiscord}/>
        </Container>
    )
}