const generateGreet = (name) => {
   return (hello) => {
     return `${hello}, ${name}`;
  }
};

const helloSvetlana = generateGreet('Svetlana');
helloSvetlana('Hi');
console.log(helloSvetlana('Привет'));
