import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 

    input{ 
        width: 20%;
        height: 5vh;
        margin-top: 5vh;
        border: 1px solid black;
        background-color: var(--Input-background);
        border-radius: 5px;
        padding: 1vh 1vw;
        font-size: clamp(12px, 1.3vw, 30px);

        :hover::placeholder{
            color: black;
            transition: all .5s ease;
        }
    }
`