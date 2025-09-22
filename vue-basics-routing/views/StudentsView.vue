<template>
  <div class="home">
    <h1>Öğrenciler</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quibusdam quia cupiditate expedita dolore optio rerum enim! Numquam soluta reprehenderit et, sed excepturi at explicabo ipsa sit harum dicta provident!</p>
    <div v-for="student in students" :key="student.id">
        <router-link :to="{name:'studentDetailView',params:{ id:student.id }}">
            <h3>{{ student.name }}</h3>
        </router-link>
    </div> 
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'StudentsView',
  components: {
    
  },
  data() {
    return {
        students: [

        ]
    }
  },
  mounted(){
    // fetch('http://localhost:3000/students').then(res => res.json()).then(data => this.students =data)
    // .catch(err => console.log(err.message))
    axios.get('http://localhost:3000/students')
    .then( res => this.students = res.data)
    .catch(err => console.log(err.message))
  }
}
</script>
