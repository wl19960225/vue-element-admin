<template>
  <div class="usertest_wrapper">
    <ListLayout>
      <template slot="content">
        <AlTable
          :column="formData.column"
          :data="formData.list"
          :pagination="true"
        />
      </template>
    </ListLayout>
  </div>
</template>

<script>
import { getUserList } from '@/api/user_test'
import ListLayout from '@/components/ListLayout/index.vue'
import AlTable from '@/components/AlTable/index.vue'
export default {
  components: {
    ListLayout,
    AlTable
  },
  data() {
    return {
      formData: {
        column: [
          {
            prop: 'nick',
            label: '昵称'
          },
          {
            prop: 'phone',
            label: '手机号'
          },
          {
            prop: 'name',
            label: '真实姓名'
          },
          {
            prop: 'subject',
            label: '所属学科'
          },
          {
            prop: 'job',
            label: '职位'
          },
          {
            prop: 'year',
            label: '工作年限'
          },
          {
            prop: 'updateTime',
            label: '录入时间'
          },
          {
            prop: 'actions',
            label: '操作',
            render(_, scope) {
              return (<el-button>删除</el-button>)
            }
          }
        ],
        list: []
      }
    }
  },
  created() {
    getUserList().then((res) => {
      const { code, data } = res
      if (Number(code) === 20000) {
        const { items, total } = data
        this.formData.list = items
        console.log(total)
      }
      console.log('usertest', res)
    })
  }
}
</script>

<style lang="scss" scoped>
</style>
