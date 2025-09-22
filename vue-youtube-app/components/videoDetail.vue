<template>
<section v-if="video">
    <div>
        <iframe :src="videoUrl"></iframe>
    </div>
    <div>
        <h4>{{video.snippet.title}}</h4>
        <p>{{video.snippet.description}}</p>
    </div>
</section>
</template>

<script>
export default {
    props:['video'],
    computed:{
        videoUrl(){
            return 'https://www.youtube.com/embed/' + this.video.id.videoId
        }
    }
}
</script>

<style scoped>
iframe{
    widows: 100%;
    height: 400px;
}
section{
    margin:10px;
    padding: 10px;
    border:solid 3px red;
    width:100%;
    flex: 2;
}
</style>