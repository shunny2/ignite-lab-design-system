import { FormEvent, useState } from 'react';
import { Envelope, Lock } from 'phosphor-react';
import { Button } from '../components/Button';
import { Checkbox } from '../components/Checkbox';
import { Heading } from '../components/Heading';
import { Text } from '../components/Text';
import { TextInput } from '../components/TextInput';
import { Logo } from '../Logo';

import axios from 'axios';

export function SignIn() {
    const [isUserSignedIn, setIsUserSignedIn] = useState(false)

    async function handleSignIn(event: FormEvent) {
        event.preventDefault()

        await axios.post('signIn', {
            email: 'alexander.davis.098@gmail.com',
            password: '12345678'
        })
        setIsUserSignedIn(true)
    }

    return (
        <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center text-gray-100'>
            <div className='flex flex-col items-center justify-center border-2 border-cyan-500/40 w-[512px] h-[738px] shadow-lg shadow-cyan-500'>
                <header className='flex flex-col items-center mt-8'>
                    <Logo />

                    <Heading size='lg' className='mt-4'>
                        Ignite Lab
                    </Heading>

                    <Text size='lg' className='text-gray-400 mt-1'>
                        Faça login e comece a usar!
                    </Text>
                </header>

                <form onSubmit={handleSignIn} className='flex flex-col gap-4 items-stretch w-full max-w-[400px] mt-10 mx-14'>
                    { isUserSignedIn && <Text className='text-center text-cyan-500'>Login efetuado com sucesso!</Text>}
                    
                    <label htmlFor="email" className='flex flex-col gap-3'>
                        <Text className='font-semibold'>Endereço de e-mail</Text>
                        <TextInput.Root>
                            <TextInput.Icon>
                                <Envelope />
                            </TextInput.Icon>
                            <TextInput.Input type="email" id="email" placeholder='johndoe@example.com' />
                        </TextInput.Root>
                    </label>

                    <label htmlFor="password" className='flex flex-col gap-3'>
                        <Text className='font-semibold'>Sua senha</Text>
                        <TextInput.Root>
                            <TextInput.Icon>
                                <Lock />
                            </TextInput.Icon>
                            <TextInput.Input type="password" id="password" placeholder='***************' />
                        </TextInput.Root>
                    </label>

                    <label htmlFor='remember' className='flex items-center gap-2'>
                        <Checkbox id='remember' />
                        <Text size='sm' className='text-gray-200'>
                            Lembrar de mim por 30 dias
                        </Text>
                    </label>

                    <Button type='submit' className='mt-4'>
                        Entrar na plataforma
                    </Button>
                </form>

                <footer className='flex flex-col items-center gap-4 mt-8 mb-14'>
                    <Text asChild size='sm'>
                        <a href="#forgot-password" className='text-gray-400 underline hover:text-gray-200'>Esqueceu sua senha?</a>
                    </Text>
                    <Text asChild size='sm'>
                        <a href="#signup" className='text-gray-400 underline hover:text-gray-200'>Não possui conta? Crie uma agora!</a>
                    </Text>
                </footer>
            </div>
        </div>
    )
}