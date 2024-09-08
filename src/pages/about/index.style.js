// index.style.js
import styled from 'styled-components';

// Container to center and pad content
const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #F7EFE5; /* Dessert/Moon theme background color */
    border-radius: 8px;
`;

// Title style
const Title = styled.h1`
    font-size: 2.5em;
    color: #674188; /* Darker purple for title */
    text-align: center;
    margin-bottom: 20px;
`;

// Subtitle style
const SubTitle = styled.h2`
    font-size: 1.8em;
    color: #C8A1E0; /* Lighter purple for subtitles */
    margin: 15px 0 10px;
`;

// Paragraph style
const Paragraph = styled.p`
    font-size: 1em;
    color: #333; /* Dark text color for readability */
    line-height: 1.6;
    margin-bottom: 20px;
`;

// List style
const List = styled.ul`
    list-style-type: disc;
    margin-left: 20px;
    margin-bottom: 20px;
`;

// List item style
const ListItem = styled.li`
    font-size: 1em;
    color: #333; /* Dark text color for readability */
    margin-bottom: 10px;
    line-height: 1.6;
`;

export {Container,Title, SubTitle, List, ListItem }