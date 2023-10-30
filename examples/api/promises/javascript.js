document.addEventListener('DOMContentLoaded', function() {
  const turnRedBtn = document.getElementById('turn-red-btn');
  turnRedBtn.onclick = () => {
    console.log('Here we go...');
    turnRed().then(
      function(result) {
        console.log(result);
      },
      function(error) {
        console.log(error.message);
      }
    );
    console.log('All done!')
  }
});

const turnRed = () => {
  return new Promise(function(resolve, reject) {
    const title = document.getElementById('title');

    if(!title.classList.contains('bg-red')) {
      title.classList.remove('bg-info');
      title.classList.add('bg-red');
      resolve('Success! It is red now');
    }
    else {
      reject(new Error('Already red'));
    }
  });
}
