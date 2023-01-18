const blogButton = document.querySelector(".blog__button");
let blogIndex = 1;

function addBlogCard(index) {
        const blogList = document.querySelector('.blog__list');

        const blogCard = document.createElement('div');
        blogCard.className = 'blog__card';

        const blogImage = document.createElement('img');
        blogImage.src = './images/blog-' + index + '.png';

        const blogDesc = document.createElement('p');
        blogDesc.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temp incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.";

        const blogDate = document.createElement('span');
        blogDate.textContent = 'September 10';

        blogCard.append(blogImage, blogDesc, blogDate);
        blogList.append(blogCard);
}

blogButton.addEventListener('click', () => {
    if(blogIndex < 3 && window.innerWidth <= 700) {
        blogIndex++;
        addBlogCard(blogIndex);
        if(blogIndex === 3) {
            blogButton.style.display = "none";
        }
    }
})

const menu = document.querySelector('.header__menu');
const menuButton = document.querySelector('.header__menu-button');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

if(window.innerWidth >= 700) {
    menu.classList.remove('hidden');
    addBlogCard(2);
    addBlogCard(3);
}