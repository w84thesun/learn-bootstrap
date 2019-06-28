# Learn bootstrap

В этом проекте я пробую разобраться с современной разработкой на JS
и заодно попробую сделать что-то простое с bootstrap.

## Как начать

Пройдемся по шагам и разберемся как настроить рабочее окружение для 
разработки на JS.

1. Устанавливаем Node.JS - пара шагов, описаны [здесь](https://github.com/nodesource/distributions/blob/master/README.md)
2. `mkdir learn-bootstrap` - создаем рабочую директорию с проектом
3. `npm init` - инициализируем проект, на выходе получаем файл **package.json** 
4. `npm install --save-dev webpack webpack-cli webpack-dev-server` - устанавливаем локально webpack 
для сборки проекта из кучки *.js файлов. Параметр `--save-dev` говорит о том, что указанные пакеты 
используются для разработки, но не для сборки
5. `npm install --save-dev babel-core babel-preset-env babel-loader` - устанавливаем транспайлер **babel** 
для того, чтобы писать на ECMASсript 
6. `npm install style-loader css-loader sass-loader node-sass extract-text-webpack-plugin -D` - устанавливаем 
набор модулей для сборки **scss**
7. `npm install bootstrap popper.js jquery` - наконец устанавливаем модули с помошью которых мы будем писать код своего 
фронтенда

 
