export const getUrlParamByPosition = (path: string, position: number): string => {
  return path.split('/').at(position) || '';
};
