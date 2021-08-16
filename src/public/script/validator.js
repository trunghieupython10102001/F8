const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

class Validator {

	constructor(formName) {
		this.formElement = $(formName)	
		this.formName = formName
	}

	isEmail(selector) {
		const email = this.getValue(selector)
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		return re.test(String(email).toLowerCase())
	}

	minLength(selector, min) {
		const value = this.getValue(selector)
		return value.length >= min
	}

	isRequired(selector) {
		const value = this.getValue(selector)
		return value.trim().length > 0
	}

	getValue(selector) {
		const inputElement = this.formElement.querySelector(selector)
		return inputElement.value
	}
}
