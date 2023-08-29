/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Weekday {
  SUN=1,
  MON= 0,
  TUE= 0,
  WED= 0,
  THU= 0,
  FRI= 0,
  SAT=1
}

function isWeekend(Weekday: number) {
  return Boolean(Weekday);
}

console.log(isWeekend(Weekday.SUN));

export { isWeekend };