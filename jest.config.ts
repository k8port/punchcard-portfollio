import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

const config: Config = {
  coverageProvider: "v8",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.tsx"],
  moduleNameMapper: {
    // Handle CSS imports (with CSS modules)
    // https://jestjs.io/docs/webpack#mocking-css-modules
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",

    // Handle CSS imports (without CSS modules)
    "^.+\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",

    // Handle image imports
    // https://jestjs.io/docs/webpack#handling-static-assets
    "^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$": `<rootDir>/__mocks__/fileMock.js`,

    // **NEW:** Map any imports starting with "@/app/" or "@app/" to the app folder
    "^@/(.*)$": "<rootDir>/$1",
    "^@/app/(.*)$": "<rootDir>/app/$1",
    "^@/app/ui/(.*)$": "<rootDir>/app/ui/$1",
    "^@/app/lib/(.*)$": "<rootDir>/app/lib/$1",
    "^@/app/styles/(.*)$": "<rootDir>/app/styles/$1",
    "^@/app/data/(.*)$": "<rootDir>/app/data/$1",
    "^@/public/(.*)$": "<rootDir>/public/$1",

    // Next.js Font Mocks
    "@next/font/(.*)": "<rootDir>/__mocks__/nextFontMock.js",
    "next/font/(.*)": "<rootDir>/__mocks__/nextFontMock.js",

    // Disable server-only
    "server-only": `<rootDir>/__mocks__/empty.js`,

    // (optional) automatically mock react-chartjs-2
    "^react-chartjs-2$": "<rootDir>/__mocks__/chartMock.js",
  },
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"],
  // **NEW:** Make sure that packages like "lucide-react" get transpiled:
  transformIgnorePatterns: ["/node_modules/(?!.*(lucide-react)/)"],
  extensionsToTreatAsEsm: [".ts", ".tsx"],
};

export default createJestConfig(config);
