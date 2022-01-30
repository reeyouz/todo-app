const offset = new Date().getTimezoneOffset() * 60 * 1000;

export function transformDate(date: Date): string {
  const time = date?.getTime?.();
  if (typeof time !== "number") {
    throw new Error("Invalid input for date!");
  }
  return new Date(time + offset).toISOString().split("T")[0];
}
