import styled from '@emotion/styled';

export const Profile = styled.div`
    background-color: #f7f7e8;
    display: grid;
    grid-template-columns:10% 80% 10%;
    grid-template-rows: 45% 50%;
    
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
    background-color: red;
    grid-area: status;
    border: 3px solid black;
`;

