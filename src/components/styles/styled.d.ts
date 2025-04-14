import 'styled-components';

// Define the interface based on the UPDATED structure in themes.ts
declare module 'styled-components' {
  export interface DefaultTheme {
    id: string;
    name: string;
    colors: {
      body: string;
      scrollHandle: string;
      scrollHandleHover: string;
      primary: string;
      secondary: string;
      text: {
        primary: string;   // Updated to match themes.ts
        secondary: string; // Updated to match themes.ts
        placeholder: string; // Updated to match themes.ts
      };
    };
    fonts: { // Keep fonts if they are now defined in themes.ts
      body: string;
      heading: string;
    };
    // Note: fonts property is NOT included here as it's missing in themes.ts
    // If you intend to add fonts later, update both files.
  }
} 