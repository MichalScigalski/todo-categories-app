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

export const CategoryInfoContainer = styled.div`
    color: white;
    opacity: 0.4;
    height: 40vh;
    text-align: center;
    margin: 3rem 10%;
    

`

export const HeaderText = styled.h1`
    color: #F0A500;
    text-align: center;
`

export const HeaderSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1rem;
    
    h1 {
        color: white;
    }

    button {
        background: #2F67DD;
        color: white;
        height: 40px;
        width: 40px;
        border-radius: 50%;
        cursor: pointer;
        border: none;
        
        &.breathing {
            animation: breath 3s infinite;

            @keyframes breath {
            0% {
                box-shadow: none;
            }
            50% {
                box-shadow: 1px 1px 10px 5px  #2F67DD;
            }
            100% {
                box-shadow: none;
            }
        }
        }
        
        

        &::before {
            content: '+'; 
            color: #fff;
            font-size: 30px;
            font-weight: 300;
            font-family: Arial, sans-serif;
        }
    }
`