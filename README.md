## Introduction

This project uses pnpm workspace to manage multiple packages within a monorepo.

## Dependencies

This project includes several key dependencies. These dependencies are defined for each individual package.

### Key Dependencies List

- vite
- react
- react-dom
- typescript
- styled-components

## Project Structure

```
ROOT
├── .husky/ -------------------------- husky settings
├── .vscode/ ------------------------- VSCODE settings
├── node_modules/ -------------------- node modules used in all packages
├── packages/ ------------------------
│   ├── shared ----------------------- package shared by ver-* packages
|   |   ├── node_modules
|   |   ├── components
|   |   ├── constants
|   |   ├── design-system
|   |   ├── styles
|   |   ├── package.json
|   |   └── tsconfig.json
│   ├── ver-1 ------------------------ version 1 package
|   |   ├── node_modules
|   |   ├── public
|   |   ├── src
|   |   ├── index.html
|   |   ├── package.json
|   |   ├── tsconfig.app.json
|   |   ├── tsconfig.json
|   |   ├── tsconfig.node.json
|   |   └── vite.config.ts
│   ├── ver-default ------------------ version default package
|   |   ├── node_modules
|   |   ├── public
|   |   ├── src
|   |   ├── index.html
|   |   ├── package.json
|   |   ├── tsconfig.app.json
|   |   ├── tsconfig.json
|   |   ├── tsconfig.node.json
|   |   └── vite.config.ts
├── .gitignore
├── eslint.config.js ----------------- eslint config file used in all packages
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml -------------- pnpm workspace settings
└── README.md
```

## Getting Started

### 1. Clone the repository

```sh
$ git clone https://github.com/ssm0318/WhoamI-Today-frontend-workspace.git
```

### 2. Install dependencies

```sh
$ cd WhoamI-Today-frontend-workspace
$ pnpm install
```

### 3. Run packages

ver-\* packages are React + TypeScript application built with Vite.

```sh
# run ver 1
$ cd packages/ver-1
$ pnpm run dev
# run ver default
$ cd packages/ver-default
$ pnpm run dev
```

This will start the development server for the client application, and you will be able to view it in your browser at http://localhost:5173.
