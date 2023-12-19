import React, { useRef } from 'react';
import { Container, Input, Button, Email } from './styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validator from 'validator';

export default function FormEmail() {
    const emailRef = useRef();
    const messageRef = useRef();

    function submitEmail(e) {
        e.preventDefault();

        const input1 = emailRef.current;
        const input2 = messageRef.current;

        if (!input1 || !input2) {
            toast.error("Erro ao enviar email.", {
                position: toast.POSITION.BOTTOM_CENTER
            });
            return;
        }

        if (!input1.value || !input2.value) {
            toast.error("Campos vazios", {
                position: toast.POSITION.BOTTOM_CENTER
            });
            return;
        }

        if (!validator.isEmail(input1.value)) {
            toast.error("Email inválido.", {
                position: toast.POSITION.BOTTOM_CENTER
            });
            return;
        }

        const dados = {
            email: input1.value,
            message: input2.value,
        };

        fetch('https://formspree.io/f/mknldozn', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(dados),
        })
        .then(response => {
            if (response.ok) {
                toast.success("Seu email foi enviado com sucesso!", {
                    position: toast.POSITION.BOTTOM_CENTER
                });
                input1.value  = '';
                input2.value = '';
            } else {
                toast.error("Erro ao enviar email.", {
                    position: toast.POSITION.BOTTOM_CENTER
                });
            }
        })
        .catch(error => {
            toast.error("Erro ao enviar email.", {
                position: toast.POSITION.BOTTOM_CENTER
            });
        });
    }

    return (
        <Container>
            <Email>
                <Input name='email' type='text' ref={emailRef} placeholder='ExemploEmail@gmail.com' />
                <Input name='assunto' type='text' ref={messageRef} placeholder='Assunto do email' />
                <Button className='submitemail' onClick={submitEmail}>Enviar</Button>
            </Email>
            <ToastContainer />
        </Container>
    );
}
