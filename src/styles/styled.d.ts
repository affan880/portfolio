import 'styled-components';
import { Theme } from './theme'; // Import your custom Theme interface

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
} 