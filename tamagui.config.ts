import { config } from "@tamagui/config/v3";
import { createFont, createTamagui, createTokens } from "tamagui"; // or '@tamagui/core'

const font = createFont({
  family: "Manrope",
  size: {
    1: 12,
    2: 14,
    3: 15,
    true: 14,
  },
  face: {
    300: { normal: "ManropeLight" },
    400: { normal: "Manrope" },
    500: { normal: "ManropeMedium" },
    600: { normal: "ManropeSemiBold" },
    700: { normal: "ManropeBold" },
    bold: { normal: "ManropeBold" },
  },
});

export const tokens = createTokens({
  ...config.tokens,
  color: {
    midnightBlue: "#191970",
    polynesianBlue: "#224C98",
    coralOrange: "#FF7F50",
    babyPowder: "#FEFEFA",
    raisinBlack: "#242124",
    aliceBlue: "#F0F8FF",
    silverGray: "#C0C0C0",
    cardinalRed: "#C51E3A",
    forestGreen: "#228B22",
    frenchGray: "#BEBFC5",
  },
});

const appConfig = createTamagui({
  ...config,
  tokens,
  fonts: { body: font, heading: font },
  themes: {
    light: {
      primary: tokens.color.midnightBlue,
      secondary: tokens.color.polynesianBlue,
      accent: tokens.color.coralOrange,
      background: tokens.color.babyPowder,
      text: tokens.color.raisinBlack,
      surface: tokens.color.aliceBlue, // cards or dialogs
      divider: tokens.color.silverGray, // content dividers
      error: tokens.color.cardinalRed, // errors or warnings
      success: tokens.color.forestGreen, // success or positive feedback
      disabled: tokens.color.frenchGray, // disabled elements
    },
    dark: {
      primary: tokens.color.midnightBlue,
      secondary: tokens.color.polynesianBlue,
      accent: tokens.color.coralOrange,
      background: tokens.color.babyPowder,
      text: tokens.color.raisinBlack,
      surface: tokens.color.aliceBlue, // cards or dialogs
      divider: tokens.color.silverGray, // content dividers
      error: tokens.color.cardinalRed, // errors or warnings
      success: tokens.color.forestGreen, // success or positive feedback
      disabled: tokens.color.frenchGray, // disabled elements
    },
  },
});

declare module "tamagui" {
  interface TamaguiCustomConfig extends AppConfig {}
}

export type AppConfig = typeof appConfig;
export default appConfig;
