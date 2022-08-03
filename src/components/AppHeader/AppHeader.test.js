import { render, screen } from "@testing-library/react"
import { AppHeader } from "./AppHeader"
import { BrowserRouter, NavLink } from 'react-router-dom'


describe('AppHeader', () => {
    it('renders cmp', () => {
        render(
            <BrowserRouter>
                <AppHeader />
            </BrowserRouter>
        )
        const logo = screen.getByText(/app/i)
        expect(logo).toBeInTheDocument()
    })
})
