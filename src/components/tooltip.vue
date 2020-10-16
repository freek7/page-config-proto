<template>
  <div class="upc-tooltip" @mouseenter="show = true" @mouseleave="show = false">
    <div class="upc-tooltip-icon">
      <slot name="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 15 15"
        >
          <g fill="none" fill-rule="evenodd">
            <g fill="#212225">
              <g>
                <path
                  d="M324.923 135.962h1.154v-4.616h-1.154v4.616zm0-5.77h1.154v-1.154h-1.154v1.154zm.577-4.038c3.511 0 6.346 2.835 6.346 6.346s-2.835 6.346-6.346 6.346-6.346-2.835-6.346-6.346 2.835-6.346 6.346-6.346zm0-1.154c-4.135 0-7.5 3.365-7.5 7.5s3.365 7.5 7.5 7.5 7.5-3.365 7.5-7.5-3.365-7.5-7.5-7.5z"
                  transform="translate(-1010 -614) translate(692 489)"
                />
              </g>
            </g>
          </g>
        </svg>
      </slot>
    </div>
    <transition name="fade">
      <div
        :style="{ width }"
        :class="`upc-tooltip-content ` + position"
        v-if="show"
      >
        <div class="slot">
          <slot />
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: "TooltipComponent",
  props: {
    width: {
      default: "250px",
    },
    position: {
      type: String,
      default: "top left",
    },
  },
  data() {
    return {
      show: false,
    };
  },
};
</script>
<style lang="scss" scoped>
.upc {
  &-tooltip {
    display: inline-block;
    position: relative;
    &-icon {
      cursor: pointer;
      display: inline-block;
    }
    &-content {
      background: #fff;
      position: absolute;
      max-width: 100vw;
      padding: 5px;
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
      border-radius: 3px;
      z-index: 200;
      &::before {
        content: "";
        left: -15px;
        right: -15px;
        bottom: -15px;
        top: -15px;
        display: block;
        position: absolute;
        background: transparent;
        z-index: 1;
      }
      .slot {
        position: relative;
        z-index: 10;
      }
      &.left {
        right: 5px;
      }
      &.top {
        bottom: calc(100% + 5px);
      }
      &.bootom {
        top: calc(100% + 5px);
      }
      &.right {
        left: 5px;
      }
    }
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .35s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>