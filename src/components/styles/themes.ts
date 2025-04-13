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
        100: "#f3f4f6",
        200: "#d1d5db",
        300: "#6b7280",
      },
    },
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
        100: "#1e293b",
        200: "#334155",
        300: "#64748b",
      },
    },
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
        100: "#f8fafc",
        200: "#e2e8f0",
        300: "#38bdf8",
      },
    },
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
        100: "#fafaf9",
        200: "#e7e5e4",
        300: "#a8a29e",
      },
    },
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
        100: "#a7f3d0",
        200: "#10b981",
        300: "#065f46",
      },
    },
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
        100: "#ffffff",
        200: "#fef3c7",
        300: "#d97706",
      },
    },
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
        100: "#e0f2fe",
        200: "#a5f3fc",
        300: "#7dd3fc",
      },
    },
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
        100: "#f8fafc",
        200: "#e2e8f0",
        300: "#94a3b8",
      },
    },
  },
};

export default theme;
