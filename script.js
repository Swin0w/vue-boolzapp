function init(){
  new Vue({
    el: "#navContacts",
    data: {
      contacts: [
        {
          name: "Mamma",
          avatar: "",
          messages: [
            {
              date: "05/04/2021",
              text: "Oi ma, mi vai a comprare degli Estathè?",
              status: "sent"

            },
            {
              date: "05/04/2021",
              text: "Ok va bene",
              status: "received"
            },
            {
              date: "05/04/2021",
              text: "Grazie mille",
              status: "sent"
            }
          ]
        },
        {
          name: "Gabriele",
          avatar: "",
          messages: [
            {
              date: "07/04/2021",
              text: "Oi ciao Luca, ti va se ci incontriamo?",
              status: "received"
            },
            {
              date: "07/04/2021",
              text: "Si va benessimo, vieni da me per le 16.30",
              status: "sent"
            }
          ]
        }
      ]
    },
    methods: {
      openChat: function() {

      }
    }
  });
}
document.addEventListener("DOMContentLoaded", init);
