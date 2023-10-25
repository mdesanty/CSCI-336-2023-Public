document.addEventListener('DOMContentLoaded', function () {
  const courseSelect = document.getElementById('course-select');
  courseSelect.onchange = () => {
    const defaultOption = document.getElementById('default-course-option');

    if(defaultOption)
      courseSelect.removeChild(defaultOption);
  };

  const submitBtn = document.getElementById('submit-btn');
  submitBtn.onclick = handleSubmit;
});

function handleSubmit(event) {
  event.preventDefault();
  event.stopPropagation();

  const form = document.getElementById('my-form');

  if (form.checkValidity()) {
    console.log(`Username: ${document.getElementById('username-input').value}`);
    console.log(`Email: ${document.getElementById('email-input').value}`);
    console.log(`First name: ${document.getElementById('first-name-input').value}`);
    console.log(`Last name: ${document.getElementById('last-name-input').value}`);
    console.log(`Course: ${document.getElementById('course-select').value}`);
    console.log(`Love it: ${document.getElementById('love-it-input').value}`);

    const attendeeType = document.querySelector('input[name="attendeeType"]:checked');
    if (attendeeType)
      console.log(`Attendee type: ${attendeeType.value}`);

    const rawData = new FormData(form);
    const data = Object.fromEntries(rawData.entries());

    console.log(data);
  }
  else {
    form.classList.add('was-validated');
  }


}