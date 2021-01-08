let age = prompt('enter your age');
if (age > 18) {
  document.getElementById('content').innerHTML =
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/iwy-1uaActI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
} else {
  document.getElementById('content').innerText = 'Not Allow';
}
// condition