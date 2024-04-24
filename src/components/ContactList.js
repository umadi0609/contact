import React, { useState } from "react";
import ContactCard from "./ContactCard";
import UpdateContact from "./UpdateContact";

const ContactList = (props) => {
    const [isUpdating, setIsUpdating] = useState(false);
    const [selectedContact, setSelectedContact] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };

    const updateContactHandler = (contact) => {
        setIsUpdating(true);
        setSelectedContact(contact);
    };

    const filteredContacts = props.contacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const renderContactList = filteredContacts.map((contact) => {
        return (
            <div key={contact.id}>
                {isUpdating && selectedContact && selectedContact.id === contact.id ? (
                    <UpdateContact
                        contact={selectedContact}
                        onUpdateContact={(updatedContact) => {
                            props.updateContactHandler(updatedContact);
                            setIsUpdating(false);
                            setSelectedContact(null);
                        }}
                    />
                ) : (
                    <ContactCard
                        contact={contact}
                        deleteHandler={deleteContactHandler}
                        updateHandler={updateContactHandler}
                    />
                )}
            </div>
        );
    });

    return (
        <div>
            <h3>Contact-List</h3>
            <div>
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <div className="ui celled list">{renderContactList}</div>
            </div>
        </div>

    );
};

export default ContactList;
