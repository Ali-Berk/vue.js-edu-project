<template>
<div>
    <h1>Öğrenci detay</h1>
    <!-- <h3>{{ $route.params.id }}</h3> -->
     <div v-if="student">
      <h3>{{ student.id}}</h3>
      <h3>{{ student.name}}</h3>
      <h3>{{ student.age}}</h3>
    </div>
    <div v-else>
        <p>veri yükleniyor</p>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
    
    name: 'studentDetail',
    data(){
        return{
            student:null,
        }
    },
    mounted(){
    // fetch('http://localhost:3000/students/'+this.$route.params.id).then(res => res.json()).then(data => this.student =data)
    // .catch(err => console.log(err.message))

    axios.get('http://localhost:3000/students/'+this.$route.params.id)
    .then(res => this.student = res.data)


  }
}
</script>

<style>

</style>