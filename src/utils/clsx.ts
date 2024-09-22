const clsx = (...classNames: (string | boolean | null | undefined)[]): string =>
  classNames.filter((item) => item).join(" ");

export default clsx;
