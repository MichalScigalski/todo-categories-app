import styled from "styled-components";

export const ToDoListContainer = styled.div`
    max-width: 500px;
    margin: 0 auto;
`

export const TodoHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    h1 {
        color: white;
    }

    button {
        background: #EA7B58;
        border: none;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
        font-weight: bold;
        font-size: 20px;
        position: relative;

        &::before, &::after {
            position: absolute;
            bottom: 8px;
            left: 47%;
            content: ' ';
            height: 23px;
            width: 2px;
            background-color: #333;
        }

        &::before {
        transform: rotate(45deg);
        }
        &::after {
        transform: rotate(-45deg);
        }

        &:hover {
            box-shadow: 1px 1px 5px -1px black;
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