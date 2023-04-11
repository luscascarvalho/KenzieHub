import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
   --primary-color: #FF577F;
   --color-primary-focus: #FF427F;
   --color-primary-negative: #59323F;
   --grey-4: #121214;
    --grey-3: #212529;
   --grey-2: #343B41;
   --grey-1: #868E96;
   --grey-0: #F8F9FA;
  }

  body { 
    background-color: var(--grey-4);
    font-family: "Inter";
    font-style: normal;
  }
`;
