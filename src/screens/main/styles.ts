import styled from "styled-components"

export const MainScreenSC = styled.div`
margin: 5rem auto;
justify-content: center;
display: flex;
flex-direction: row;
flex-wrap: nowrap;
gap: 1rem;
align-items: center;
height: 80vh;
div[class="cm-theme"], div[class="cm-scroller"]{
   width: 500px;
   
}
.copy{
    right: 0;
    position: absolute;
    z-index: 1;
    bottom: 0;
    padding: 0.5rem;
    }
 
`