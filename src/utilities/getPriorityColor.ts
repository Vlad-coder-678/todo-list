import { getPriorityColorProps } from "../types";

/**
 * @function getPriorityColor
 *
 * @description возвращает цвет приоритета
 *
 * @param {object} props
 * @param {string} props.priority - приоритет таски
 * @param {string} props.highPriorityColor - цвет высокого приоритета таски
 * @param {string} props.normalPriorityColor - цвет обычного приоритета таски
 * @param {string} props.lowPriorityColor - цвет низкого приоритета таски
 * @param {string} props.defaultPriorityColor - цвет приоритета таски по умолчанию
 *
 * @returns {string}
 */
const getPriorityColor = ({
  priority,
  highPriorityColor,
  normalPriorityColor,
  lowPriorityColor,
  defaultPriorityColor,
}: getPriorityColorProps): string => {
  switch (priority) {
    case "high": return highPriorityColor;
    case "normal": return normalPriorityColor;
    case "low": return lowPriorityColor;
    default: return defaultPriorityColor;
  }
};

export default getPriorityColor;
