import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]')
  },
  getters: {
    tasks: s => s.tasks,
    taskById: s => id => s.tasks.find(task => task.id === id)
  },
  mutations: {
    addTask(state,task){
      state.tasks.unshift(task)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    updateTask(state, {id, title, descr, date}){
      const tasks = [...state.tasks]
      const idx = tasks.findIndex(task => task.id === id)
      const task = tasks[idx]
      tasks[idx] = {...task, title, descr, date}
      state.tasks = tasks
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    deleteTask(state, id){
      state.tasks = state.tasks.filter(task => task.id !== id)
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    changeStatus(state, id){
      const idx = state.tasks.findIndex(task => task.id === id)
      if(state.tasks[idx].status === 'active'){
        state.tasks[idx].status = 'completed'
      }else{
        state.tasks[idx].status = 'active'
      }
      this.commit("toFilterTasks")
    },
    toFilterTasks(state){
      const activeTasks = state.tasks.filter(task => task.status === 'active')
      const completedTasks = state.tasks.filter(task => task.status === 'completed')
      state.tasks = [...activeTasks, ...completedTasks]
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }
  },
  actions: {
    addTask({commit}, task){
      commit('addTask', task)
    },
    updateTask({commit}, task){
      commit('updateTask', task)
    },
    deleteTask({commit}, id){
      commit('deleteTask', id)
    },
    changeStatus({commit}, id){
      commit('changeStatus', id)
    }
  }
})
