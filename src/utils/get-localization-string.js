const getLocalizationString = (lang, payload) => {
  const normalizedLang = lang.replace('-', '_');

  let text = payload.default;

  if (typeof payload.localizations === 'object') {
    const { localizations } = payload;

    if (localizations[normalizedLang]) {
      text = localizations[normalizedLang];
    } else {
      const language = normalizedLang.substring(0, 2);

      const match = Object.keys(localizations)
        .sort()
        .find(key => key.substring(0, 2) === language);

      if (match) {
        text = localizations[match];
      }
    }
  }

  return text;
};

export default getLocalizationString;
