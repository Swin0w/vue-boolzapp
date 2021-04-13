function init(){
  new Vue({
    el: "#app",
    data: {
      writeMessage: "",
      contactClick: 0,
      showChat: false,
      contacts: [
        {
          name: "Mamma",
          avatar: "img/user.svg",
          messages: [
            {
              date: "05/04/2021",
              text: "Ciao mamma, mi andresti a comprare degli Estathè perfavore?",
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
          avatar: "img/user.svg",
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
        },
        {
          name: "Alessia",
          avatar: "img/user.svg",
          messages: [
            {
              date: "12/07/2021",
              text: "Ciao cara, tutto bene?",
              status: "sent"
            },
            {
              date: "12/07/2021",
              text: "Ei ciao, tutto bene grazie tu?",
              status: "received"
            },
            {
              date: "12/07/2021",
              text: "Tutto bene grazie.",
              status: "sent"
            }
          ]
        },
      ]
    },
    methods: {
      // search: function() {
      //
      // },
      openChat: function(index) {
        console.log("ciao");
        this.showChat = true;
        this.contactClick = index;
      },
      addMessage: function(index) {
        console.log("Invio");
        const newMessage = {
          date: "12/07/2021",
          text: this.writeMessage,
          status: "sent"
        }
        this.contacts[this.contactClick].messages.push(newMessage);
      }
    }
  });
}
document.addEventListener("DOMContentLoaded", init);
