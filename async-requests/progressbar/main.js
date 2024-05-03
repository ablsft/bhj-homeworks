const form = document.forms.form;
const progress = document.getElementById('progress');

document.getElementById("file").onchange = function() {
  progress.value = 0;
  const fileDesc = document.querySelector(".input__wrapper-desc");
  let fileName = this.value.split("\\");
  fileName = fileName[fileName.length - 1];
  fileDesc.textContent = fileName;
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const sendFormRequest = new XMLHttpRequest();

  sendFormRequest.upload.onprogress = function(e) {
    progress.value = e.loaded / e.total;
  }

  sendFormRequest.open('POST', form.action);
  const formData = new FormData(form);
  sendFormRequest.send(formData);
})
