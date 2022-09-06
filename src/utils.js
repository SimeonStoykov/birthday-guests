export const calculateDistance = (firstLocation, secondLocation) => {
  if (
    firstLocation.latitude &&
    firstLocation.longitude &&
    secondLocation.latitude &&
    secondLocation.longitude
  ) {
    const earthsRadius = 6371e3;
    const φ1 = (firstLocation.latitude * Math.PI) / 180;
    const φ2 = (secondLocation.latitude * Math.PI) / 180;
    const Δφ = ((secondLocation.latitude - firstLocation.latitude) * Math.PI) / 180;
    const Δλ = ((secondLocation.longitude - firstLocation.longitude) * Math.PI) / 180;

    const a =
      Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return (earthsRadius * c) / 1000;
  }
};
