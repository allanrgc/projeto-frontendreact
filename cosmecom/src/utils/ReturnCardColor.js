export const getColors = (type) => {
  switch (type) {
    case "Roupa":
      return "#5269AC";
    case "Colecionavel":
      return "#74CEC0";
    case "Normal":
      return "#8A8A8A";
    case "Joia":
      return "#AD61AE";
    case "Brinquedo":
      return "#33A4F5";
    default:
      return "#8A8A8A";
  }
};
