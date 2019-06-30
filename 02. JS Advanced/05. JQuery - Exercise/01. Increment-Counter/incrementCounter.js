function increment(selector) {
    let $textarea = $('<textarea>');
    $textarea.addClass('counter');
    $textarea.val(0);
    $textarea.attr('disabled', 'true');

    let $incrementBtn = $('<button>');
    $incrementBtn.addClass('btn');
    $incrementBtn.attr('id', 'incrementBtn');
    $incrementBtn.text('Increment');

    let $addBtn = $('<button>');
    $addBtn.addClass('btn');
    $addBtn.attr('id', 'addBtn');
    $addBtn.text('Add');

    let $ul = $('<ul>');
    $ul.addClass('results');

    let result = $(`${selector}`);
    result.append($textarea);
    result.append($incrementBtn);
    result.append($addBtn)
    result.append($ul);

    $incrementBtn.on('click', function () {
        let currentVal = $textarea.val();
        $textarea.val(Number(currentVal) + 1);
    });

    $addBtn.on('click', function () {
       let $li = $('<li>').text($textarea.val().toString());
       $ul.append($li);
    });
}
