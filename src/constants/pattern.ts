const PATTERN_EMAIL = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/gm
const PATTERN_PASSWORD =
	/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-])/gm
const PATTERN_PHONE = /^\+[1-9]{1}[0-9]{3,14}$/

export { PATTERN_EMAIL, PATTERN_PASSWORD, PATTERN_PHONE }
