const app = new Vue({
    el: '#root',
    data:{
        conversation: '',
        currentSpeaker: 0,  //index-contact
        searchText: '',     
        contacts: [
            {
                name: 'Fred',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Mark',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Jack',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Leo',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        
    },
    methods:{
         /** select user to chat with */
        selectPerson(index){
            this.currentSpeaker = index
         },
        //  send a message
        sendMessage(){
            //   select the messages of the current active contact
            this.contacts[this.currentSpeaker].messages.push({
                // current daye and time using dayjs
                date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                text: this.conversation,
                status: 'sent'

            });
            this.conversation= ''
            //   RECEIVING AND AUTOMATIC ANSWER OF OKAY
            this.answerPc();
          
       },
    //    function to generate an automatic answer after 1sec
       answerPc() {
           setTimeout(() => {
                this.contacts[this.currentSpeaker].messages.push({
                    date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    text: 'Okay😉👌',
                    status: 'received'
                });
           }, 1000)
       },
       
        search(){
            // milestone4_search contact to chat usin methods .forEach and conditional statements
            this.contacts.forEach((contact)=> {
                    let contactName = contact.name.toLowerCase();
                    let searchedName = this.searchText.toLowerCase();
                    if(contactName.includes(searchedName)) {
                        contact.visible = true;
                    }else{
                        contact.visible = false;
                    }
            });
        }
    }
})