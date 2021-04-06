import styled from "@emotion/styled";

export const Dialogs = styled.div`
    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-areas: 
        'DialogsNavbar DialogsElements'
        'DialogsNavbar  messageInputForm'
`;

export const DialogsNavEl = styled.div`
    a{
    text-decoration: none;
    }
    border: 2px solid black;
    img{
        width: 20%;
    }
    &:hover{
        background-color: yellow;
        transition: .1s ease-in all
    }
    background-color: ${p => p.selected === p.id ? `blue` : ``};
   `;

export const DialogsNavbar = styled.div`
    background-color: brown;
    grid-area: DialogsNavbar;
    display: grid;
    img{
        padding: 5% 0 0 30%;
    }
    
`;


export const DialogsElements = styled.div`
    grid-area: DialogsElements;
    padding: 0 4%;
    margin: 0 auto;
`;

export const messageInputForm = styled.div`
    grid-area: messageInputForm;
    display:block;
   margin-left: auto;
    margin-right: auto;
`;

export const MessageInputReduxForm = styled.div`
`;