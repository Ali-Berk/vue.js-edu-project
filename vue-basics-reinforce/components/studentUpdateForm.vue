<template>
  <div>
    <div v-for="student in students" :key="student.id">

        <form @submit.prevent="updateStudent">
            <label for="">Öğrenci Notu: {{ student.note }}</label>
            <input type="text" placeholder="güncellenmesini istediğiniz değer." v-model="enteredStudentNote">
            <label > Öğrenci adı soyadı: {{ student.studentname }}</label>
            <input type="text" placeholder="güncellenmesini istediğiniz değer." v-model="enteredStudentName">
            <button>Güncelle</button>
        </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'studentUpdateForm',
  props:['students'],
  emits:['updateStudent'],
  components: {
  },
  data(){
    return{
        enteredStudentName:'',
        enteredStudentNote:'',
    }
  },
  methods:{
    updateStudent(){
        const newstudentObject={
            studentname:this.enteredStudentName,
            note:this.enteredStudentNote,
        }
        this.$emit('updateStudent',newstudentObject);
    }
  }
}
</script>

<style>

</style>
