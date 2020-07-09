function solve() {

    let finishTask = function (event) {

        event.preventDefault();

        let currentArticle = event.target.parentNode.parentNode;
        let divFlex = currentArticle.querySelector('div.flex');

        event.target.parentNode.parentNode.parentNode.removeChild(currentArticle);

        currentArticle.removeChild(divFlex);

        let completedDiv = document.querySelector('div.wrapper section:nth-child(4) div:nth-child(2)');
        completedDiv.appendChild(currentArticle);
    };

    let deleteTask = function (event) {

        event.preventDefault();

        let currentArticle = event.target.parentNode.parentNode;
        event.target.parentNode.parentNode.parentNode.removeChild(currentArticle);

    };

    let startTask = function (event) {
        event.preventDefault();

        let currentArticle = event.target.parentNode.parentNode;
        event.target.parentNode.parentNode.parentNode.removeChild(currentArticle);

        let divFlex = currentArticle.querySelector('div.flex');
        let greenButton = divFlex.querySelector('button.green');
        divFlex.removeChild(greenButton);

        let finishButton = document.createElement('button');
        finishButton.classList.add('orange');
        finishButton.textContent = 'Finish';

        finishButton.addEventListener('click', finishTask);

        divFlex.appendChild(finishButton);

        let inProgressDiv = document.querySelector('div.wrapper section:nth-child(3) div:nth-child(2)');
        inProgressDiv.appendChild(currentArticle);
    };

    let addTask = function (event) {
        event.preventDefault();

        let task = document.querySelector('#task').value;
        let description = document.querySelector('#description').value;
        let date = document.querySelector('#date').value;

        if (task === '' ||
            task === undefined ||
            task === null ||
            description === '' ||
            description === undefined ||
            description === null ||
            date === '' ||
            date === undefined ||
            date === null) {
            return false;
        }

        let article = document.createElement('article');

        let h3 = document.createElement('h3');
        h3.textContent = task;

        let pDescription = document.createElement('p');
        pDescription.textContent = `Description: ${description}`;

        let pDate = document.createElement('p');
        pDate.textContent = `Due Date: ${date}`;

        let div = document.createElement('div');
        div.classList.add('flex');

        let startButton = document.createElement('button');
        startButton.classList.add('green');
        startButton.textContent = 'Start';
        startButton.addEventListener('click', startTask);

        let deleteButton = document.createElement('button');
        deleteButton.classList.add('red');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', deleteTask);

        div.appendChild(startButton);
        div.appendChild(deleteButton);

        article.appendChild(h3);
        article.appendChild(pDescription);
        article.appendChild(pDate);
        article.appendChild(div);

        let openDiv = document.querySelector('div.wrapper section:nth-child(2) div:nth-child(2)');
        openDiv.appendChild(article);

        document.querySelector('#task').value = '';
        document.querySelector('#description').value = '';
        document.querySelector('#date').value = '';
    };

    let addButton = document.querySelector('#add');
    addButton.addEventListener('click', addTask);

}