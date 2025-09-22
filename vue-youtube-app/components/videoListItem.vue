<template>
  <li @click="onVideoSelect">
    <img :src="video.snippet.thumbnails.medium.url" alt="">
    <h3>{{video.snippet.title}}</h3>
    <p>{{video.snippet.description}}</p>
  </li>
</template>

<script>

export default {
  props: ['video'],
  emits:['videoSelect'],
  methods:{
    onVideoSelect(){
      this.$emit('videoSelect', this.video)
    }
  }

}
</script>

<style scoped>
  li{
    list-style: none;
    display: flex;
    border: solid 3px red;
    border-radius: 30px 0px 0px 30px;
    margin: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    align-items: center;  
    }
    li>*{
      margin-left: 10px;
    }
    img{
    border-radius: 28px 0px 0px 28px;
    margin: 0px;
    }
</style>

