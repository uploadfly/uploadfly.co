function generateRandomMarker() {
  const latitude = Math.random() * (90 - -90) + -90;
  const longitude = Math.random() * (180 - -180) + -180;
  const size = 0.05;
  return { location: [latitude, longitude], size };
}

const allMarkers: { location: any[]; size: number }[] = [];

for (let i = 0; i < 100; i++) {
  const marker = generateRandomMarker();
  allMarkers.push(marker);
}

export { allMarkers as markers };
