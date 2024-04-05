// Función para convertir un color hexadecimal a RGB
function hexToRgb(hex) {
  let bigint = parseInt(hex.substring(1), 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
}

// Función para convertir RGB a HSL
function rgbToHsl(r, g, b) {
  (r /= 255), (g /= 255), (b /= 255);
  let max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return {
    h: h * 360,
    s: s * 100,
    l: l * 100,
  };
}

// Función para convertir HSL a hexadecimal
function hslToHex(h, s, l) {
  h /= 360;
  s /= 100;
  l /= 100;
  let r, g, b;
  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  const toHex = (x) => {
    const hex = Math.round(x * 255).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

// Función principal para obtener armonías de color
function getColorHarmonies(hexColor) {
  // Convertir el color hexadecimal a RGB
  let rgbColor = hexToRgb(hexColor);

  // Convertir RGB a HSL
  let hslColor = rgbToHsl(rgbColor.r, rgbColor.g, rgbColor.b);

  // Calcular colores complementarios, análogos y triádicos
  let complementario = hslToHex((hslColor.h + 180) % 360, hslColor.s, hslColor.l);
  let analogo1 = hslToHex((hslColor.h + 30) % 360, hslColor.s, hslColor.l);
  let analogo2 = hslToHex((hslColor.h - 30 + 360) % 360, hslColor.s, hslColor.l);
  let triadico1 = hslToHex((hslColor.h + 120) % 360, hslColor.s, hslColor.l);
  let triadico2 = hslToHex((hslColor.h + 240) % 360, hslColor.s, hslColor.l);

  // Retornar los colores calculados
  return {
    original: hexColor,
    complementario: complementario,
    analogo1: analogo1,
    analogo2: analogo2,
    triadico1: triadico1,
    triadico2: triadico2,
  };
}

// Exportar la función getColorHarmonies para que esté disponible fuera del módulo
module.exports = { getColorHarmonies };
