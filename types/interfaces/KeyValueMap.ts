export type KeyValueMap = {
  [key: string]:
    | string
    | number
    | KeyValueMap
    | KeyValueMap[]
    | null
    | undefined;
};
