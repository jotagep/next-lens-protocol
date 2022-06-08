import styled from 'styled-components';

const LoaderComponent = styled.div`
  border: 10px solid #f3f3f3;
  border-top: 10px solid #1a1834;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  width: 80px;
  height: 80px;

  ${(props) =>
    props.small &&
    `
      width: 40px;
      height: 40px;
    `}

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default function Loader({ small }) {
  return <LoaderComponent small={small} />;
}
