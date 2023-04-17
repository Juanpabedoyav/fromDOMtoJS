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

export const ButtonGenerateSC = styled.div`

#generate{
    margin: 3rem auto;
    display: block;
    height: 50px;
    width: 200px;
    font-size: 1rem;
}
`