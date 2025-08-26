// This service worker runs in the background to handle web push notifications.
// Even if the user's tab is closed, this script can receive a push and show a notification.

self.addEventListener('push', function(event) {
  // The data sent from the server is in event.data.
  const data = event.data.json();

  const title = data.title || 'LifeBridge Reminder';
  const options = {
    body: data.body,
    icon: '/icons/Icon-192.png', // Uses the PWA icon
    badge: '/icons/Icon-192.png'
  };

  // The waitUntil() method ensures the service worker doesn't terminate
  // before the notification has been displayed.
  event.waitUntil(self.registration.showNotification(title, options));
});
