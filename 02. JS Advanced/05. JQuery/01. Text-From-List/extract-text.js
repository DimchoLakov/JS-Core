function extractText() {
   let listItems = $('#items').children().toArray();
   let values = listItems.map(x => x.textContent);
   let result = values.join(', ');
   console.log(result);
   $('#result').append(result);
   BootstrapDialog.alert('Something!');
   BootstrapDialog.alert('I want banana!');
   BootstrapDialog.show({
      message: 'Hi Apple!'
   });
}
