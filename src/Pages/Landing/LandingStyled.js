import styled from "styled-components";

export const LandingStyled = styled.div`
  margin-top: 50px;
  background-color: var(--grey-3);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  min-width: 200px;
  border-radius: 4px;

  @media (min-width: 700px) {
    width: 369px;
    padding: 2rem;
    margin: 0 auto;
  }

  h1 {
    color: var(--grey-0);
    margin: 0 auto;

    font-weight: 500;
    font-size: 16px;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    label {
      display: flex;
      justify-content: flex-start;
      color: var(--grey-0);
    }

    input {
      width: 100%;
      height: 40px;
      border-radius: 4px;
      padding: 0.2rem;
    }

    p {
      color: var(--grey-0);
      font-size: 14px;
    }

    button {
      background-color: var(--primary-color);
      font-weight: 600;
      height: 40px;
      border: none;
      color: var(--grey-0);
      border-radius: 4px;
      font-size: 15px;
    }
  }

  span {
    color: var(--grey-1);
    font-weight: 600;
    font-size: 12px;
    margin: 0 auto;
  }

  a {
    background-color: var(--grey-1);
    padding: 0.5rem;
    color: var(--grey-0);
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
  }
`;

export const LandingH1 = styled.h1`
  color: var(--primary-color);
  font-size: 2rem;
  text-align: center;
`;
