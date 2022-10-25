const {createApp} = Vue;
createApp({
    data() {
        return{
            message: "Boolean, an intense experience to try!" ,
            warningMessage: "Attention! Bring with you psychotropic drugs! You will need it 😀",
            image: "img/imgboolean.jpeg",
            titleClass: "text-white text-center"
        }
    }

}).mount("#app");