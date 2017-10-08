var contacts = [
    {
      id: 1,
      firstName: 'Jan',
      lastName: 'Nowak',
      email: 'jan.nowak@example.com',
    },
    {
      id: 2,
      firstName: 'Adam',
      lastName: 'Kowalski',
      email: 'adam.kowalski@example.com',
    },
    {
      id: 3,
      firstName: 'Zbigniew',
      lastName: 'Koziol',
      email: 'zbigniew.koziol@example.com',
    }
  ];
  
  var contactForm = {
    firstName: '',
    lastName: '',
    email: ''
  };

class App extends React.Component {
    render () {
        return 
          <div className={"app"}>
            <ContactForm contact={contactForm} />
            <Contacts items={contacts} />
          </div>

          /*
            React.createElement("div", {className: app},
            React.createElement(ContactForm, {contact: contactForm}),
            React.createElement(Contacts, {items: contacts})
          */
    }
};
