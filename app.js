let deferredPrompt;

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(() => console.log('Service Worker Registered'))
    .catch(err => console.error('Service Worker Error:', err));
}

// Dengarkan event 'beforeinstallprompt'
window.addEventListener('beforeinstallprompt', (e) => {
  // Mencegah browser langsung menampilkan prompt
  e.preventDefault();
  deferredPrompt = e;

  // Tampilkan tombol Install
  const installButton = document.createElement('button');
  installButton.textContent = 'Install App';
  installButton.style.position = 'fixed';
  installButton.style.bottom = '20px';
  installButton.style.right = '20px';
  installButton.style.padding = '10px 20px';
  installButton.style.backgroundColor = '#2563eb';
  installButton.style.color = '#fff';
  installButton.style.border = 'none';
  installButton.style.borderRadius = '5px';
  installButton.style.cursor = 'pointer';

  document.body.appendChild(installButton);

  installButton.addEventListener('click', () => {
    installButton.remove();

    // Tampilkan prompt pemasangan
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(choiceResult => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      deferredPrompt = null;
    });
  });
});


if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('Service Worker registered:', registration);
        })
        .catch(err => {
          console.error('Service Worker registration failed:', err);
        });
    });
  }  
  // Menambahkan notifikasi push sederhana
  if ('Notification' in window && 'serviceWorker' in navigator) {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        navigator.serviceWorker.ready.then(registration => {
          registration.showNotification('Hello from PWA!', {
            body: 'This is a push notification example.',
            icon: '/images/icons/icon-192x192.png'
          });
        });
      }
    });
  }

  function showNotification() {
    if ('Notification' in window && Notification.permission === 'granted') {
      navigator.serviceWorker.ready.then(registration => {
        registration.showNotification('Hi there!', {
          body: 'Thanks for trying this PWA!',
          icon: '/images/icons/icon-192x192.png',
        });
      });
    } else {
      alert('Please enable notifications to see this feature!');
    }
  }
  
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
      .then(() => console.log('Service Worker Registered'))
      .catch(err => console.error('Service Worker registration failed:', err));
  }
  
  