/**
 * @func getTodayDate
 *
 * @description ворзваращает сегодняшнюю дату в формате "дд/мм/гггг"
 *
 * @param {boolean} asInLayout - если true - дата выведется как в макете
 *
 * @returns {string}
 */
const getTodayDate = (asInLayout: boolean = true): string => {
  const todayInLayout = "07/07/2022";
  const todayDate = new Date().toLocaleDateString("en-GB");

  return asInLayout ? todayInLayout : todayDate;
};

export default getTodayDate;
