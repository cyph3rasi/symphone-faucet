# Symphony Token Faucet

This repository contains the Symphony Token Faucet interface, a Next.js application that enables users to claim Symphony tokens on the Avalanche C-Chain network.

## Project Overview

The Symphony Token Faucet is a web application that allows users to connect their MetaMask wallet and claim SYMPH tokens. The interface features a modern, responsive design with animated backgrounds and clear user instructions.

## Repository Structure

The project follows a modular architecture with the following structure:

```
src/
├── components/
│   └── FaucetInterface/
│       ├── components/
│       │   ├── AboutToken.tsx       # Token information display
│       │   ├── ClaimInterface.tsx   # Main claiming interface
│       │   ├── Instructions.tsx     # User instructions
│       │   ├── StarBackground.tsx   # Animated background
│       │   └── TokenSetup.tsx       # MetaMask setup guide
│       ├── hooks/
│       │   ├── useFaucet.ts        # Token claiming logic
│       │   └── useWallet.ts        # Wallet connection logic
│       ├── constants.ts            # Contract addresses and ABI
│       ├── types.ts               # TypeScript definitions
│       └── index.tsx              # Main component composition
└── styles/
    └── stars.css                 # Animation styles
```

## Important Contract Information

- Faucet Contract: `0x4569EE4D758f4c453f89AeCf18D842FEe0490f4E`
- Token Contract: `0x9fBd8Ccf17D9895e8d8E39427a094F213f897c3c`
- Network: Avalanche C-Chain (Chain ID: 0xa86a)

## For Claude: Accessing the Repository

To effectively work with this repository through MCP API commands, follow these steps:

1. First, check the repository contents using:
```typescript
get_file_contents({
  owner: 'cyph3rasi',
  repo: 'symphony-faucet',
  path: '.',
  branch: 'main'
});
```

2. To access specific files, include the full path and branch:
```typescript
get_file_contents({
  owner: 'cyph3rasi',
  repo: 'symphony-faucet',
  path: 'src/components/FaucetInterface/index.tsx',
  branch: 'main'
});
```

3. When updating files, use the push_files command with proper file structure:
```typescript
push_files({
  owner: 'cyph3rasi',
  repo: 'symphony-faucet',
  branch: 'main',
  files: [{
    path: 'path/to/file',
    content: 'file content'
  }],
  message: 'commit message'
});
```

4. For multiple file updates, include all files in a single push_files command to maintain consistency.

## Common Tasks

1. Accessing Components:
   - Main interface: 'src/components/FaucetInterface/index.tsx'
   - UI Components: 'src/components/FaucetInterface/components/'
   - Hooks: 'src/components/FaucetInterface/hooks/'

2. Making Updates:
   - Contract addresses are in 'src/components/FaucetInterface/constants.ts'
   - UI text changes are in respective component files
   - Styling uses Tailwind CSS utilities

3. Error Handling:
   - Check branch name is 'main' when accessing files
   - Ensure all file paths are correct and include the 'src/' prefix
   - Remember to include proper TypeScript types from 'types.ts'

This repository is structured to maintain clean separation of concerns while providing a seamless user experience for interacting with the Symphony Token Faucet.
