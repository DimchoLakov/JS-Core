function extractText() {
   let result = $('#items').children().toArray().map(x => x.textContent).join(', ');
   $('#result').text(result);
}
