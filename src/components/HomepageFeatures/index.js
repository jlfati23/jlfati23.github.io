import {CenterContent, FooterNav, FooterNavItem, MainContainer, Quote} from "./index.style";

const HomepageFeatures = () => {
    return (
        <MainContainer>
            <CenterContent>
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
