<template>
  <div>
    <div v-if="projects.length" v-cloak>
      <el-row>
        <el-col v-for="item in projects" :key="item.id" :span="12" style="padding: 10px">
          <el-card>
            <div slot="header" style="font-size: 1.3rem;color: #409EFF">
              <i class="el-icon-folder"></i>
              <a :href="item.url" target="_blank" style="text-decoration: none; color: inherit">{{item.project_name}}</a>
            </div>
            <div>
              <time style="font-size: 0.8rem;color: darkred">上次更新: {{ item.update}}</time>
              <div v-if="item.description !== null" style="margin-top:20px;">项目介绍: {{item.description}}</div>
              <div v-else style="margin-top:20px;">无项目介绍</div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <div v-else v-cloak>暂时没有项目:)</div>
  </div>
</template>

<script>
import user from '@/api/user'
  export default {
    data(){
      return {
        projects: []
      }
    },
    methods: {
      fetchProjects() {
        user.projects().then(resp => {
          let data = resp.data
          for(let i = 0; i < data.length; i++) {
            this.projects.push({
              id: data[i].id,
              project_name: data[i].name,
              description: data[i].description,
              update: data[i].updated_at,
              watcher: data[i].watchers_count,
              forks: data[i].forks_count,
              language: data[i].language,
              url: data[i].clone_url
            })
          }
        })
      }
    },
    mounted(){
      this.fetchProjects();
    }
  }
</script>
<style>
[v-cloak]{
  display: none !important;
}
</style>
