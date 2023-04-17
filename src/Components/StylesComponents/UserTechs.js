import styled from "styled-components";

export const UserTechStyled = styled.div`
  background-color: var(--grey-3);
  border-radius: 4px;

  @media (min-width: 700px) {
    width: 900px;
    padding: 0;

    ul {
      align-items: center;
    }
  }

  ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  li {
    display: flex;
    justify-content: space-between;
    width: 80%;
    background-color: var(--grey-4);
    border-radius: 4px;
    padding: 0.5rem;
  }

  h3 {
    font-weight: 700;
    font-size: 14.2123px;
    color: var(--grey-0);
  }

  p {
    font-weight: 400;
    font-size: 12.182px;
    color: var(--grey-1);
  }
`;
