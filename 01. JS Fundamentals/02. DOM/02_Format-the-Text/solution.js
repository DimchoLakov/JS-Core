function solve() {
  let text = document.getElementById('input').textContent;
  let result = text.match(/[^\.!\?]+[\.!\?]+/g);
  let arr = Array.from(result);

  let output = document.getElementById('output');

  for (let i = 0; i < arr.length - 2; i += 3) {
      let p = document.createElement('p');
      p.textContent = arr[i] + arr[i + 1] + arr[i + 2];
      let temp = p.textContent;
      output.appendChild(p);
  }
  if (arr.length % 2 !== 0){
      let p = document.createElement('p');
      p.textContent = arr[arr.length - 1];
      output.appendChild(p);
  }
}