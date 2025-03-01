// filepath: /timesheets-app/timesheets-app/src/utils/dateUtils.ts
export const formatDate = (date: Date): string => {
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
};

export const formatWeekRange = (startDate: Date): string => {
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + 6);
  return `${formatDate(startDate)} - ${formatDate(endDate)}`;
};

export const getPreviousWeek = (currentWeek: Date): Date => {
  const prevWeek = new Date(currentWeek);
  prevWeek.setDate(prevWeek.getDate() - 7);
  return prevWeek;
};

export const getNextWeek = (currentWeek: Date): Date => {
  const nextWeek = new Date(currentWeek);
  nextWeek.setDate(nextWeek.getDate() + 7);
  return nextWeek;
};