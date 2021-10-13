/**
 * @param  {string} fontName
 * @param  {string} fontLink
 * @param  {string} elmentId='upc-font'
 */
export const updateFont = (fontName, fontLink, elmentId = 'upc-font') => {
	const styleElment = document.head.querySelector(`style#${elmentId}`);
	if (styleElment) {
		document.head.removeChild(styleElment);
	}
	const style = document.createElement('style');
	style.setAttribute('type', 'text/css');
	style.setAttribute('id', 'upc-font');
	document.head.append(style);

	const css = `
        @import url(${fontLink});
       body{font-family: '${fontName}', sans-serif;}`;

	style.appendChild(document.createTextNode(css));
};
