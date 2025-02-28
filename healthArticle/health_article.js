var xhr = new XMLHttpRequest();
var url = './health_article.json';

// Open an asynchronous GET request
xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function () {
    if (xhr.status === 200) {
        var articles = xhr.response.articles;
        var articlesDiv = document.getElementById('articles');

        articles.forEach(function(article) {
            var articleDiv = document.createElement('div');
            articleDiv.classList.add('article-item'); // Added valid class name

            var title = document.createElement('h2');
            title.textContent = article.title;

            var description = document.createElement('p');
            description.textContent = article.description;

            var waysHeader = document.createElement('h3');
            waysHeader.textContent = 'Ways to Achieve';

            var waysList = document.createElement('ul');
            article.ways_to_achieve.forEach(function(way) {
                var listItem = document.createElement('li');
                listItem.textContent = way;
                waysList.appendChild(listItem);
            });

            var benefitsHeader = document.createElement('h3'); // Fixed incorrect syntax
            benefitsHeader.textContent = 'Benefits:';

            var benefitsList = document.createElement('ul');
            article.benefits.forEach(function(benefit) { // Fixed typo 'benifits' -> 'benefits'
                var listItem = document.createElement('li');
                listItem.textContent = benefit;
                benefitsList.appendChild(listItem);
            });

            articleDiv.appendChild(title);
            articleDiv.appendChild(description);
            articleDiv.appendChild(waysHeader);
            articleDiv.appendChild(waysList);
            articleDiv.appendChild(benefitsHeader);
            articleDiv.appendChild(benefitsList);

            articlesDiv.appendChild(articleDiv);
        });
    } else {
        console.error('Failed to load articles:', xhr.statusText);
    }
};

// Send the request
xhr.send();
