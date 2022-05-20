<template>
  <div class="conditions-wrapper">
    <div class="conditions-wrapper_item"><span v-permission="token">昵称</span><el-input v-model="inputnike" v-permission="token" placeholder="昵称" /></div>
    <div class="conditions-wrapper_item"><span v-permission="token">所属学科</span><el-select v-model="value" v-permission="token" clearable placeholder="请选择">
      <el-option
        v-for="item in subjectoptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    </div>
    <div class="conditions-wrapper_item"><span v-permission="token">职位</span><el-input v-model="inputjob" v-permission="token" placeholder="职位" /></div>
    <div class="conditions-wrapper_item"><span v-permission="token">工作年限</span><el-input v-model="inputyear" v-permission="token" placeholder="年限" /></div>
    <div class="conditions-wrapper_item"><span v-permission="token">手机号</span><el-input v-model="inputphone" v-permission="token" placeholder="手机号" /></div>
    <div class="conditions-wrapper_button"><el-button v-permission="token" type="primary" round>搜索</el-button></div>
    <div class="conditions-wrapper_button"><el-button v-permission="token" type="primary" round>重置</el-button></div>
  </div>
</template>

<script>
import { getToken } from '@/utils/auth'
export default {
  data() {
    return {
      inputnike: '',
      inputjob: '',
      inputyear: '',
      inputphone: '',
      subjectoptions: [{
        value: '选项1',
        label: '前端'
      }, {
        value: '选项2',
        label: '后端'
      }, {
        value: '选项3',
        label: '客户端'
      }, {
        value: '选项4',
        label: '产品'
      }, {
        value: '选项5',
        label: 'UED'
      }],
      value: ''
    }
  },
  methods: {
    token() {
      const token = getToken().split('-')[0]
      return token
    }
  }

}
</script>

<style lang="scss" scoped>
    .conditions-wrapper{
       display: flex;
       align-items: center;
        width: 100%;
        &_item{
            display: flex;
            flex-direction: row;
            align-items: center;
        }
        .conditions-wrapper_item span{
            width: 100%;
            text-align: right;
            padding-right: 10px;
        }
        &_button{
            padding-left: 10px;
            float: right;
        }
        &_button:hover{
            color: rgb(31, 113, 219);
        }
    }
</style>
