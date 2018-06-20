export const TOAST_SETTINGS = {
    position: 'bottom-right',
    autoClose: 3000,
    progressClassName: 'progressbar'
}

export const LOGIN_FORM_SCHEME = [
    {
        schemeType: 'input',
        name: 'username',
        placeholder: 'Username',
        required: true
    },
    {
        schemeType: 'password',
        name: 'password',
        placeholder: 'Password',
        required: true
    }
]

export const ADD_NOTE_FORM_SCHEME = [
    {
        schemeType: 'input',
        name: 'title',
        placeholder: 'Note Title',
        required: true
    },
    {
        schemeType: 'textarea',
        name: 'content',
        placeholder: 'Note Content...',
        required: true
    }
]