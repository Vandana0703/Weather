import styled from "styled-components";

export const MainBlockLayout=styled.div`
display: grid;
  grid-template-columns: auto 1fr;
  width: 100%;
`
export const RightContainer=styled.div`
display: flex;
flex-direction: column;
flex:60%
`


export const MenuItem=styled.span`
height: 3rem;
display: flex;
width: 12rem;
text-decoration: none;
vertical-align: middle;
margin: auto 0.5rem;
padding-top: 0.125rem;
align-items: center;

&:hover{
    height: 2.188rem;
    padding-left: 0.125rem;
    margin-left: 0.125rem;
    background: rgba(0, 43, 140, 0.43);
    border-radius: 1.25rem;
    color: white;
}

`
