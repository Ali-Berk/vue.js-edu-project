<template>
  <div>
    Öğrenci notları
    <div v-for="student in students" :key="student.id">
        <h1>{{student.studentname}}</h1>
        <h3>{{student.note}}</h3>
    </div>
    <button @click="asd">STNAME DEĞİŞ</button>
  </div>
</template>

<script>




export default {
  name: 'studentNotes',
  props: ['students'],
  components: {
  },
  data (){
    return{
      a:[
        {
          id:1,
          stname:"ali",
          note:90,
        },
      ] 
    }
  },
  methods:{
    asd(){
      console.log(this.a[0].stname);
      this.a[0].stname="berk";
      console.log(this.a[0].stname);
    }
  }
}
</script>

<style>

</style>
