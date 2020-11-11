// definire una lista di todo e stamparli in pagina in un elenco.
// predisporre un input testuale per aggiungere un nuovo todo: al click di un pulsante, il testo inserito nell'input viene aggiunto alla lista dei todo
// al click su un item della lista, il todo viene rimosso

var app = new Vue ({

    el: '#root',

    data: {

        aggiunta: '',

        lista: ['Pane', 'Latte', 'Mozzarella', 'Pasta', 'Carne']
    },

    methods: {

        aggiunta_elemento() {

            this.lista.push(this.aggiunta);
            this.aggiunta = '';
        },

        rimuovi_elemento(indice) {

            this.lista.splice(indice, 1);
        }
    }
});
