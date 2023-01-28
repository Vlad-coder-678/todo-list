import { cutStringProps } from "../types";

/**
 * @function cutString
 *
 * @param props
 *
 * @description обрезает строку до необходимой длины
 *
 * @param {object} props
 * @param {string} props.string - строка
 * @param {number} props.length - максимальное количество символов в строке
 * @param {string?} props.suffix - суфикс
 *
 * @returns {string}
 */
const cutString = ({ string = "", length, suffix = "..." }: cutStringProps): string => (
  (string.length > length) ? `${string.slice(0, length - suffix.length)}${suffix}` : string
);

export default cutString;
