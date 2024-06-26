import { themeTypes } from "../../contexts";

type ToastThemesType = "light" | "dark";

type ToastTypes = "info" | "success" | "error" | "warning";

type ToastParamsType = {
  text: string;
  title?: string;
  type?: ToastTypes;
};

type ThemesType = {
  [name in themeTypes.ThemeNameType]: ToastThemesType;
};

export type { ToastThemesType, ToastTypes, ToastParamsType, ThemesType };
