const contentDiv = document.getElementById('content');

categories.forEach(category => {
    // Создаем элементы
    const categoryDiv = document.createElement('div');
    categoryDiv.classList.add('category-item'); // добавляем класс для стилизации (см. style.css)

    const title = document.createElement('h2');
    title.textContent = category.name;

    const link = document.createElement('a')
    link.href = category.url
    link.textContent = 'Перейти на страницу'



    const paragraph = document.createElement('p');
    paragraph.textContent = `ID: ${category.id}`;

    if (category.parent_id) {
        paragraph.textContent += `, Parent ID: ${category.parent_id}`
    }


    // Добавляем элементы в div категории
    categoryDiv.appendChild(title);
    categoryDiv.appendChild(link)
    categoryDiv.appendChild(paragraph);

    // Добавляем div категории в основной контейнер
    contentDiv.appendChild(categoryDiv);
});


