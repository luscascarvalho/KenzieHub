import styled from "styled-components";

export const HomeStyled = styled.div`
  width: 100%;

  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 700px) {
      width: 100%;
      display: flex;
      justify-content: space-around;
    }

    h1 {
      font-size: 18px;
      font-weight: 700;
      color: var(--primary-color);
    }

    a {
      background-color: var(--grey-3);
      padding: 0.5rem;
      border-radius: 4px;
      color: var(--grey-0);
      text-decoration: none;
    }
  }
`;

export const DivHomeStyled = styled.div`
  margin-top: 1rem;
  border-bottom: 1px solid var(--grey-1);
  border-top: 1px solid var(--grey-1);
  padding: 1rem;

  @media (min-width: 700px) {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  h3 {
    font-weight: 700;
    font-size: 18px;
    color: var(--grey-0);
  }

  span {
    font-weight: 400;
    font-size: 12px;
    color: var(--grey-1);
  }
`;

export const DivHomeStyled2 = styled.div`
  display: none;

  @media (min-width: 700px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: left;
    color: var(--grey-0);
  }
`;
