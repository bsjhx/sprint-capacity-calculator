<template>
  <div>
    <div class="buttons">
        <button class="button is-primary">Primary</button>
        <button class="button is-link">Link</button>
    </div>

    <div class="buttons">
        <button class="button is-info">Info</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
