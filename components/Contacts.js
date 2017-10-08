class Contacts extends React.Component {
   propTypes = {
        items: PropTypes.array.isRequired,
    }
    render () {
        var contacts = this.props.items.map(function(contact) {
            return <Contact item={"contact"} key={"contact.id"} />
        });

        return <ul className={"contactsList"}>contacts</ul>
    }
};