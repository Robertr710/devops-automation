import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App Component', function() {
    it('renders without crashing', function() {
        render(<App />);
    });

    it('displays the app title', function() {
        const { getByText } = render(<App />);
        const titleText = getByText("Robert's Jenkins Test React App");
        expect(titleText).toBeInTheDocument();
    });

    it('contains a "Learn React" link', function() {
        const { getByText } = render(<App />);
        const linkText = getByText('Learn React');
        expect(linkText).toBeInTheDocument();
    });

    it('contains the React logo', function() {
        const { getByAltText } = render(<App />);
        const logo = getByAltText('logo');
        expect(logo).toBeInTheDocument();
    });
});
