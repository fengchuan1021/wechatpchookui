<template>
  <div style="display: flex;">


  <div class="left" style="display: flex;flex-direction: column">
    <div>
<el-button @click="lunchwechat">启动微信</el-button>
    </div>
    <div>
      <ul>
        <li v-for="(item,index) of friends" :key="index" @click="selectedwxid=item.wxid">{{item.wxid}}</li>
      </ul>
    </div>
  </div>

    <div class="right">
      <div>
      <div>
        <el-input v-model="selectedwxid"></el-input>
      </div>

      <div>
        <el-input v-model="content"></el-input>
      </div>
        <div>
          <el-button @click="sendmsg">发送</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted} from "vue";
import axios from "axios"
const friends=ref([])
const selectedwxid=ref("")
onMounted(()=>{
 axios.request({method:'get',url:'/api/msg/getfriendslist/'}).then(ret=>{
  console.log('1111111',ret.data.data)
   friends.value=ret.data.data
 })
})
const lunchwechat=()=>{
  window.lunchwechat()
}
const content=ref("")
const sendmsg=()=>{
  // eslint-disable-next-line no-empty
  if (content.value && selectedwxid.value){
    window.sendmsg(selectedwxid.value,content.value)
  }
}
</script>

<style>

</style>
