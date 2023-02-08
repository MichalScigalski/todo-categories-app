import styled from "styled-components";

export const CategoryTileContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: left;
    background: linear-gradient(45deg, #232229, #19181d);
    border-radius: 8px;
    color: black;
    padding: 0.7rem 2rem;
    cursor: pointer;
    transition: box-shadow 0.2s ease;

    span {
        color: gray;
    }

    h1 {
        color: white;
        font-size: 20px;
        margin: 0;
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