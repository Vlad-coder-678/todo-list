import { getUrlProps } from "../types";

/**
 * @function getUrl
 *
 * @description формирует и возвращает URL-адрес из переданных ему компонентов
 *
 * @param {object} props
 * @param {string} props.protocol - протокол
 * @param {string} protocol.host - имя хоста
 * @param {string} protocol.path - путь
 * @param {string} protocol.options - массив query параметров
 *
 * @returns {string}
 */
const getUrl = ({ protocol, host, path, options }: getUrlProps): string => {
  const url = new URL(path, `${protocol}://${host}`);
  options.map(({ key, value }) => url.searchParams.set(key, value));

  return url.toString();
};

export default getUrl;
