import styled from "styled-components";

export const CategoryTileContainer = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    align-items: center;
    background: linear-gradient(45deg, #232229, #19181d);
    border-radius: 8px;
    color: black;
    padding: 0.7rem 0.5rem 0.7rem 2rem ;
    cursor: pointer;
    transition: box-shadow 0.2s ease;

    span {
        color: gray;
    }

    h1 {
        color: white;
        font-size: 20px;
        margin: 0;
        word-wrap: break-word;
    }

    &::before {
        content: '';
        height: 60%;
        width: 5px;
        position: absolute;
        left: 10px;
        border-radius: 10px;
        background: #F0A500;
    }

    &:hover {
        box-shadow: 1px 1px 10px #00000050;
    }
`

export const CategoryTileHeader = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const CategoryTileRemove = styled.button`
    background: transparent;
    border: none;
    min-width: 40px ;
    min-height: 40px ;
    cursor: pointer;
    font-weight: bold;
    position: relative;

    &::before, &::after {
        position: absolute;
        bottom: 8px;
        left: 47%;
        content: ' ';
        height: 23px;
        width: 2px;
        background-color: #3D3E49;
    }

    &::before {
    transform: rotate(45deg);
    }
    &::after {
    transform: rotate(-45deg);
    }
    &:hover::before,  &:hover::after{
        background-color: #F0A500;
    }
`;