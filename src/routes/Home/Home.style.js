import styled from "styled-components";

export const CategoryGridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
    margin: 0 1rem;
`

export const CategoryListContainer = styled.div`
    max-width: 800px;
    margin: auto;
`

export const HeaderText = styled.h1`
    color: #F0A500;
    text-align: center;
`

export const HeaderSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    
    h1 {
        color: white;
    }

    button {
        background: #2F67DD;
        color: white;
        height: 50px;
        width: 50px;
        font-size: 40px;
        text-align: center;
        vertical-align: center;
        border-radius: 50%;
        cursor: pointer;
        border: none;
    }
`