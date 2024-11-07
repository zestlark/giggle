import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
    setupNodeEvents(on, config) {
      on('task', {
        myLog(message) {
          console.log(message)
          return null
        }
        ,
        async getData(url) {
          const data = await fetch(url)
          const jsonData = await data.json()
          return jsonData 
        }
      })
    }
  },
});
