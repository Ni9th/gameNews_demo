<template>
  <div class="pWrapper">
    <div class="navHeader">
      <van-icon name="arrow-left" @click="backPage"></van-icon>
    </div>
    <div class="loginForm">
      <p>账号密码登录</p>
      <div class="inputContent">
        <van-form @submit="onSubmit" >
          <van-field
          v-model="userName"
          name='userName'
          placeholder='手机号/邮箱'
          :rules="[{required: true, message: '请手机号或邮箱'}]"  />
          <van-field
          v-model="password"
          type="password"
          name='password'
          :rules="[{required: true, message: '请填写密码'}]"
          placeholder="输入密码">
            <template #button>
              <van-button style="border: 0 solid rgba(0, 0, 0, 0)">忘记密码</van-button>
            </template>
          </van-field>
          <van-button native-type="submit" class="loginBtn" :class="{ btnActive: userName && password }">登录</van-button>
        </van-form>
      </div>
      <span>账号注册</span>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Form, Field, Button, Icon } from 'vant'

Vue.use(Form)
Vue.use(Field)
Vue.use(Button)
Vue.use(Icon)
export default {
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    onSubmit (values) {
      this.$store.dispatch('login')
      this.$router.go(-1)
    },
    backPage () {
      this.$store.dispatch('swLoginPage')
    }
  }
}
</script>
<style scoped>
.pWrapper{
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: fixed;
  left: 0;
  top: 100%;
  opacity: 0;
  transition: top .2s ease-out;
  z-index: 1000;
}
.navHeader{
  width: 100%;
  height: 3rem;
  font-size: 1.5rem;
  line-height: 3rem;
  text-align: left;
}
.loginForm{
  width: 100%;
}
.loginForm>p{
  display: block;
  width: 100%;
  height: 3rem;
  margin: 2.5rem 0;
  padding-left: 1rem;
  font-size: 2rem;
  line-height: 3rem;
  text-align: left;
}
.loginForm>span{
  display: block;
  margin-top: 2rem;
  font-size: .9rem;
  color: rgb(78, 116, 241);
}
.inputContent{
  width: 100%;
  margin: 1rem 0;
}
.loginBtn{
  width: calc(100% - 2rem);
  display: block;
  margin: 1rem;
  background-color: rgb(209, 203, 203);
  color: rgb(124, 122, 122);
}
.btnActive{
  background-color: rgb(241, 66, 66);
  color: rgb(250, 248, 248);
}
</style>
