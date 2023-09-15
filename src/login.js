import './style.css';
import html from './login.html';

const webpackHtmlModule = html;
const htmlMarkup = `
<form class="auth">
    <fieldset class="auth__fields">
        <legend>Авторизация</legend>
        <label>Введите имя и пароль</label>
        <div class="auth__field-container">
            <label>Имя</label>
            <input />
        </div>
        <div class="auth__field-container">
            <label>Пароль</label>
            <input />
        </div>
    </fieldset>
    <button id="login" type="button" class="auth__button">Войти</button></>
    <button id="register" type="button" class="auth__button">Регистрация</button></>
</form >`;

export const login = {
    getHtml: () => htmlMarkup,
    getHtmlWebpack: () => webpackHtmlModule,
    getParcedElement: () => {
        const template = document.createElement('template');
        template.insertAdjacentHTML('afterbegin', htmlMarkup);
        const fragment = document.createDocumentFragment();
        fragment.append(...template.childNodes);
        return fragment;
    },
    getParcedWebpackElement: () => {
        const template = document.createElement('template');
        template.insertAdjacentHTML('afterbegin', html);
        const fragment = document.createDocumentFragment();
        fragment.append(...template.childNodes);
        return fragment;
    },
    getCreatedElement: () => {
        const form = document.createElement('form');
        form.classList.add('auth');

        const fieldset = document.createElement('fieldset');
        fieldset.classList.add('auth__fields');

        const legend = document.createElement('legend');
        legend.textContent = 'Авторизация';
        const label = document.createElement('label');
        label.textContent = 'Введите имя и пароль';

        const fieldName = document.createElement('div');
        fieldName.classList.add('auth__field-container');
        const labelName = document.createElement('label');
        labelName.textContent = 'Имя';
        const inputName = document.createElement('input');
        fieldName.append(labelName, inputName);

        const fieldPassword = document.createElement('div');
        fieldPassword.classList.add('auth__field-container');
        const labelPassword = document.createElement('label');
        labelName.textContent = 'Пароль';
        const inputPassword = document.createElement('input');
        fieldPassword.append(labelPassword, inputPassword);

        const buttonLogin = document.createElement('button');
        buttonLogin.textContent = 'Войти';
        buttonLogin.classList.add('auth__button');
        buttonLogin.setAttribute('type', 'button');
        buttonLogin.setAttribute('id', 'login');

        const buttonRegister = document.createElement('button');
        buttonRegister.textContent = 'Регистрация';
        buttonRegister.classList.add('auth__button');
        buttonRegister.setAttribute('type', 'button');
        buttonRegister.setAttribute('id', 'register');

        fieldset.append(legend, label, fieldName, fieldPassword);

        form.append(fieldset, buttonLogin, buttonRegister);

        return form;
    },
};
