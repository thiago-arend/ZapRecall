import { createGlobalStyle } from 'styled-components';

const SCBody = createGlobalStyle`
    body {
        background-color: #FB6B6B;
    }
    button {
        &:hover {
            cursor: pointer;
        }
        &:disabled {
            cursor: default;
        }
    }
`;

export default SCBody;