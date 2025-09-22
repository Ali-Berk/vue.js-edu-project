<template>
  <div>
    <ul v-for="video in videos" :key="video.etag" class="videolist">
      <videoListItem :video="video" @videoSelect="onVideoSelect"/>

    </ul>
  </div>
</template>

<script>
import videoListItem from './videoListItem.vue'; 

export default {
    props:['videos'],
    emits:['videoSelect'],
    data(){
      return{
        dasdsa:this.videos.etag
      }
    },
    components:{
      videoListItem
    },
    methods:{
      onVideoSelect(video){
        this.$emit('videoSelect', video)
        console.log(video)
      }
    }
    
}
</script>

<style scoped>
.videolist{
  list-style-type:none ;
}
div{
  flex: 1;
}
</style>