export const getRandomNoteColor = (colors: string[]) => {
	const { length } = colors;
	const randomIndex = Math.floor(Math.random() * length);
	return colors[randomIndex];
};

export const getNoteFontSize = (text: string) => {
	const MIN_FONT_SIZE = 12;
	const { length } = text;

	if (length > 0 && length <= 10) {
		return 40;
	}

	if (length > 10 && length <= 20) {
		return 30;
	}

	if (length > 20 && length <= 30) {
		return 20;
	}

	return MIN_FONT_SIZE;
};
