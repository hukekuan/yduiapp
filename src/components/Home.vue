<template>
  <div>
    <yd-button @click.native="openConfrim" size="large">Confirm</yd-button>
    <yd-button size="large" type="danger">danger</yd-button>
    <yd-button size="large" type="warning">warning</yd-button>
    <yd-button size="large" type="disabled" disabled>disabled</yd-button>
    <yd-button size="large" type="hollow">hollow</yd-button>
    <yd-button size="large" bgcolor="#000" color="#FFF">Custom Color</yd-button>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    methods: {
      openConfrim() {
        this.$dialog.confirm({
          title: '选填标题',
          mes: '我有一个小毛驴我从来也不骑！',
          opts: () => {
            this.$dialog.toast({mes: '你点了确定', timeout: 1000});
          }
        });
      }
    }
  }
</script>

<style scoped>
</style>
