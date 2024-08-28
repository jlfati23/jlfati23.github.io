import React from 'react';
import {Container, List, ListItem, Paragraph, SubTitle, Title} from "./index.style";


const About = ()  => {
    return (
        <Container>
            <Title>Who I Am</Title>

            <Paragraph>I’m a passionate lifelong learner who thrives on new challenges and personal growth. My journey in
                technology began with a fascination for computer science, and I’ve since expanded my interests to
                include sociology, language, and the impact of technology on society.</Paragraph>

            <SubTitle>Technology Enthusiast</SubTitle>
            <List>
                <ListItem>Deeply fascinated by computer science and the digital world 🔍.</ListItem>
                <ListItem>Committed to the open-source movement and the role of the internet in enhancing democracy and
                    justice ⚖️.
                </ListItem>
                <ListItem>Advocate for privacy rights, striving to balance them with convenience in our increasingly digital
                    lives.
                </ListItem>
            </List>

            <SubTitle>Advocate for Social Justice</SubTitle>
            <List>
                <ListItem>Strong supporter of women's rights and gender equality 🚺.</ListItem>
                <ListItem>Believer in universal internet access as a fundamental human right 🌍.</ListItem>
                <ListItem>Curious about the human brain 🧠, decision-making, and the deeper meanings of life ❤️.</ListItem>
            </List>

            <SubTitle>Language and Culture Explorer</SubTitle>
            <List>
                <ListItem>Currently learning French 🇫🇷, with a belief that language opens doors to new cListtural
                    perspectives.
                </ListItem>
                <ListItem>View English not just as a language but as a powerfList tool for accessing a wider world 🌍.</ListItem>
            </List>

            <SubTitle>Animal Lover and Dog Whisperer</SubTitle>
            <List>
                <ListItem>I may just have a knack for understanding what dogs are saying and enjoy communicating with them
                    🐾.
                </ListItem>
                <ListItem>Dream of having my own dog partner, someone to share adventures and companionship.</ListItem>
            </List>

            <SubTitle>Fitness and Wellness Enthusiast</SubTitle>
            <List>
                <ListItem>Actively engaged in sports like basketball 🏀 and CrossFit 💪, with a goal of mastering a handstand
                    one day.
                </ListItem>
                <ListItem>Aspiring marathon runner, with a dream to run marathons in different countries, combining my love
                    for travel and fitness 🌍.
                </ListItem>
            </List>

            <SubTitle>Lifelong Learner</SubTitle>
            <List>
                <ListItem>An avid reader and continuous explorer of new ideas, always seeking to expand my intellectual
                    horizons 📚.
                </ListItem>
            </List>
        </Container>
    );
}
export default About
