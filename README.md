# Weather App React

Simple web application to check weather conditions for any city in the world using react.

## Authors

- [@falmonacid15](https://github.com/falmonacid15)

## Installation

clone repository

```bash
 git clone
```

## Environment Variables

To create enviroment use `cp .env.example .env`

`VITE_API_KEY`

I use
[Open weather map](https://openweathermap.org/price)

## Deployment

To deploy this project run

#

Downloads a package and it's dependencies

```bash
  npm install
```

#

Run App

```bash
  npm run dev
```

## Screenshots

Search by city

![App Screenshot](https://raw.githubusercontent.com/falmonacid15/weather-app-react/Features/Add-Material-ui-Tailwindcss-%26-mockup/demo/demo-search.gif)

Dark and Light mode switch

![App Screenshot](https://raw.githubusercontent.com/falmonacid15/weather-app-react/Features/Add-Material-ui-Tailwindcss-%26-mockup/demo/demo-dark%26lightmode.gif)

## Tech Stack

**Client:** React, Vite, Axios, TailwindCSS

## API Reference

#### Current Weather

```http
api.openweathermap.org/data/2.5/weather?q={city_name}&lang={lang}&units={units}&appid={api_key}
```

| Parameter   | Type     | Description                             |
| :---------- | :------- | :-------------------------------------- |
| `api_key`   | `string` | **Required**. Your API key              |
| `city_name` | `string` | **Required**. City name                 |
| `units`     | `string` | units: `standard`, `metric`, `imperial` |
| `lang`      | `string` | languages: `es, en, fr ...`             |

#### Forecast

```http
api.openweathermap.org/data/2.5/forecast?q={city_name}&lang={lang}&units={units}&appid={api_key}
```

| Parameter   | Type     | Description                             |
| :---------- | :------- | :-------------------------------------- |
| `api_key`   | `string` | **Required**. Your API key              |
| `city_name` | `string` | **Required**. City name                 |
| `units`     | `string` | units: `standard`, `metric`, `imperial` |
| `lang`      | `string` | languages: `es, en, fr ...`             |
