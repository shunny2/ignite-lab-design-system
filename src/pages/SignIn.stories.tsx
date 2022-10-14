import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { rest } from 'msw'
import { SignIn } from './SignIn'

export default {
    title: 'Pages/Sign in',
    component: SignIn,
    args: {},
    argTypes: {},
    parameters: {
        msw: {
            handlers: [
                rest.post('signIn', (req, res, ctx) => {
                    return res(ctx.json({
                        message: 'Login efetuado com sucesso!'
                    }))
                })
            ]
        }
    }
} as Meta

export const Default: StoryObj = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement)

        userEvent.type(canvas.getByPlaceholderText('johndoe@example.com'), 'alexander.davis.098@gmail.com')
        userEvent.type(canvas.getByPlaceholderText('***************'), '12345678')

        userEvent.click(canvas.getByRole('button'))

        await waitFor(() => {
            expect(canvas.getByText('Login efetuado com sucesso!')).toBeInTheDocument()
        })
    }
}