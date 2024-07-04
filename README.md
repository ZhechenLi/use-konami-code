# useKonamiCode

`useKonamiCode` is a React Hook for recognizing and triggering the famous Konami Code key combination: "Up, Up, Down, Down, Left, Right, Left, Right, B, A".

## Features

- Lightweight and easy-to-use React Hook.
- Supports a custom callback function to perform specific actions when the Konami Code is entered.
- TypeScript type checking support.

## Installation

Install using npm:

```shell
npm install use-konami-code
```
Install using yarn:

```shell
yarn add use-konami-code
```
## Usage
```tsx
import React from 'react';
import useKonamiCode from 'use-konami-code';

const MyComponent: React.FC = () => {
  const handleKonamiCode = () => {
    // Perform specific actions when the Konami Code is entered
    console.log("Konami Code Entered!");
  };

  useKonamiCode(handleKonamiCode);

  // Render other components
  return <div>Press the Konami Code: Up, Up, Down, Down, Left, Right, Left, Right, B, A</div>;
};

export default MyComponent;
```

## Contributing 
Contributions and issues are welcome. Please refer to the contributing guide (CONTRIBUTING.md) for more information.


## License
This project is licensed under the MIT License. Please see the license file (LICENSE) for more information.
