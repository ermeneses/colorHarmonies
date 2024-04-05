declare module "colorharmonies" {
  interface RGBColor {
    r: number;
    g: number;
    b: number;
  }

  interface HSLColor {
    h: number;
    s: number;
    l: number;
  }

  function hexToRgb(hex: string): RGBColor;
  function rgbToHsl(r: number, g: number, b: number): HSLColor;
  function hslToHex(h: number, s: number, l: number): string;
  function getComplementaryColor(hexColor: string): string;
  function getColorHarmonies(hexColor: string): {
    original: string;
    complementario: string;
    analogo1: string;
    analogo2: string;
    triadico1: string;
    triadico2: string;
    goodLooking: string;
  };
}
