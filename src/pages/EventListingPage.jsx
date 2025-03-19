import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCalendar, FaMapMarkerAlt, FaPlus } from 'react-icons/fa';
import Notification from '../components/Notification';

function EventListingPage() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Interfaith Dialog',
      date: '2025-03-25',
      location: 'Community Center',
      category: 'Religious',
      description: 'A peaceful discussion among different faith communities.'
    },
    {
      id: 2,
      title: 'Charity Food Drive',
      date: '2025-04-01',
      location: 'Local Food Bank',
      category: 'Charity',
      description: 'Help collect and distribute food to those in need.'
    },
    {
      id: 3,
      title: 'Art Exhibition',
      date: '2025-04-15',
      location: 'City Art Gallery',
      category: 'Cultural',
      description: 'Showcasing works from local artists across various mediums.'
    },
    {
      id: 4,
      title: 'Community Cleanup',
      date: '2025-04-22',
      location: 'Riverside Park',
      category: 'Environment',
      description: 'Join us in cleaning up the park for Earth Day.'
    },
    {
      id: 5,
      title: 'Tech Conference',
      date: '2025-05-05',
      location: 'Tech Hub Center',
      category: 'Education',
      description: 'A day of engaging talks and workshops on emerging technologies.'
    },
    {
      id: 6,
      title: 'Local Cricket Tournament',
      date: '2025-05-15',
      location: 'City Stadium',
      category: 'Sports',
      description: 'A thrilling Cricket tournament featuring local teams battling for glory.'
    }

  ]);

  const [filter, setFilter] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    location: '',
    category: '',
    description: ''
  });

  const [notification, setNotification] = useState({
    show: false,
    message: '',
    type: 'success'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setEvents([...events, { ...newEvent, id: events.length + 1 }]);
    setNewEvent({ title: '', date: '', location: '', category: '', description: '' });
    setShowForm(false);
    setNotification({
      show: true,
      message: 'Event created successfully!',
      type: 'success'
    });
    setTimeout(() => {
      setNotification({ ...notification, show: false });
    }, 3000);
  };

  const filteredEvents = filter
    ? events.filter(event => event.category === filter)
    : events;

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 sm:mb-0">Events</h1>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary px-4 py-2"
            >
              <option value="">All Categories</option>
              <option value="Religious">Religious</option>
              <option value="Social">Social</option>
              <option value="Charity">Charity</option>
              <option value="Sports">Sports</option>
              <option value="Cultural">Cultural</option>
              <option value="Education">Education</option>
            </select>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowForm(!showForm)}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <FaPlus className="mr-2" /> Add Event
            </motion.button>
          </div>
        </div>

        {showForm && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-6 bg-white rounded-lg shadow-md w-full"
          >
            <h2 className="text-xl font-semibold mb-4">Add New Event</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Event Title"
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary px-4 py-2"
                  required
                />
                <input
                  type="date"
                  value={newEvent.date}
                  onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary px-4 py-2"
                  required
                />
                <input
                  type="text"
                  placeholder="Location"
                  value={newEvent.location}
                  onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary px-4 py-2"
                  required
                />
                <select
                  value={newEvent.category}
                  onChange={(e) => setNewEvent({ ...newEvent, category: e.target.value })}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary px-4 py-2"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Religious">Religious</option>
              <option value="Social">Social</option>
              <option value="Charity">Charity</option>
              <option value="Sports">Sports</option>
              <option value="Cultural">Cultural</option>
              <option value="Education">Education</option>
                </select>
              </div>
              <textarea
                placeholder="Event Description"
                value={newEvent.description}
                onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary px-4 py-2"
                rows="3"
                required
              />
              <div className="flex justify-end">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-green-700"
                >
                  Create Event
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                <div className="flex items-center text-gray-500 mb-2">
                  <FaCalendar className="mr-2" />
                  {event.date}
                </div>
                <div className="flex items-center text-gray-500 mb-4">
                  <FaMapMarkerAlt className="mr-2" />
                  {event.location}
                </div>
                <p className="text-gray-600">{event.description}</p>
                <div className="mt-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {event.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Notification
        show={notification.show}
        message={notification.message}
        type={notification.type}
        onClose={() => setNotification({ ...notification, show: false })}
      />
    </div>
  );
}

export default EventListingPage;
