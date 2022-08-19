import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; 

    input{ 
        width: 30vw;
        min-width: 300px;
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
    a{
        color: #6200ff;
        margin-top: 1vh;
        font-size: clamp(14px, 1.4vw, 40px);

        :hover{
            color: #7d2cff; 
        }
    }
`