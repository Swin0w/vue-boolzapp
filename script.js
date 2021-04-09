function init(){
  new Vue({
    el: "#navContacts",
    data: {
      contacs: [
      {
        nome: "",
        avatar: "",
        messages: [
          {
            date: new Date(2021, 12, 7),
            text:"",
            status: ""
          }
        ]
      }
    }
  });
}
