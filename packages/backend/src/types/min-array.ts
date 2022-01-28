type MinArrayBuilder<
  T,
  N extends number,
  Current extends T[]
> = Current["length"] extends N
  ? [...Current, ...T[]]
  : MinArrayBuilder<T, N, [...Current, T]>;

export type MinArray<T, N extends number> = MinArrayBuilder<T, N, []>;
