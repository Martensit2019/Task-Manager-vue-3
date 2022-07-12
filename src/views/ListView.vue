<template>
  <div v-if="tasks.length">
    <h1>Список задач</h1>
    <hr />
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Статус</th>
          <th>Название</th>
          <th>Описание</th>
          <th>Дата</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, idx) of tasks" :key="task.id">
          <td>{{ idx + 1 }}</td>
          <td>
            <p>
              <label>
                <input type="checkbox" class="filled-in" :checked="task.status === 'completed'" @change="changeStatus(task.id)" />
                <span></span>
              </label>
            </p>
          </td>
          <td ><div class="" :style="{textDecoration: task.status === 'completed' ? 'line-through' : 'none'}">{{ task.title }}</div></td>
          <td>
            <div class="descr">{{ task.descr }}</div>
          </td>
          <td>{{ new Date(task.date).toLocaleDateString() }}</td>
          <td>
            <router-link :to="`/task/${task.id}`">
              <button class="btn btm-small">Редактировать</button>
            </router-link>
          </td>
          <td>
            <button class="btn btm-small red" @click="deleteTask(task.id)">
              Удалить
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else>
    <h1>Задач пока нет</h1>
    <router-link to="/">
      <button class="btn btm-small">Добавить задачу</button>
    </router-link>
  </div>
</template>

<script>
export default {
  methods: {
    changeStatus(id){
      this.$store.dispatch("changeStatus", id);
    },
    deleteTask(id) {
      this.$store.dispatch("deleteTask", id);
      // this.$router.push('/list')
    },
  },
  computed: {
    tasks() {
      return this.$store.getters.tasks;
    },
  },
};
</script>

<style lang="scss" scoped>
th {
  // text-align: center;
}
.descr {
  max-width: 300px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
</style>