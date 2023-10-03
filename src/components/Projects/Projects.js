import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

// const projectsDemo = [{
//   title:'Omnifood AI Based Diet Plan',
//   description: 'HTML CSS , Nested CSS and SASS Based single page website'
// },{
//   title: 'Natours Travel With Comfort',
//   description: 'HTML with TailwindCss Based single page website'
// },{
//   title:'Nexter All In One Flight Plan',
//   description: 'HTML CSS , Nested CSS and SASS Based single page website'
// },{
//   title: 'Shortly Get Your Link Shortened',
//   description: 'HTML with TailwindCss Based single page website'
// }];

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>
      Projects
    </SectionTitle>

    <GridContainer>
      {projects.map(({title, description, image, tags, source, visit, id})=>(
        <BlogCard key={id}>
          <Img src={image} />
        <TitleContent>
          <HeaderThree title>{title}</HeaderThree>
          <Hr />
        </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
          <br />
            <TitleContent>Stack</TitleContent>
            
            <TagList>
              {tags.map((tag, i)=>(
                  <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={source}>Visit Website</ExternalLinks>
            <ExternalLinks href={visit}>Github Repo</ExternalLinks>
          </UtilityList >
        


        </BlogCard>
      ))}

      
    </GridContainer>

  </Section>
);

export default Projects;