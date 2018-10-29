export function getQueryString() {
  const { search: q } = window.location

  if (!q) return {}

  return (/^[?#]/.test(q) ? q.slice(1) : q)
    .split('&')
    .reduce((params, param) => {
      let [ key, value ] = param.split('=');
      params[key] = value ? decodeURIComponent(value) : '';
      return params;
    }, { })
}

export function toTitleCase(string) {
	let firstLetter = string[0]
	let allOtherLetters = string.slice(1)

	return firstLetter.toUpperCase() + allOtherLetters.toLowerCase()
}