import { render, screen } from '@testing-library/react';
import {Loader} from './Loader'

it('renders loader',()=>{
    render(<Loader />)
    const loader = screen.getByText(/loading/i)
    expect(loader).toBeInTheDocument()
})
