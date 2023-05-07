export const filterPassedTime = (time: Date) => {
  const currentDate = new Date();
  const selectedDate = new Date(time);

  const day = selectedDate.getDay();

  return currentDate.getTime() < selectedDate.getTime() && day !== 0;
};