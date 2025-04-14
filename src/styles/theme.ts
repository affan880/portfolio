export interface Theme {
  colors: {
    background: string;
    backgroundSecondary: string;
    text: {
      primary: string;
      secondary: string;
      placeholder: string;
    };
    primary: string; // Accent color
    primaryContrast: string; // Text on primary background
    border: string;
    card: {
      background: string;
      border: string;
    };
    input: {
      background: string;
      border: string;
      text: string;
      placeholder: string;
    };
    button: {
      primary: {
        background: string;
        text: string;
        hoverBackground: string;
      };
      secondary: {
        background: string;
        text: string;
        border: string;
        hoverBackground: string;
      };
    };
  };
  fonts: {
    body: string;
    heading: string;
  };
  // Add other theme properties like spacing, breakpoints if needed
}

export const lightTheme: Theme = {
  colors: {
    background: '#ffffff', // White
    backgroundSecondary: '#f1f5f9', // Slate 100
    text: {
      primary: '#0f172a', // Slate 900
      secondary: '#64748b', // Slate 500
      placeholder: '#94a3b8', // Slate 400
    },
    primary: '#4f46e5', // Indigo 600 (example)
    primaryContrast: '#ffffff', // White
    border: '#e2e8f0', // Slate 300
    card: {
      background: '#ffffff', // White
      border: '#e2e8f0', // Slate 300
    },
    input: {
      background: '#ffffff', // White
      border: '#cbd5e1', // Slate 300
      text: '#0f172a', // Slate 900
      placeholder: '#94a3b8', // Slate 400
    },
    button: {
      primary: {
        background: '#4f46e5', // Indigo 600
        text: '#ffffff', // White
        hoverBackground: '#4338ca', // Indigo 700
      },
      secondary: {
        background: '#ffffff', // White
        text: '#475569', // Slate 600
        border: '#cbd5e1', // Slate 300
        hoverBackground: '#f8fafc', // Slate 50
      },
    },
  },
  fonts: {
    body: 'var(--font-inter)',
    heading: 'var(--font-raleway)',
  },
};

export const darkTheme: Theme = {
  colors: {
    background: '#0f172a', // Slate 900
    backgroundSecondary: '#1e293b', // Slate 800
    text: {
      primary: '#f8fafc', // Slate 50
      secondary: '#94a3b8', // Slate 400
      placeholder: '#64748b', // Slate 500
    },
    primary: '#6366f1', // Indigo 500 (example)
    primaryContrast: '#ffffff', // White
    border: '#334155', // Slate 700
    card: {
      background: '#1e293b', // Slate 800
      border: '#334155', // Slate 700
    },
    input: {
      background: '#1e293b', // Slate 800
      border: '#475569', // Slate 600
      text: '#f8fafc', // Slate 50
      placeholder: '#64748b', // Slate 500
    },
    button: {
      primary: {
        background: '#6366f1', // Indigo 500
        text: '#ffffff', // White
        hoverBackground: '#4f46e5', // Indigo 600
      },
      secondary: {
        background: '#334155', // Slate 700
        text: '#cbd5e1', // Slate 300
        border: '#475569', // Slate 600
        hoverBackground: '#475569', // Slate 600
      },
    },
  },
  fonts: {
    body: 'var(--font-inter)',
    heading: 'var(--font-raleway)',
  },
};

// Default theme (can be light or dark based on preference)
export const defaultTheme = lightTheme; // Or darkTheme 