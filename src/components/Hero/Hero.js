import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => {
  return (
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio.
        </SectionTitle>
        <SectionText>
          Hello, I am Shafinul Pasha Jishan. A Front-end Web Developer. Sementic HTML, CSS, SASS, TailwindCSS, Javascript, CSS with Javascript, React are my fields of work. Feel free to ask me, If you need any front-end web development.      
        </SectionText>
        <Button onClick={()=> window.location= 'https://omnifood-shafinul.netlify.app'}>Learn More</Button>
      </LeftSection>

    </Section>
  );
};

export default Hero;