<template>
  <div id="app">
    <div class="upc-content-preview ">
      <upc-panel-bar class="upc-mb-3" v-model="form"/>
    <div class="page-preview  upc-mb-3">
       <upc-payment-page :config="form"/>
    </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      form: {
        "header_color": "#43B02A",
        "button_color": "#FE6719",
        "font_color": "#282828",
        "font_name": "Roboto",
        "phone_number": "094 86 35 724",
        "email": "test@mail.com",
        "language": "ru",
        "logo": "https://cdn.comfy.ua/skin/frontend/enterprise/comfy_3/modules/common/img/logo_main.svg"
      }     
    }
  }
}
</script>
<style lang="scss">

  .upc-content-preview{
    display: flex;
    flex-wrap: wrap;
    padding: 30px;
    @media(max-width:600px){
      padding: 5px;
    }
  }
  .page-preview{
    max-width: 100%;
    width: 658px;
    height: 782px;
    border-radius: 4px;
    box-shadow: 2px 2px 12px 0 rgba(0, 0, 0, 0.09);
    border: solid 1px #eaeaea;
    background-color: #ffffff;
    margin: 0 auto;
  }
</style>