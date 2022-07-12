<template>
  <div v-if="task" class="col s6 offset-s3">
    <h2>Редактирование задачи: {{task.title}}</h2>
    <form @submit.prevent="updateTask">
        <div class="input-field">
          <input v-model="title" id="title" type="text" class="validate" required />
          <label for="title">Название задачи</label>
          <span class="helper-text" data-error="Название задачи не может быть пустым"></span>
        </div>
        <div class="chips" ref="chips"></div>
        <div class="input-field">
          <textarea v-model="descr" id="descr" class="materialize-textarea"></textarea>
          <label for="descr">Textarea</label>
        </div>
        <input type="text" ref="datepicker" />
        <button type="submit" class="btn">Обновить задачу</button>
        <button type="button" class="btn complite" @click="changeStatus">{{ task.status === 'active' ? 'Завершить задачу' : 'Восстановить задачу'}}</button>
        <button type="button" class="btn del" @click="deleteTask">Удалить задачу</button>
      </form>
  </div>
  <h3 v-else>Задачи с id = {{$route.params.id}} нет</h3>
  
</template>

<script>
export default {
  data() {
    return {
      title: '',
      descr: '',
      tags: null,
      date: null
    }
  },methods: {
    updateTask(){
      const task = {
        id: this.task.id,
        title: this.title,
        descr: this.descr,
        date: this.date.date
      }
      this.$store.dispatch('updateTask', task)
      this.$router.push('/list')
    },
    changeStatus(){
      this.$store.dispatch('changeStatus', this.task.id)
      this.$router.push('/list')
    },
    deleteTask(){
      this.$store.dispatch('deleteTask', this.task.id)
      this.$router.push('/list')
    },
    destroyed(){
      if(this.tags && this.tags.destroy){
        this.tags.destroy()
      }
      if(this.date && this.date.destroy){
        this.date.destroy()
      }
    }
  },
  computed: {
    task(){
      return this.$store.getters.taskById(+this.$route.params.id)
    }
  },
  mounted(){
    this.title = this.task.title
    this.descr = this.task.descr
    this.tags = M.Chips.init(this.$refs.chips, {
      placeholder: 'Добавить тэг',
      data: this.task.tags
    });
    this.date = M.Datepicker.init(this.$refs.datepicker, {
      format: 'dd.mm.yyyy',
      defaultDate: new Date(this.task.date),
      setDefaultDate: true
    });
    
    setTimeout(()=>{
      M.updateTextFields()
    }, 0)
  }

}
</script>

<style lang="scss" scoped>
textarea{
  min-height: 200px !important;
}
.btn + .btn{
  margin-left: 15px;
}
.complite{
  background-color: orange;
}
.del{
  background-color: red;
}
</style>