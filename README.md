# Frontend Test Task (Angular 19+)

Мини-приложение реализует требования тестового задания:

- 2 страницы: приветствие и страница меню.
- На странице меню есть разделы (Tab 1/Tab 2), список пунктов с checkbox и значением.
- В заголовке показываются:
  - текущий раздел,
  - количество выбранных пунктов,
  - сумма значений выбранных пунктов.

## Запуск локально

```bash
npm install
npm start
```

Приложение будет доступно на `http://localhost:4200`.

## Проверка компиляции

```bash
./node_modules/.bin/ngc -p tsconfig.app.json
```

## Production build

```bash
npm run build
```

## GitHub Pages

В проекте включён hash-routing (`/#/menu`), чтобы маршрутизация корректно работала на GitHub Pages.

Скрипт сборки для Pages:

```bash
npm run build:pages
```

Артефакты будут в `dist/frontend-test/browser`.

### Автодеплой через GitHub Actions

Добавлен workflow `.github/workflows/deploy-pages.yml`.

Что нужно сделать в GitHub:

1. Запушить проект в репозиторий (ветка `main`).
2. В `Settings -> Pages` выбрать источник `GitHub Actions`.
3. После пуша в `main` workflow автоматически соберёт и опубликует сайт.
