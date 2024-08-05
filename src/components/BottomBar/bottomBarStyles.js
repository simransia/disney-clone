import styled from "styled-components";

export const BottomBarContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: space-around;
  padding: 8px 0;
  border-top: 0.5px solid rgba(143, 154, 178, 0.1);
  background-color: rgba(3, 14, 38, 0.99);
  z-index: 50;
  display: none;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    svg {
      width: 16px;
      min-width: 20px;
      color: #808387;
      transition: transform 0.3s ease;
      margin-bottom: 2px;
    }

    span {
      color: #808387;
      font-size: 12px;
    }

    &:hover {
      svg,
      span {
        transform: scale(1.1);
        font-weight: 500;
        color: white;
      }
    }
  }

  .active {
    svg,
    span {
      font-weight: 600;
      color: white;
    }
  }

  @media (max-width: 640px) {
    display: flex;
  }
`;
