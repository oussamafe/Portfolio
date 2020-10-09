import React from 'react'
import styled from 'styled-components'
import { Card } from '@components'
import { media } from '@styles'


const ProjectsSection = styled.section`
    background-color: #F1FAEE;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width:100vw;
    height:100vh;
    ${media.tablet`
        width:100vw;
        height:auto;
    `};
    ${media.thone`
        width:100vw;
        height:auto;
    `};

`

const Title = styled.h1`
    font-family: 'Yeseva One';
    color: #1D3557;
    font-size: 40px;
`

const CardSection = styled.section`
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 60px;
    ${media.tablet`
        display: flex;
        flex-direction:row;
        flex-wrap:wrap;
        justify-content : center ;
        margin-bottom: 5vh;
    `};
    ${media.thone`
        display: grid;
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: auto;
        row-gap: 10vh;
        align-self: center;
        margin-bottom: 5vh;
    `};
`

const projectsData = [
    { name: 'Garantia', illustration: 'garantia.svg', description: 'Cross-Platform management application (web,desktop,mobile) created for an insurance.', technologies: ['symfony', 'java', 'mysql'] },
    { name: 'Drop Lost', illustration: 'droplost.svg', description: 'Matchmaking web appllication that helps users find their lost items with the help of an intelligent system.', technologies: ['react', 'nodejs', 'mongodb'] },
    { name: 'Job Hunter', illustration: 'jobhunter.svg', description: 'A professional platform for job interviews management and tracking aimed for HR managers.', technologies: ['angular', 'java', 'mysql'] }
]


const Projects = () => {

    return (
        <ProjectsSection id="projects">
            <Title>My Projects</Title>
            <CardSection>
                {projectsData.map(data => {
                    return (<Card projectData={data} key={data.name} />)
                })}
            </CardSection>
        </ProjectsSection>
    )
}


export default Projects;