Test assignment in faraway

## Description

Используя стороннее API в качестве источника данных (пример: Star Wars API
https://swapi.dev/), реализовать SPA приложение React и Typescript, состоящее из двух страниц.
На главной странице отобразить список или карточки персонажей, к списку добавить
возможность пагинации. На главной странице должен быть реализован поиск персонажей.
Реализовать страницу с подробной информацией по выбранному персонажу.

Плюсы:

- Аккуратная верстка
- Использование UI фреймворка (Material, Ant, Bootstrap и т.п.)
  В качестве дополнительного задания:
- Для работы с данными использовать хранилище Redux
- Редактировать информацию о персонаже локально, без отправки на сервер
- Написать тесты
- Фильтрация на главной странице

## [System Design](./SYSTEM_DESIGN.md)

## Start Project

### Via npm

Node.js v16 is preferable. Run following command and follow instructions in terminal output

```
npm start
```

### Via Docker

Run following command. Project will start on http://localhost:3050. You can change port in Makefile

```
make start
```

## What's done

- System design
- Layered architecture with separation of concerns
- List and details pages
- Character editing
- Search and pagination

## And what's not

- filtration
- testing
