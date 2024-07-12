import React from "react";
import { Container } from './styled';
import { FaGithub, FaSteam, FaDiscord } from "react-icons/fa";
export default function IconsEmail() {
    function handleGit() {
        window.location.href = 'https://github.com/eduardoo8442';
    }
    function handleSteam() {
        return null;
    }
    function handleDiscord() {
        window.location.href = 'https://discord.com/users/347853688649547776';
    }
    return (
        <Container>
       <FaGithub size={20} className="icon" onClick={handleGit}/>
       <FaSteam size={20} className="icon" onClick={handleSteam}/>
       <FaDiscord size={20} className="icon" onClick={handleDiscord}/>
        </Container>
    )
}