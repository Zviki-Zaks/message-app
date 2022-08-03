import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { Login } from './Login'

describe('LoginPage', () => {
    it('should renders cmp', () => {
        render(
            <Provider store={store}>

                <Login />
            </Provider>
        )
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()
    })
})
