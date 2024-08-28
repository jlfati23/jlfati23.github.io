import styled from 'styled-components';

// Background Gradient
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(to bottom right, #F7EFE5, #E2BFD9); /* Gradient from light to pink */
  padding: 2rem;
`;

// Title
export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #4A2C77; /* Darker purple for high contrast */
  margin-bottom: 1rem;
  font-family: 'Roboto', sans-serif; /* Suggested font-family */
`;

// SubTitle
export const SubTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: semi-bold;
  color: #6D2C91; /* Darker light purple */
  margin-bottom: 0.75rem;
  margin-top: 1.5rem;
  font-family: 'Roboto', sans-serif; /* Suggested font-family */
`;

// Paragraph
export const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #4A2C77; /* Darker purple for better readability */
  margin-bottom: 1rem;
  text-align: center;
  font-family: 'Roboto', sans-serif; /* Suggested font-family */
`;

// List
export const List = styled.ul`
  padding-left: 1.5rem;
  margin-bottom: 1rem;
  list-style-type: disc;
  text-align: left; /* Ensure list items are left-aligned */
`;

// ListItem
export const ListItem = styled.li`
  font-size: 1.1rem;
  color: #6D2C91; /* Darker light pink for a softer look */
  margin-bottom: 0.5rem;
  font-family: 'Roboto', sans-serif; /* Suggested font-family */
`;

export default Container
