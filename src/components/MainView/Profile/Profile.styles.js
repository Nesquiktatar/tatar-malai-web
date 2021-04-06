import styled from '@emotion/styled';

export const Profile = styled.div`
    background-color: rgba(44, 31, 23, 0.8);
    display: grid;
    grid-template-columns:10% 80% 10%;
    
`;

export const MyPosts = styled.div`
    grid-column-start: 2;
    grid-row-start: 2;
`;

export const ProfileInfo = styled.div`
    grid-column-start: 2;
    grid-row-start: 1;
`;

/*настройка внутри тега*/
export const ProfileStatus = styled.div`
height: 10% !important;
  width: 20% !important;
  
    background-color: red;
    grid-area: status;
    border: 3px solid black;
`;

