<template>
  <el-row :gutter="40" class="panel-group">
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-people">
          <img :src="visits" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">New Visits</div>
          <CountTo
            ref="myCount"
            :start-val="0"
            :end-val="102400"
            :duration="2600"
            class="card-panel-num"
          />
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-message">
          <img :src="messages" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">Messages</div>
          <CountTo
            :start-val="0"
            :end-val="81212"
            :duration="3000"
            class="card-panel-num"
          />
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-money">
          <img :src="purchases" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">Purchases</div>
          <CountTo
            :start-val="0"
            :end-val="9280"
            :duration="3200"
            class="card-panel-num"
          />
        </div>
      </div>
    </el-col>
    <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
      <div class="card-panel">
        <div class="card-panel-icon-wrapper icon-shopping">
          <img :src="shoppings" />
        </div>
        <div class="card-panel-description">
          <div class="card-panel-text">Shoppings</div>
          <CountTo
            ref="myCount"
            :start-val="0"
            :end-val="102400"
            :duration="2600"
            class="card-panel-num"
          />
        </div>
      </div>
    </el-col>
  </el-row>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { CountTo } from "vue3-count-to";

export default defineComponent({
  components: {
    CountTo,
  },
  setup() {
    const myCount = ref<HTMLElement | null>(null);
    onMounted(() => {
      console.log(myCount.value as any);
    });
    return {
      myCount,
      visits: require("@/assets/images/home/visits.png"),
      messages: require("@/assets/images/home/messages.png"),
      purchases: require("@/assets/images/home/purchases.png"),
      shoppings: require("@/assets/images/home/shoppings.png"),
    };
  },
});
</script>
<style lang="scss" scoped>
.panel-group {
  margin-top: 18px;
  .card-panel-col {
    margin-bottom: 32px;
  }
  .card-panel {
    height: 124px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    border-color: rgba(0, 0, 0, 0.05);
    img {
      display: inline-block;
      width: 60px;
      height: 60px;
    }
    .icon-people {
      color: #40c9c6;
    }
    .icon-message {
      color: #36a3f7;
    }
    .icon-money {
      color: #f4516c;
    }
    .icon-shopping {
      color: #34bfa3;
    }
    .card-panel-icon-wrapper {
      float: left;
      padding: 16px;
      margin: 14px 0 0 14px;
      border-radius: 6px;
    }
    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0;
      .card-panel-text {
        line-height: 18px;
        font-size: 16px;
        color: rgba(0, 0, 0, 0.45);
        margin-bottom: 12px;
      }
      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}
</style>
