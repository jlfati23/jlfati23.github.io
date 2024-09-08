// index.style.js
import styled from 'styled-components';

// Main container style
export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #E2BFD9; /* Background color for the main container */
    padding: 20px;
`;

// Center content style
export const CenterContent = styled.div`
    text-align: center;
    margin-bottom: 20px;
`;

// Quote style
export const Quote = styled.blockquote`
    font-size: 1.5em;
    font-style: italic;
    color: #674188; /* Dark purple for the quote */
    border-left: 2px solid #C8A1E0; /* Light purple border */
    padding-left: 20px;
    margin: 0;
`;

// Footer navigation container style
export const FooterNav = styled.nav`
    display: flex;
    justify-content: center;
    gap: 15px;
`;

// Footer navigation item style
export const FooterNavItem = styled.a`
    font-size: 1em;
    color: #674188; /* Dark purple for links */
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
        color: #C8A1E0; /* Light purple on hover */
    }
`;
