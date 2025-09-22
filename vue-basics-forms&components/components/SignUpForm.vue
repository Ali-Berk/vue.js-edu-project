<template>
  <div>
    <form @submit.prevent="handleSubmit">
        <label>Email</label>
        <input type="Email" v-model="email" placeholder="example@hotmail.com" required>
        <label>Şifre</label>
        <input type="password" v-model="password" required>
        <label class="labelError" v-if="passwordError"> {{ passwordError }}</label>
        
        <label>Cinsiyet</label>
        <select v-model="gender">
            <option value="">Cinsiyetinizi Belirtiniz.</option>
            <option value="male">Erkek</option>
            <option value="female">Kadın</option>
        </select>
        <label>Bildiğiniz diller:</label>
        <input type="text" v-model="skill" @keyup.alt="(addSkill)">
        <div v-for="skilla in skills" :key="skilla">
            <span class="skill" @click="deleteSkill(skilla)">{{ skilla }}</span>
        </div>
        <div class="term">
            <input v-model="term" type="checkbox" required>
            <label>Kullanım koşullarını kabul ediniz.</label>

        </div>
        <div class="btnDiv"><button>Kaydol</button></div>
    </form>
    </div>   
  </template>

<script>

export default {
  name: 'SignUpForm',
  components: {
  },
  data(){
      return{
          email:'',
          password:'',
          gender:'',
          term:false,
          skill:'',
          skills:[],
          passwordError:null,
        }
    },
    methods:
    {
        addSkill(e){
            if (e.key == "," && this.skill)
            {
                if(this.skills.includes(this.skill)){
                    return
                }
                this.skills.push(this.skill);
                this.skill = "";
            }
        },
        deleteSkill(skill){
            if(this.skills.includes(skill))
            {
                this.skills.pop(skill);
            }
            else{
                console.log("nonono")
            }
        },
        handleSubmit(){
            this.passwordError = this.password.length > 5 ? '' : "Minimum 6 karakterli bir şifre giriniz."
            if(this.passwordError == '')
            {
                console.log('Email', this.email);
                console.log('Şifre', this.password);
                console.log('Cinsiyet', this.gender);
                console.log('Term', this.term);
                console.log('Diller', this.skills);
            }


        }
    }
}

</script>

<style>
    form{
        max-width: 450px;
        width: 100%;
        background: antiquewhite;
        padding: 40px;
        border-radius: 20px;
        text-align: left;
        margin: 40px auto;
    }
    input, select{
        display: block;
        width: 100%;
        padding: 10px 8px;
        border-radius: 20px;
        border: none;
        outline: none;
        background: #fff;
    }
    label{
        display: block;
        margin:10px;
        font-size: 15px;
        font-weight: bold;
    }
    .term{
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content:start;
    }
    .term>input{
        width: 16px;
    }

    button{
        background: lightgreen;
        padding: 10px 20px;
        border: none;
        font-size: 18px;
        border-radius: 20px;
    }
    .skill{
        background: #fff;
        border-radius: 20px;
        padding: 10px;
        display: inline-block;
        margin: 5px 0px;
        cursor: pointer;
        font-weight: bold;
        letter-spacing: 1px;
    }
    .labelError{
        display: block;
        background: rgba(233, 63, 63, 0.733);
        border-radius: 10px;
        padding: 10px;
        color: rgb(85, 75, 75);
    }

</style>
