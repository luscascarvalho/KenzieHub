import styled from "styled-components";

export const ModalStyled = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--grey-4);
`;

export const ModalItensStyled = styled.div`
  background-color: var(--grey-3);
  width: 70%;
  height: 350px;
  margin: 0 auto;
  border-radius: 4px;

  @media (min-width: 700px) {
    width: 600px;
  }

  div {
    background-color: var(--grey-2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-radius: 4px;

    h1 {
      font-weight: 700;
      font-size: 12px;
      color: var(--grey-0);
    }

    button {
      width: 8%;
      height: 20px;
      background-color: transparent;
      border: none;
      color: var(--grey-1);
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    padding: 1rem;

    input,
    select {
      background-color: var(--grey-3);
      padding: 0.5rem;
      color: var(--grey-0);
      border: 1px solid var(--grey-2);
    }

    button {
      background-color: var(--primary-color);
      padding: 1rem;
      border: none;
      border-radius: 4px;
      color: var(--grey-0);
      font-weight: 500;
      font-size: 12.8347px;
    }
  }

  label {
    color: var(--grey-0);
    font-weight: 400;
    font-size: 10px;
  }
`;
