# React + TypeScript + Vite

npm i react-paginate


    "axios": ,
    "react": ,
    "react-dom": ,
    "react-hook-form:,
    "react-paginate": ",
    "react-redux"

export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

```
kursSearc
├─ .eslintrc.cjs
├─ .gitignore
├─ index.html
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ App.tsx
│  ├─ assets
│  │  └─ react.svg
│  ├─ hooks
│  │  └─ useProduc.tsx
│  ├─ index.css
│  ├─ main.tsx
│  ├─ pages
│  │  ├─ Home.tsx
│  │  ├─ PaginatedItems.tsx
│  │  └─ Search.tsx
│  ├─ redux
│  │  ├─ productSlice.ts
│  │  └─ store.ts
│  └─ vite-env.d.ts
├─ tailwind.config.js
├─ tsconfig.json
├─ tsconfig.node.json
└─ vite.config.ts

```