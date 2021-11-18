<template>
  <div class="container">
    <Header
      title="Pttrn Translator"
    />
    <PatternTranslator />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import PatternTranslator from './components/PatternTranslator'

export default {
  name: 'App',
  components: {
    Header,
    PatternTranslator,
    Footer,
  },
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Poppins', sans-serif;
  background-color: lighgray;
}
.container {
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  /* padding: 30px; */
  border-radius: 5px;
}
.btn {
  display: inline-block;
  background: #1F1D36;
  color: #E9A6A6;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
}

</style>
