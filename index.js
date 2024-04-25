const footerParagraph = document.getElementById('footer-paragraph');
const currentDate = new Date().getFullYear();
footerParagraph.textContent = `Created by \xA9Simphiwe ${currentDate}.`;

const bodyElement = document.querySelector('body');
const container = document.getElementById('container');

bodyElement.addEventListener('mousemove', (e) => {
  const xPosition = e.offsetX;
  const yPosition = e.offsetY;

  const spanElement = document.createElement('span');
  spanElement.style.left = xPosition + 'px';
  spanElement.style.top = yPosition + 'px';

  const randomHeartSize = Math.random() * 100;
  spanElement.style.width = randomHeartSize + 'px';
  spanElement.style.height = randomHeartSize + 'px';

  container.appendChild(spanElement);
  bodyElement.appendChild(spanElement);

  setTimeout(() => {
    spanElement.remove();
  }, 1000);
});
