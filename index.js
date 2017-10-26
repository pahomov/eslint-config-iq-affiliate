"use strict";

module.exports = {
  "no-param-reassign": ["error", { "props": false }],
  "no-multi-spaces": ["error", { "exceptions": { "ImportDeclaration": true } }],
  "no-trailing-spaces": "off",
  "react/react-in-jsx-scope": "off",
  "react/sort-comp": "off",
  "no-unused-expressions": [
    "error",
    { "allowShortCircuit": true, "allowTernary": true },
  ],
  "no-unused-vars": ["error", { "varsIgnorePattern": "^_" }],
  "template-curly-spacing": "off",
  "no-bitwise": ["error", { "allow": ["~"] }],
  "jsx-a11y/no-static-element-interactions": "off",
  "linebreak-style": "off",
  "arrow-parens": "off",
  "react/jsx-indent-props": "off",
  "react/jsx-curly-spacing": "off",
  "react/jsx-closing-bracket-location": "off",
  "indent": "off",
  "react/jsx-indent": "off",
  "react/jsx-wrap-multilines": "off",
  "react/no-danger": "off",
  "react/prefer-stateless-function": "off",
  "no-plusplus": "off",
};
