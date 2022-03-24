<template>
  <CFooter :fixed="false">
    <div>
      <a href="https://facebook.com/mamunur6286" target="_blank">Md Mamun</a>
      <span class="ml-1">&copy; {{new Date().getFullYear()}} Intelligent POS.</span>
    </div>
    <div class="mfs-auto">
      <span class="mr-1" target="_blank">Powered by</span>
      <a href="https://extratechbd.com"> Extra Tech BD.</a>
    </div>
  </CFooter>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>
