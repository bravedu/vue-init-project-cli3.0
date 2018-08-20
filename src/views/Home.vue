<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
export default {
    name: "home",
    data(){
        return{
        }
    },
    mounted() {
        this.$pgObj.Ajax(
            {
                key : 'login',
                data : {

                },
                success : function () {

                },
            },
        );
    },
}
</script>
