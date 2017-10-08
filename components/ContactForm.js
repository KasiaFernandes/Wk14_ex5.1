class ContactForm extends React.Component {
    propTypes = {
        contact: PropTypes.object.isRequired
    }
    render() {
        return 
            <form className={"contactForm"}>
                <input type={"text"} placeholder={"Imię"} value={this.props.contact.firstName}/>
                <input type={"text"} placeholder={"Nazwisko"} value={this.props.contact.lastName}/>
                <input type={"email"} placeholder={"Email"} value={this.props.contact.email}/>
                <button type={"submit"}>Dodaj kontakt</button>
            </form>
    }
}