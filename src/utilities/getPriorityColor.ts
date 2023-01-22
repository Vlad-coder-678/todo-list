import { useTheme } from "@mui/material";

/**
 * @function getPriorityColor
 * @param {string} priority - приоритет таски
 *
 * @description возвращает цвет приоритета
 *
 * @returns {string}
 */
const getPriorityColor = (priority?: string) => {
  const theme = useTheme();

  switch (priority) {
    case "high": return theme.palette.error.main.toString();
    case "normal": return theme.palette.info.main.toString();
    case "low": return theme.palette.warning.main.toString();
    default: return theme.palette.success.main.toString();
  }
};

export default getPriorityColor;
