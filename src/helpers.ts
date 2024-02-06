type Params = Record<string, any>;
type MergeKeys = string[] | null;

export const mergeParams = (
  params: Params,
  defaultParams: Params,
  mergeKeys: MergeKeys
) => {
  const obj: Params = {};

  mergeKeys?.forEach((key) => {
    obj[key] = params?.[key] ?? defaultParams?.[key];
  });

  return obj;
};
