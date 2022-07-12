<template>
  <nav class="container">
    <div class="nav-wrapper">
      <router-link to="/" class="brand-logo">Таск Менеджер</router-link>
      <ul class="right hide-on-med-and-down">
        <li>
          <router-link to="/" axact active-class="active">Добавить задачу</router-link>
        </li>
        <li>
          <router-link to="/list"  active-class="active">Список задач</router-link>
        </li>
        
      </ul>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
nav{
  padding: 0 20px;
}

</style>