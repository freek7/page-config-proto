<template>
  <div class="upc-credit-card">
    <div>
      <div class="label-info">{{ i18n.$t.cardNumber }}</div>
      <div class="card-number--wrapper">
        <label
            :class="{ invalid: inValid.cardNumber, 'with-icon':  cardTypeIcon}"
            class="form-control"
        >
          <span v-if="cardTypeIcon" class="input-icon card-number__icon">
            <component v-bind:is="cardTypeIcon"></component>
          </span>
          <input
              autocomplete="cc-number"
              v-model="cardInfo.cardNumber"
              @change="onCardNumberChange"
              v-mask="'#### #### #### ####'"
              type="text"
          />
        </label>
      </div>
    </div>
    <div class="card-detalis">
      <div class="card-date--wrapper">
        <div class="label-info">{{ i18n.$t.cardExp }}</div>
        <div class="d-flex-row">
          <div class="card-date__mm">
            <label :class="{ invalid: inValid.cardMM }" class="form-control">
              <input
                  autocomplete="cc-exp-mm"
                  v-model="cardInfo.cardMM"
                  v-mask="'##'"
                  class="text-center"
                  type="text"
                  maxlength="2"
              />
            </label>
          </div>
          <div class="card-date__yy">
            <label :class="{ invalid: inValid.cardYY }" class="form-control">
              <input
                  v-model="cardInfo.cardYY"
                  v-mask="'##'"
                  class="text-center"
                  type="text"
                  maxlength="2"
                  autocomplete="cc-exp-yy"
              />
            </label>
          </div>
        </div>
      </div>
      <div class="card-cvc2">
        <div class="label-info upc-d-flex justify-content-between">
          <span>CVC2/CVV2 </span>
          <upc-tooltip>
            {{ i18n.$t.cardCVC }}
          </upc-tooltip>
        </div>
        <label :class="{ invalid: inValid.cardCvc2 }" class="form-control">
          <input
              v-model="cardInfo.cardCvc2"
              class="text-center"
              v-mask="'###'"
              autocomplete="cc-csc"
              type="password"
              maxlength="3"
          />
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import {mask} from 'vue-the-mask'
import Tooltip from "@/components/tooltip.vue";
import VisaCardIcon from "@/components/icons/cards/visa.vue";
import MastercardCardIcon from "@/components/icons/cards/mastercard.vue";

import {
  valid_credit_card,
  mounthValidate,
  yearValidate,
  valid_card_date,
} from "@/utils/validation";
import {GetCardType} from "@/utils";

const defaultCard = () => {
  return {
    cardNumber: "",
    cardCvc2: "",
    cardYY: "",
    cardMM: "",
  };
};

export default {
  name: "CreditCard",
  directives: {mask},
  inject: ['i18n'],
  props: {
    value: {},
  },
  components: {
    "upc-tooltip": Tooltip,
    "upc-visa-card-icon": VisaCardIcon,
    'upc-mastercard-card-icon': MastercardCardIcon
  },
  data() {
    return {
      cardInfo: defaultCard(),
      inValid: {},
      submited: false,
      cardTypeIcon: false
    };
  },
  methods: {
    validate() {
      this.submited = true;

      const cardNumber_isValid = valid_credit_card(this.cardInfo.cardNumber);
      const cardDate_isValid = valid_card_date(
          this.cardInfo.cardYY.trim(),
          this.cardInfo.cardMM.trim()
      );
      const cardMM_isValid = mounthValidate(this.cardInfo.cardMM);
      const cardYY_isValid = yearValidate(this.cardInfo.cardYY);

      this.inValid = {
        cardNumber: !cardNumber_isValid,
        cardMM: !(cardMM_isValid && cardDate_isValid),
        cardCvc2: !(String(this.cardInfo.cardCvc2).trim().length === 3),
        cardYY: !(cardYY_isValid && cardDate_isValid),
      };
      return Object.values(this.inValid).every((item) => !item);
    },
    reset() {
      this.cardInfo = defaultCard();
      this.submited = false;
    },
    onCardNumberChange() {
      const currentType = GetCardType(this.cardInfo.cardNumber);

      const types = ['visa', 'mastercard'];
      if (types.includes(currentType)) {
        const icons = {
          visa: 'upc-visa-card-icon',
          mastercard: 'upc-mastercard-card-icon'
        };
        this.cardTypeIcon = icons[currentType];
      } else {
        this.cardTypeIcon = false
      }
    },
    getCardData() {
      const {cardNumber, cardCvc2, cardYY, cardMM} = this.cardInfo;
      return {
        cardNumber: cardNumber.replace(/ /g, ''),
        cardCvc2,
        cardYY,
        cardMM
      }
    }
  },
  watch: {
    cardInfo: {
      deep: true,
      immediate: false,
      handler() {
        if (this.submited) {
          this.validate();
        }
      },
    },
  },
};
</script>


<style lang="scss" scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

@import '../../assets/credit-card';
@import '../../assets/form-controls';
.upc-credit-card {
  .card-detalis {
    display: flex;
    padding-top: 35px;
  }

  .card-date__mm,
  .card-date__yy {
    width: 58px;
    max-width: 58px;
    margin-right: 12px;
  }

  .d-flex-row {
    display: flex;
  }

  .card-cvc2 {
    width: 108px;
    margin-left: auto;
    margin-right: 0;
  }
}
</style>
