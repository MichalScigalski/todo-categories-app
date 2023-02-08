import styled from "styled-components";

export const AddCategoryContainer = styled.div`
    $primary: #11998e;
    $secondary: #38ef7d;
    background: linear-gradient(45deg, #232229, #19181d);
    border-top: 4px solid #2F67DD;
    display: grid;
    place-items: center;
    padding: 2rem 1rem;
    border-radius: 8px;
    max-width: 300px;
    margin: 2rem auto;
    form {
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        gap: 10px;
        margin: 0 1rem;
        position: relative;

        label {
            color: white;
            font-size: 22px;
        }

        input {
            padding: 0.5rem 1rem;
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
            border: none;
            cursor: pointer;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            transition: filter 0.2s ease;
            color: white;

            &:hover {
                filter: brightness(1.1);
            }
        }
    }
`