import styled from "styled-components";

export const TodoElementContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 1rem;
    border-radius: 8px;
    background: #19181d;
    color: #f4f4f4;
    padding: 10px 2px;
    p {
        max-width: 300px;
        word-wrap: break-word;
    }

    &.active {
        opacity: 0.5;
        div {
            position: relative;
            background: gray;
            border-color: gray;
            &::before {
                content: '';
                height: 50%;
                width: 3px;
                transform: rotate(40deg);
                position: absolute;
                left: 15px;
                bottom: 8px;
                border-radius: 10px;
                background: #19181d;
            }
            &::after {
                content: '';
                height: 30%;
                width: 3px;
                transform: rotate(-30deg);
                position: absolute;
                left: 9px;
                bottom: 9px;
                border-radius: 10px;
                background: #19181d;
            }
        }
        p {
            text-decoration: line-through;
        }
    }
    
`

export const TodoElementBtn = styled.div`
    border: 1px solid #2F67DD;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-left: 1rem;
    cursor: pointer;
`
