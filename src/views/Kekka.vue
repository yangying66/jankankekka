<template>
  <div class="kekka">
    <h1>結果</h1>
    <table border="0">
      <tr>
        <th>回数</th>
        <th>結果</th>
      </tr>
      <tr v-for="(value , index) in score" :key="index">
        <td>
         {{index+1}}
        </td>
        <td>
         {{value}}
        </td>
      </tr>
    </table>
        </div>
</template>

<style>
 table{
   margin: 0 auto;
 }
</style>

<script>
// @ is an alias to /src
export default {
  name: 'Kekka',
  computed:{
      score: function(){
          return this.$store.getters.getData
      }
  },
}
</script>
