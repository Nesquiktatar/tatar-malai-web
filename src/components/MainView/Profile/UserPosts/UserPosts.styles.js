import styled from "@emotion/styled";

export const UserPosts = styled.div`
   padding: 4%;
    textarea{
        width: 99%;
    }
    h3{
        padding: 1% 0;
        text-align: center;
        font-size:200%;
    }
    
   `;

export const Post = styled.div`
   text-align: center;
   border-radius: 10%;
   padding: 2%;
   border: 5px dashed;
   
   span {
   float: right;
   }
`;

export const AddPostForm = styled.textarea `
  -moz-border-bottom-colors: none;
  -moz-border-left-colors: none;
  -moz-border-right-colors: none;
  -moz-border-top-colors: none;
  background: none repeat scroll 0 0 rgba(0, 0, 0, 0.07);
  border-color: -moz-use-text-color #FFFFFF #FFFFFF -moz-use-text-color;
  border-image: none;
  border-radius: 6px 6px 6px 6px;
  border-style: none solid solid none;
  border-width: medium 1px 1px medium;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12) inset;
  color: #555555;
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
  font-size: 1em;
  line-height: 1.4em;
  padding: 5px 8px;
  transition: background-color 0.2s ease 0s;
  
  :focus {
    background: none repeat scroll 0 0 #FFFFFF;
    outline-width: 0;
}
`;

export const Button = styled.button`
  
  float:right; 
`;

