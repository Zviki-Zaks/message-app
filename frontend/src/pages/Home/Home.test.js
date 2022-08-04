import { render, screen } from "@testing-library/react"
import { Home } from "./Home"

describe('Home', () => {
    it('renders home page', () => {
        render(<Home />)
        const home = screen.getByText(/welcome/i)
        expect(home).toBeInTheDocument()

    })
})
