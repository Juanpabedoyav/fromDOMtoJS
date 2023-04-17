import styled from "styled-components"

export const MainScreenSC = styled.div`
margin: 0rem auto;
justify-content: center;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
gap: 0.8rem;
align-items: center;
div[class="cm-theme"], div[class="cm-scroller"]{
   min-width: 600px;
   min-width: 600px;
    width: 600px;
}
.copy{
    right: 0;
    position: absolute;
    z-index: 1;
    bottom: 0;
    padding: 0.5rem;
    }
 
`

export const SectionGenerateSC = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 1.5rem auto;

#generate{
    display: block;
    padding: 0.8rem;
    font-size: 1rem;
    margin: 1rem auto;
}
`