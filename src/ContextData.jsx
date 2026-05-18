import { createContext } from 'react';

// Default value is used only if a component has no matching Provider above it
const ContextData = createContext('');
export default ContextData