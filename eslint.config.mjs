import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Dynamically set filename and dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Set up ESLint compatibility for Next.js with TypeScript
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Define the base ESLint configuration
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Ignore unused variables starting with __turbopack_
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          varsIgnorePattern: "^__turbopack_",
        },
      ],
      // Optionally disable some other rules
      "no-console": "warn", // Warn for console logs
    },
  },
];

// Export ESLint config for use
export default eslintConfig;
