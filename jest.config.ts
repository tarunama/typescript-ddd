import type {Config} from "jest";

const config: Config = {
    "roots": [
        "<rootDir>/src"
    ],
    "testMatch": [
        "**/__tests__/**/*.+(ts|tsx)"
    ],
    "transform": {
        "^.+\\.(ts)$": "ts-jest"
    }
};

export default config;
