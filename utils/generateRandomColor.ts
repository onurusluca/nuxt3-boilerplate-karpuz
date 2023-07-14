// Generate a random distinctive color that is not too dark or too light
export function generateDistinctiveColor(): { color: string } {
  function randomHex(): string {
    const hex = Math.floor(Math.random() * 256).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }

  function isDistinctive(color1: string, color2: string): boolean {
    const threshold = 50;
    const diff = Math.abs(parseInt(color1, 16) - parseInt(color2, 16));
    return diff >= threshold;
  }

  let newColor;
  do {
    newColor = `#${randomHex()}${randomHex()}${randomHex()}`;
  } while (
    !isDistinctive(newColor.substring(1, 3), "FF") ||
    !isDistinctive(newColor.substring(3, 5), "FF") ||
    !isDistinctive(newColor.substring(5), "FF") ||
    !isDistinctive(newColor.substring(1, 3), "00") ||
    !isDistinctive(newColor.substring(3, 5), "00") ||
    !isDistinctive(newColor.substring(5), "00")
  );
  return { color: newColor };
}
