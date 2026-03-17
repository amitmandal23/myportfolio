import React, { useEffect, useState } from 'react';
import api from '../../services/api';

const AdminMessages = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await api.get('/contacts');
      setContacts(response.data);
    } catch (error) {
      console.error('Failed to fetch messages', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Delete this message?')) {
      try {
        await api.delete(`/contacts/${id}`);
        setContacts(contacts.filter(c => c.id !== id));
      } catch (error) {
        console.error('Failed to delete message', error);
      }
    }
  };

  const handleMarkRead = async (id) => {
      // Logic for marking read could be adding a button or just viewing it. 
      // For now, let's just list them.
      // Or we can assume clicking it might open a modal?
      // Keeping it simple list for now.
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Messages</h2>
      
      <div className="bg-white rounded shadow overflow-hidden">
        <ul className="divide-y divide-gray-200">
          {contacts.map(contact => (
            <li key={contact.id} className={`p-6 hover:bg-gray-50 ${contact.is_read ? 'bg-white' : 'bg-blue-50'}`}>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{contact.name} <span className="text-sm text-gray-500 font-normal">&lt;{contact.email}&gt;</span></h3>
                  <p className="text-sm text-gray-500 mt-1">{new Date(contact.created_at).toLocaleString()}</p>
                  <p className="font-medium mt-2">{contact.subject || 'No Subject'}</p>
                  <p className="mt-2 text-gray-700 whitespace-pre-wrap">{contact.message}</p>
                </div>
                <button onClick={() => handleDelete(contact.id)} className="text-red-500 hover:text-red-700 ml-4">
                  Delete
                </button>
              </div>
            </li>
          ))}
          {contacts.length === 0 && (
            <li className="p-6 text-center text-gray-500">No messages yet.</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default AdminMessages;
