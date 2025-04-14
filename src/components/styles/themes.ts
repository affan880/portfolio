import { DefaultTheme } from "styled-components";

export type Themes = {
  [key: string]: DefaultTheme;
};

const theme: Themes = {
  dark: {
    id: "T_001",
    name: "dark",
    colors: {
      body: "#111827",
      scrollHandle: "#1f2937",
      scrollHandleHover: "#111827",
      primary: "#10b981",
      secondary: "#f59e0b",
      text: {
        primary: "#f3f4f6",
        secondary: "#d1d5db",
        placeholder: "#6b7280",
      },
    },
    fonts: {
      body: 'var(--font-inter)',
      heading: 'var(--font-raleway)'
    }
  },
  light: {
    id: "T_002",
    name: "light",
    colors: {
      body: "#f9fafb",
      scrollHandle: "#d1d5db",
      scrollHandleHover: "#9ca3af",
      primary: "#0ea5e9",
      secondary: "#f97316",
      text: {
        primary: "#1e293b",
        secondary: "#334155",
        placeholder: "#64748b",
      },
    },
    fonts: {
      body: 'var(--font-inter)',
      heading: 'var(--font-raleway)'
    }
  },
  "blue-matrix": {
    id: "T_003",
    name: "blue-matrix",
    colors: {
      body: "#0f172a",
      scrollHandle: "#334155",
      scrollHandleHover: "#1e293b",
      primary: "#4ade80",
      secondary: "#22d3ee",
      text: {
        primary: "#f8fafc",
        secondary: "#e2e8f0",
        placeholder: "#38bdf8",
      },
    },
    fonts: {
      body: 'var(--font-inter)',
      heading: 'var(--font-raleway)'
    }
  },
  espresso: {
    id: "T_004",
    name: "espresso",
    colors: {
      body: "#292524",
      scrollHandle: "#57534e",
      scrollHandleHover: "#44403c",
      primary: "#fbbf24",
      secondary: "#a3e635",
      text: {
        primary: "#fafaf9",
        secondary: "#e7e5e4",
        placeholder: "#a8a29e",
      },
    },
    fonts: {
      body: 'var(--font-inter)',
      heading: 'var(--font-raleway)'
    }
  },
  "green-goblin": {
    id: "T_005",
    name: "green-goblin",
    colors: {
      body: "#18181b",
      scrollHandle: "#3f3f46",
      scrollHandleHover: "#27272a",
      primary: "#facc15",
      secondary: "#4ade80",
      text: {
        primary: "#a7f3d0",
        secondary: "#10b981",
        placeholder: "#065f46",
      },
    },
    fonts: {
      body: 'var(--font-inter)',
      heading: 'var(--font-raleway)'
    }
  },
  ubuntu: {
    id: "T_006",
    name: "ubuntu",
    colors: {
      body: "#431407",
      scrollHandle: "#7c2d12",
      scrollHandleHover: "#9a3412",
      primary: "#84cc16",
      secondary: "#84cc16",
      text: {
        primary: "#ffffff",
        secondary: "#fef3c7",
        placeholder: "#d97706",
      },
    },
    fonts: {
      body: 'var(--font-inter)',
      heading: 'var(--font-raleway)'
    }
  },
  "neon-cyberpunk": {
    id: "T_007",
    name: "neon-cyberpunk",
    colors: {
      body: "#09090b",
      scrollHandle: "#18181b",
      scrollHandleHover: "#27272a",
      primary: "#f472b6",
      secondary: "#22d3ee",
      text: {
        primary: "#e0f2fe",
        secondary: "#a5f3fc",
        placeholder: "#7dd3fc",
      },
    },
    fonts: {
      body: 'var(--font-inter)',
      heading: 'var(--font-raleway)'
    }
  },
  "midnight-blue": {
    id: "T_008",
    name: "midnight-blue",
    colors: {
      body: "#0f172a",
      scrollHandle: "#1e293b",
      scrollHandleHover: "#334155",
      primary: "#8b5cf6",
      secondary: "#3b82f6",
      text: {
        primary: "#f8fafc",
        secondary: "#e2e8f0",
        placeholder: "#94a3b8",
      },
    },
    fonts: {
      body: 'var(--font-inter)',
      heading: 'var(--font-raleway)'
    }
  },
};

export default theme;
