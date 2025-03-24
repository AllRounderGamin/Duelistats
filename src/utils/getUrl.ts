const BASE_URL = process.env.BASE_URL;

const INCLUDES_FORWARD_SLASH_AT_START_REGEX = /^\/(.|\n)*$/;
const INCLUDES_FORWARD_SLASH_AT_START = (string: string) =>
  INCLUDES_FORWARD_SLASH_AT_START_REGEX.test(string);

const getUrl = (path: string) => {
  const url = `${BASE_URL}${!INCLUDES_FORWARD_SLASH_AT_START(path) ? '/' : ''}${path}`;

  return url;
};

export default getUrl;
export { BASE_URL, INCLUDES_FORWARD_SLASH_AT_START, INCLUDES_FORWARD_SLASH_AT_START_REGEX };
