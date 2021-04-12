function init(){
  new Vue({
    el: "#navContacts",
    data: {
      contacts: [
        {
          name: "Mamma",
          avatar: "img/user.svg",
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
          name: "Shöjo",
          avatar: "img/user.svg",
          messages: [
            {
              date: "12/07/2021",
              text: "Ciao cara, tutto bene? Ti ho rinominata Shöjo",
              status: "sent"
            },
            {
              date: "12/07/2021",
              text: "Ei ciao, tutto bene grazie tu? Cosa vuol dire?",
              status: "received"
            },
            {
              date: "12/07/2021",
              text: "Tutto bene grazie. Shöjo è una parola giapponese che significa appunto cara o roba simile",
              status: "sent"
            },
            {
              date: "12/07/2021",
              text: "Uh grazie, che carino",
              status: "received"
            },
          ]
        },
      ]
    },
    methods: {
      // search: function() {
      //
      // },
      openChat: function() {
        $(".contact").click(function() {
          $(".contact").setAttribute("cursor", "pointer");
          console.log("ciao");
          $("#default").setAttribute("display", "none");
        })
      },
    }
  });
}
document.addEventListener("DOMContentLoaded", init);
