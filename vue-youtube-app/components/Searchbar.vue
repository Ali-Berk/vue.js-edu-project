<template>
  <div>
    <form @submit.prevent="handleSubmit">
        <input type="text" v-model="searchTerm">
        <button>Ara</button>
    </form>
  </div>
</template>

<script>
export default {
    name:"Search_bar",
    data(){
        return{
            searchTerm:'',
        }
    },
    emits:['termChanged'],
    methods: {
        handleSubmit(){
            this.$emit('termChanged',this.searchTerm)
            this.searchTerm = ''
        }
    }
}
</script>

<style scoped>
form{
    display: flex;
    margin-top:20px ;
}
form>*{
    padding: 10px;
}
input{
    width: 85%;
    border-radius:20px;
}
button{
    width:15%;
    margin-left: 20px;
    border: none;
    background: greenyellow;
    color: white;
    font-size: 18px;
    border-radius: 20px;
    cursor: pointer;
}
</style>