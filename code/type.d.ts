type FuncVoid = (...args: any[]) => void;
type Func<T> = (...args: any[]) => T;
type FuncAny = (...params: any[]) => any;
type NotFunc<T> = T extends (...args: any[]) => any ? never : T;
type ValOfObj<T> = T[keyof T];
type PartialAll<T, U> = {
  [p in keyof (T & U)]: p extends keyof T
    ? T[p]
    : p extends keyof U
    ? U[p]
    : never;
};

/** 抽取class的属性... */
type ClassProp<T, K extends keyof T> = T[K];
type ClassMethod<T> = { [k in keyof T]: T[k] extends Function ? T[k] : never };
type ClassMethodName<T> = { [k in keyof T]: T[k] extends Function ? k : never };
type Ctor<T> = new (...args) => T;

type IndexOf<T extends any[]> = T[number];

type IfEquals<X, Y, A = X, B = never> = (<T>() => T extends X ? 1 : 2) extends <
  T
>() => T extends Y ? 1 : 2
  ? A
  : B;

type WritableKeys<T> = {
  [P in keyof T]-?: IfEquals<
    { [Q in P]: T[P] },
    { -readonly [Q in P]: T[P] },
    P
  >;
}[keyof T];

type ReadonlyKeys<T> = {
  [P in keyof T]-?: IfEquals<
    { [Q in P]: T[P] },
    { -readonly [Q in P]: T[P] },
    never,
    P
  >;
}[keyof T];

type NoReadOnlyProps<T> = Pick<T, WritableKeys<T>>;
type B<T> = Readonly<T>;

type Without<T, K> = {
  [L in Exclude<keyof T, K>]: T[L];
};

type ObjFilterFlags<T, Condition> = {
  [k in keyof T]: T[k] extends Condition ? k : never;
};
type ObjFilterKeys<Base, Condition> = ObjFilterFlags<
  Base,
  Condition
>[keyof Base];

type ObjFilter<Base, Condition> = Pick<Base, ObjFilterKeys<Base, Condition>>;

type SplitLast<T extends any[]> = T extends [...infer I, (infer L)?]
  ? [I, L]
  : never;

type NotLastParameters<T extends FuncAny> = SplitLast<Parameters<T>>[0];
type LastParameters<T extends FuncAny> = SplitLast<Parameters<T>>[1];

type Mutable<T> = {
  -readonly [K in keyof T]: T[K];
};

type UnpackArr<T> = T extends (infer K)[]
  ? K extends [infer K1, infer K2]
    ? [K1[], K2[]]
    : never
  : never;

// type A = [[T1, K1], [T2, K2],...];
// UnpackArrDeep<A> = [[T1, T2, ...], [K1, K2, ...]]
type UnpackArrDeep<T> = T extends [infer I, ...infer L]
  ? I extends [infer I1, infer I2]
    ? UnpackArrDeep<L> extends [infer L1, infer L2]
      ? [[I1, ...L1], [I2, ...L2]]
      : [[I1], [I2]]
    : never
  : T extends []
  ? []
  : UnpackArr<T>;

type Props<T, U> = { [key in keyof T]: T[key] extends U ? key : never };

type ElementType<T> = T extends ReadonlyArray<infer U> ? U : T;

type A = ElementType<["test", "this"]>;

type ToCamel<S extends string> = S extends `${infer Head}_${infer Tail}`
  ? `${Head}${Capitalize<ToCamel<Tail>>}`
  : S;

type D = ToCamel<"foot_bar_test">;
