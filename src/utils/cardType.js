export const GetCardType = (number) => {
	// visa
	let re = new RegExp('^4');
	if (number.match(re) != null) {
		return 'visa';
	}

	// Mastercard
	// Updated for Mastercard 2017 BINs expansion
	if (/^5[1-5]/.test(number)) {
		return 'mastercard';
	}

	// AMEX
	re = new RegExp('^3[47]');
	if (number.match(re) != null) {
		return 'amex';
	}

	// Discover
	re = new RegExp('^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)');
	if (number.match(re) != null) {
		return 'discover';
	}

	// Diners
	re = new RegExp('^36');
	if (number.match(re) != null) {
		return 'diners';
	}

	// Diners - Carte Blanche
	re = new RegExp('^30[0-5]');
	if (number.match(re) != null) {
		return 'diners-carte-blanche';
	}

	// JCB
	re = new RegExp('^35(2[89]|[3-8][0-9])');
	if (number.match(re) != null) {
		return 'jcb';
	}

	// Visa Electron
	re = new RegExp('^(4026|417500|4508|4844|491(3|7))');
	if (number.match(re) != null) {
		return 'visa-electron';
	}

	return '';
};
