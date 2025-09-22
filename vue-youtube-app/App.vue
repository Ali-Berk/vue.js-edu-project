<template>
<div class="container">
    <h1>Youtube</h1>
    <searchbar @termChanged="SearchTerm"></searchbar>
    <div class="detailDiv">
      <videoDetail :video="selectedVideo"/>
      <videoList @videoSelect="onVideoSelect" :videos="videos"></videoList>
    </div>
</div>
</template>

<script>
import Searchbar from './components/Searchbar.vue'
import videoList from './components/videoList.vue'
import videoDetail from './components/videoDetail.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Searchbar,
    videoList,
    videoDetail,
  },
  data(){
    return{
      videos:[],
      selectedVideo:null,
    }
  },
  methods: {
    onVideoSelect(video){
      this.selectedVideo = video
    },
    SearchTerm(searchTerm){

      axios.get('https://www.googleapis.com/youtube/v3/search',
        {
          params:{
          part:'snippet',
          type:'video',
          key:"AIzaSyBh9gfjwses5H2Q7UtfzAC3cd8WRAKwKgM",
          q:searchTerm,}
        }
      )
      .then(res => {this.videos = res.data.items})
      .catch(err => console.log(err.message))
    }
  }
}
</script>

<style>
*{
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container{
  max-width: 1200px;
  width: 100%;
  margin: 50px auto;
}
.detailDiv{
  display:flex;
}
</style>
