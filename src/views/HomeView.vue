<template>
  <div class="row">
    <div class="col s6 offset-s3">
      <h2>Создать задачу</h2>
      <form @submit.prevent="addTask">
        <div class="input-field">
          <input v-model="title" id="title" type="text" class="validate" required />
          <label for="title">Название задачи</label>
          <span class="helper-text" data-error="Название задачи не может быть пустым"></span>
        </div>
        <div class="chips" ref="chips"></div>
        <div class="input-field">
          <textarea v-model="descr" id="descr" class="materialize-textarea"></textarea>
          <label for="descr">Описание задачи</label>
        </div>
        <input type="text" ref="datepicker" />
        <button type="submit" class="btn">Добавить задачу</button>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  data() {
    return {
      title: '',
      descr: '',
      tags: null,
      date: null
    }
  },
  methods: {
    addTask(){
      const task = {
        id: Date.now(),
        title: this.title,
        descr: this.descr,
        status: 'active',
        tags: this.tags.chipsData,
        date: this.date.date
      }
      this.$store.dispatch('addTask', task)
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
  mounted(){
    this.tags = M.Chips.init(this.$refs.chips, {
      placeholder: 'Добавить тэг'
    });
    this.date = M.Datepicker.init(this.$refs.datepicker, {
      format: 'dd.mm.yyyy',
      defaultDate: new Date(),
      setDefaultDate: true
    });
  }
}
</script>
