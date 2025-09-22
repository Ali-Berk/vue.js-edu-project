<template>
  <div>
    <studentNotes :students="students" @fonksiyon ="fonksiyon"/>
    <studentUpdateForm :students="students" @updateStudent="updateStudent"/>
  </div>
</template>

<script>
import studentNotes from './components/studentNotes.vue';
import studentUpdateForm from './components/studentUpdateForm.vue';

export default {
  name: 'App',
  emits:['fonksiyon'],
  components: { studentNotes, studentUpdateForm},
  data(){
    return{
       students:[
         {id:1,
         studentname:"Ali Berk",
         note:90,
         },
       ]
    }
  },
  methods:{
    updateStudent(newstudentObject){
        const index = this.students.findIndex(()=> this.students.id === newstudentObject.id)
        
        console.log(index);
        this.students[index] = {
          studentname: newstudentObject.studentname,
          note: newstudentObject.note
        };
      console.log(this.students);
      console.log("appe geldi");
      this.$emit('fonksiyon',this.students)
      new TrackEvent("updateStudent", { newstudentObject});
    },
    
  }
}
</script>

<style>

</style>
