var url = 'https://zoomy.jimmyganteng.com/';
const move = async (direction) => {
  const sensitivity = document.getElementById('sensitivity').value;
  fetch(`${url}move/${direction}?sensitivity=${sensitivity}`);
};

const speak = async () => {
  const text = document.getElementById('speak').value;
  fetch(`${url}speak?text=${text}`);
};

const updateSensitivity = (value) => {
  const sensitivityElement = document.getElementById('value');
  sensitivityElement.innerText = value; 
};

const checkServer = async () => {
  fetch(`${url}password?password=${password}`)
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        const serverIndicatorEl = document.getElementById('server');
        serverIndicatorEl.innerText = 'Server is online.'
      }
    }); 
};

checkServer();