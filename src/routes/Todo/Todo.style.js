import styled from "styled-components";

export const ToDoListContainer = styled.div`
    max-width: 500px;
    margin: 0 auto;
`

export const TodoHeader = styled.div`
    margin: 2rem;
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
    align-items: center;
    h1 {
        color: white;
        word-wrap: break-word;
        width: 80%;
        margin: 0;
    }
    a {
        min-width: 40px;
        min-height: 40px;
        border-radius: 50%;
        display: grid;
        place-items: center;
        border: none;
        background: #F0A500;
        cursor: pointer;

        &:hover {
            filter: brightness(1.1);
        }
    }
`
export const ToDoListGrid = styled.div`
    display: grid;
    border-radius: 1rem;
    gap: 1rem;
    margin: 0 1rem;
`

export const BackIcon = styled.div`
    position: relative;
    width: 30px;
    height: 30px;

    &::after{
    position: absolute;
    display: block;
    content: "";
    color: white;
    width: 18px;
    height: 15px;
    left: 3px;
    top: -1px;
    border-bottom: solid 2px;
    transform: translatex(4px);
    }
    &::before{
    position: absolute;
    display: block;
    content: "";
    color: white;
    width: 8px;
    height: 8px;
    border-top: solid 2px;
    border-left: solid 2px;
    top: 50%;
    left: 5px;
    transform-origin: 0 0;
    transform: rotate(-45deg);
    }
`