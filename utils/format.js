const fixers = {
    email: (input) => (input || '').toString().toLowerCase().replace(/ /gi, ''),
    phone: (input) => (input || '').replace(/[^0-9]/gi, ''),
    telegram: (input) => (input || '').replace(/[^a-zA-Z0-9\_]/gi, ''),
}
const displayers = {
    phone: (input) =>
        (input || '')
            .split('')
            .map((c, i) => {
                if (input.length > 10) {
                    if (i === input.length - 4 && c !== ' ') {
                        c = ' ' + c
                    }
                    if (i === input.length - 7 && c !== ' ') {
                        c = ' ' + c
                    }
                    if (i === input.length - 10 && c !== ' ') {
                        c = ' ' + c
                    }
                    if (i === input.length - input.length && c !== '+') {
                        c = '+' + c
                    }
                    return c
                } else {
                    if (i === 0 && c !== '(') {
                        c = '(' + c
                    }
                    if (i === 3 && c !== ')') {
                        c = ') ' + c
                    }
                    if (i === 6 && c !== '-') {
                        c = '-' + c
                    }
                    return c
                }
            })
            .join(''),
    int_phone: (input) =>
        (input || '')
            .split('')
            .map((c, i) => {
                if (i === 0 && c !== '(') {
                    c = '' + c
                }
                if (i === 3 && c !== ')') {
                    c = ' ' + c
                }
                if (i === 6 && c !== '-') {
                    c = ' ' + c
                }
                return c
            })
            .join(''),
}
const validators = {
    email: (input) => (input || '').indexOf('@') > 0 && (input || '').indexOf('.') > 0 && (((input || '').split('@')[1] || '').split('.')[1] || '').length > 1,
    phone: (input) => (input || '').length > 8, // alternate for international numbers
    //phone: (input) => (input || '').length > 9,
    telegram: (input) => (input || '').length > 4,
    zilliqaAddress: (input) => (input || '').length >= 42 && (input || '').indexOf('zil') === 0,
}

export function displayer(type, input) {
    return displayers[type] ? displayers[type](input) : input
}

export function autoFix(type, input) {
    return fixers[type] ? fixers[type](input) : input
}

export function hasValidators(type) {
    return validators[type] ? true : false
}
export function validate(type, input) {
    return validators[type] ? validators[type](input) : true
}