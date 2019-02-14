<template>
  <div class="container">
  <div class="login_box" >
    <div class="login_head">
      <h2>登录</h2>
    </div>
  <yd-layout>
    <yd-cell-group>
      <yd-cell-item>
        <span slot="left">用户名：</span>
        <yd-input slot="right" required v-model="input1" max="20" placeholder="请输入用户名"></yd-input>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">密码：</span>
        <yd-input slot="right" type="password" v-model="input2" placeholder="请输入密码"></yd-input>
      </yd-cell-item>
    </yd-cell-group>

    <yd-button-group>
      <yd-button size="large" @click.native="clickHander">登 录</yd-button>
    </yd-button-group>
  </yd-layout>
  </div>
  </div>
</template>

<script type="text/babel">
export default {
  data () {
    return {
      input1: '',
      input2: '',
      input3: 'ydui@qq.com',
      input4: '',
      input5: '',
      input6: '',
      input7: '',
      input8: '',
      input9: '',
      result: ''
    }
  },
  methods: {
    clickHander () {
      const input = this.$refs.input9
      this.result = `{<br />&nbsp;&nbsp;valid：${input.valid}，<br />&nbsp;&nbsp;errorMes：'${input.errorMsg}'，<br />&nbsp;&nbsp;errorCode：'${input.errorCode}'<br />}`
    }
  }
}
</script>
<style scoped>
  .container{width:90%}
  body{
    background-color: #000;
  }
  .login_box{
    background: #FFF;
    border-radius: 4px;
    display: block;
    padding: 15px;

    position: fixed;
    top:1.5rem;
    width: 90%;
    left:5%
  }

  .login_head {
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: 10px;
  }

  .login_head h2 {
    font-size: 0.5rem;
    line-height: 16px;
    margin-bottom: 16px;
    color:#06bf04;text-align: center;
    font-weight: normal
  }
</style>
