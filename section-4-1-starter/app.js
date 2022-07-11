let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!",
    };
  },
  template: `{{message}}`,
});
vm.mount("#app");

// setTimeout(() => {
//   vm.mount('#app')
// }, 2000)

// Before the vue lifecycle may begin, the instance has to be created - Vue.createApp().mount()

// 1. Adds Reactivity to your data. Initialize data and methods. This is where it begins to watch your data for any changes.
// Before this happens you have the option to run some code using the beforeCreate() lifecycle hook. This means you will not have access to any of its data or methods

// 2. After initialiation, the instance is created. we are provided another lifecycle hook created()

// 3. After the Vue instance is created it will start looking for a template. This starts once we call the mount() method on the application. Vue will scan the template code and begin processing it. aka: compiling. This is where vue will scan for directives, expressions, events, and bindings within the template
// Once the template is compiled. Vue will replace the content inside the element we slected witht the mount() method with the compiled template. here we have access to the beforeMount() lifecycle hook

// After the mounting phase is complete, the application will listen for any data changes and apply them to the template. We have access to two hooks during this process. The beforeUpdate() hook gets triggered after the data changes but before the change is reflected on the template. The updated() hook is available after the template was updated with the updated data. These two are mainly used for debugging
