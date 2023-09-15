import { login } from './login';

const count = 5000;
const timespamp = {
    getHtml: {
        start: 0,
        end: 0,
    },
    getHtmlWebpack: {
        start: 0,
        end: 0,
    },
    getParcedElement: {
        start: 0,
        end: 0,
    },
    getParcedWebpackElement: {
        start: 0,
        end: 0,
    },
    getCreatedElement: {
        start: 0,
        end: 0,
    },
};

console.log('start');

timespamp.getHtml.start = Date.now();
for (let i = 0; i < count; i += 1) {
    document.body.insertAdjacentHTML('afterbegin', login.getHtml());
    document.body.lastElementChild.remove();
}
timespamp.getHtml.end = Date.now();

timespamp.getHtmlWebpack.start = Date.now();
for (let i = 0; i < count; i += 1) {
    document.body.insertAdjacentHTML('afterbegin', login.getHtmlWebpack());
    document.body.lastElementChild.remove();
}
timespamp.getHtmlWebpack.end = Date.now();

timespamp.getParcedElement.start = Date.now();
for (let i = 0; i < count; i += 1) {
    document.body.append(login.getParcedElement());
    document.body.lastElementChild.remove();
}
timespamp.getParcedElement.end = Date.now();

timespamp.getParcedWebpackElement.start = Date.now();
for (let i = 0; i < count; i += 1) {
    document.body.append(login.getParcedWebpackElement());
    document.body.lastElementChild.remove();
}
timespamp.getParcedWebpackElement.end = Date.now();

timespamp.getCreatedElement.start = Date.now();
for (let i = 0; i < count; i += 1) {
    document.body.append(login.getCreatedElement());
    document.body.lastElementChild.remove();
}
timespamp.getCreatedElement.end = Date.now();

console.log('Count inserts', count);
console.log('Timing', timespamp);
console.log('getHtml', timespamp.getHtml.end - timespamp.getHtml.start);
console.log('getHtmlWebpack', timespamp.getHtmlWebpack.end - timespamp.getHtmlWebpack.start);
console.log('getParcedElement', timespamp.getParcedElement.end - timespamp.getParcedElement.start);
console.log('getParcedWebpackElement', timespamp.getParcedWebpackElement.end - timespamp.getParcedWebpackElement.start);
console.log('getCreatedElement', timespamp.getCreatedElement.end - timespamp.getCreatedElement.start);
