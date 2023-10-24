const React = require('react');
const { render } = require('@testing-library/react');
const App = require('../src/App');

describe('App Component', function() {
    it('renders without crashing', function() {
        render(React.createElement(App));
    });

    it('displays the app title', function() {
        const { getByText } = render(React.createElement(App));
        const titleText = getByText("Robert's Jenkins Test React App");
        expect(titleText).toBeInTheDocument();
    });

    it('contains a "Learn React" link', function() {
        const { getByText } = render(React.createElement(App));
        const linkText = getByText('Learn React');
        expect(linkText).toBeInTheDocument();
    });

    it('contains the React logo', function() {
        const { getByAltText } = render(React.createElement(App));
        const logo = getByAltText('logo');
        expect(logo).toBeInTheDocument();
    });
});

