# page-builder

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Config objects example

Config props

```javascript
{
	"header_color": "#43B02A",
	"button_color": "#FE6719",
	"font_color": "#282828",
	"font_name": "Roboto",
	"phone_number": "094 86 35 724",
	"email": "test@mail.com",
	"language": "ru",
	"background": "#fff",
	"logo": "https://cdn.comfy.ua/skin/frontend/enterprise/comfy_3/modules/common/img/logo_main.svg",
	"background_color": "red",
}
```

i18n provide Object
```javascript
const i18n = Vue.observable({
  $t: {
    orderID: "Заказ №",
    cardNumber: "Номер карты",
    cardExp: "Срок действия",
    cardCVC: "Код CVC2 (CVV2) числится на оборотной стороне карты",
    pay: "Оплатить",
    login: "Логин",
    password: "Пароль",
    enter: "Ввойти",
  },
});

export default {
  components: {
    "upc-payment-page": UpcPaymentPage,
  },
 provide() {
  return {
   i18n,
  };
 },
}
```
