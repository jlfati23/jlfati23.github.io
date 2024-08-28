import {CenterContent, FooterNav, FooterNavItem, MainContainer, Picture, Quote} from "./index.style";

const HomepageFeatures = () => {
    return (
        <MainContainer>
            <CenterContent>
                <Picture src="img/sea-shore-ocean-during-sunset-hg.jpg" alt="Description of the image"/>
                <Quote>
                    "There are no facts, only interpretations."
                </Quote>
            </CenterContent>
            <FooterNav>
                <FooterNavItem href="/about">About Me</FooterNavItem>
                <FooterNavItem href="https://github.com/jlfati23" target="_blank"
                               rel="noopener noreferrer">GitHub</FooterNavItem>
                <FooterNavItem href="https://www.linkedin.com/in/yourusername" target="_blank"
                               rel="noopener noreferrer">LinkedIn</FooterNavItem>
            </FooterNav>
        </MainContainer>
    );

}
export default HomepageFeatures
