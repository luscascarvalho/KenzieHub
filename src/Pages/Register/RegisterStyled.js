import styled from "styled-components";

export const RegisterStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 700px) {
    width: 450px;
    padding: 2rem;
    margin: 0 auto;
  }

  h3 {
    color: var(--primary-color);
    font-size: 20px;
  }

  a {
    background-color: var(--grey-2);
    padding: 0.5rem;
    width: 60px;
    color: var(--grey-0);
    text-decoration: none;
    text-align: center;
    font-size: 14px;
    border-radius: 4px;
  }
`;

export const RegisterStyledDiv = styled.div`
  background-color: var(--grey-3);
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  border-radius: 4px;

  @media (min-width: 700px) {
    width: 450px;
    padding: 2rem;
    margin: 0 auto;
  }

  h1 {
    font-weight: 500;
    font-size: 16px;
    color: var(--grey-0);
    text-align: center;
  }

  span {
    color: var(--grey-1);
    font-weight: 400;
    font-size: 12px;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    label {
      display: flex;
      justify-content: flex-start;
      color: var(--grey-0);
      font-size: 13px;
    }

    input,
    select {
      height: 30px;
      border-radius: 4px;
      border: none;
    }

    p {
      color: var(--grey-0);
      font-size: 14px;
    }

    button {
      margin-top: 20px;
      background-color: var(--color-primary-negative);
      color: var(--grey-0);
      padding: 0.5rem;
      border-radius: 4px;
      border: none;
    }
  }
`;
