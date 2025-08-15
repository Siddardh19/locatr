const socket = io();

if(navigator.geolocation) {
    navigator.geolocation.watchPosition((position) => {
          const {latitude, longitute} = position.coords;
          socket.emit("send-location", { latitude, longitute});
        },
        (error) => {
            console.error(error);
        },
        {
            enableHighAccuracy: true,
            maximumAge: 0,
            timeout: 2500,
        }
    );
}

const map = L.map("map").setView([0,0], 10);

L.titleLayer("https://a.title.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

