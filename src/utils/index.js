export const getFormattedDate = () => {
  const date = new Date();
  const day = getDayName(date);
  const hour = date.getHours();
  const minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
  return `${day}, ${hour}:${minutes}`;
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getDayName = (date) => {
  const days = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
  return days[date.getDay()];
};
