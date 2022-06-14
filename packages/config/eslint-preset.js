module.exports = {
  extends: ["next", "react-app", "prettier"],
  settings: {
    next: {
      rootDir: ["apps/*/", "packages/*/"],
    },
  },
  rules: {
    "react/jsx-key": "off",
    "@next/next/no-html-link-for-pages": "off",
  },
};
