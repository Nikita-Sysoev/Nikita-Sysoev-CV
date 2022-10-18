window.onload = function(){
  let elements = document.getElementsByClassName('progress-bar');
  elements[0].getAttribute('title')

  for(let i = 0; i < elements.length; i++){
    let div = document.createElement('div');
    div.style.width = elements[i].getAttribute('title');
    elements[i].append(div);
  }
}