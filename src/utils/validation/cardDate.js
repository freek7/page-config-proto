/**
 * @param  {number} yy
 * @param  {number} mm
 * @return {boolean}
 */
export const valid_card_date = (yy, mm) => {
	if (!String(yy) || !String(mm)) return false;
	const toDay = new Date();
	const cardDate = new Date().setFullYear(2000 + yy, mm - 1, 1);
	return cardDate > toDay;
};

export const isInteger = (value) => {
	return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
};

export const mounthValidate = (mm) => {
	if (!String(mm).trim()) return false;
	return isInteger(+mm) && !!(+mm > 0 && +mm < 13);
};

export const yearValidate = (yy) => {
	return isInteger(+yy) && new Date().getFullYear() <= 2000 + Number(yy);
};
