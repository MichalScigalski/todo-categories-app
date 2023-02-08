import styled from "styled-components";


export const AddTodoContainer = styled.div`
    background-color: #19181d;
    display: grid;
    place-items: center;
    padding: 1rem;
    border-radius: 8px;
    max-width: 500px;
    margin: 1rem 1rem;
    border-bottom: 2px solid #2F67DD;

    form {
        display: flex;
        justify-content: center;
        align-items: stretch;
        gap: 4px;
        color: white;

        @media (max-width: 330px) {
            flex-direction: column;
        }

        input,button {
            padding: 0.5rem 1rem;
            border-radius: 2px;
        }

        input {
            outline: none;
            border-radius: 4px;
            border-color: #2F67DD;
            background: transparent;
            color: white;
            font-size: 15px;
            &:focus{
                border-color: white;
                outline: none;
            }
        }

        button {
            background: #2F67DD;
            color: white;
            border-radius: 4px;

            border: none;
            cursor: pointer;
            transition: filter 0.1s ease;

            &:hover {
                filter: brightness(1.1);
            }
        }
    }
`