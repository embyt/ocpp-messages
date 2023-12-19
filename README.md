# Open Charge Point Protocol (OCPP) v1.6 and v2.0.1 type declarations

This package provides TypeScript type declarations for the OCPP (Open Charge Point Protocol). It includes type definitions for all OCPP message types and their properties.

## OCPP versions supported:

- 1.6
- 2.0.1

## Installation

```bash
npm install --save-dev ocpp-messages
```

## Usage

Import the provided type definitions into your TypeScript project:

```typescript
import { StatusNotificationRequest } from "ocpp-messages/v1.6";

// Use the types in your code
const statusRequest: StatusNotificationRequest = {
  // ...
};
```

## Contributing

Contributions are welcome! If you find any issues or would like to add new features or improvements, please open an issue or submit a pull request on the GitHub repository.

## License

This package is licensed under the MIT License.
