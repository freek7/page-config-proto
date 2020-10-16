export const renderFile = (input) => {
	return new Promise((res, rej) => {
		let file = input.files[0];

		let reader = new FileReader();
		if (file && file.type.match('image.*')) {
			reader.readAsDataURL(file);

			reader.onload = function() {
				res(reader.result);
			};

			reader.onerror = function() {
				rej();
			};
		} else {
			rej('Not Image');
		}
	});
};
