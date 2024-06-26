import styled from "styled-components";
import { WrapperStyleType } from "./types";

const Wrapper = styled.header<WrapperStyleType>`
  width: 100%;
  height: 120px;
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: var(--dark-gray);
  background-image: url(${(props) => props.$background});

  #content {
    width: var(--user-view-width);
    max-width: var(--max-user-view-width);
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 75px;
  }

  @media (max-width: 450px) {
    button {
      width: fit-content;
    }
  }
`;

export { Wrapper };
