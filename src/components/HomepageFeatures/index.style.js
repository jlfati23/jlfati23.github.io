import styled from 'styled-components';

// Main Container
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #F7EFE5; /* Background color for the page */
  font-family: 'Roboto', sans-serif;
  position: relative;
`;

// Center Content
export const CenterContent = styled.div`
  text-align: center;
  max-width: 600px;
  padding: 2rem;
`;

// Picture
export const Picture = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

// Quote
export const Quote = styled.blockquote`
  font-size: 1.5rem;
  font-style: italic;
  margin-top: 1rem;
  color: #4A2C77;
  border-left: 4px solid #6D2C91;
  padding-left: 1rem;
`;

// Footer Navigation
export const FooterNav = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #E2BFD9; /* Background color for the footer */
  padding: 1rem;
  box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

// Nav Item
export const FooterNavItem = styled.a`
  color: #4A2C77;
  text-decoration: none;
  margin: 0 1rem;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #6D2C91;
  }
`;

export default MainContainer
