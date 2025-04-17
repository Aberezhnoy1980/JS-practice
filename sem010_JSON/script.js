const objStr = JSON.stringify(data);

const divEl = document.createElement('div');
const bodyEl = document.querySelector('body');
const scriptEl = document.querySelector('script');
bodyEl.insertBefore(divEl, scriptEl);

const parseData = JSON.parse(objStr);
const linkArr = parseData.message;

/*
for (let i = 0; i < linkArr.length; i++) {
    const linkEl = document.createElement('a');
    linkEl.href = linkArr[i];
    linkEl.textContent = `Dogy number ${i}`;
    linkEl.style.display = 'block';
    divEl.appendChild(linkEl);
}
*/
let cnt = 0;
parseData.message.forEach(link => {
    const linkEl = document.createElement('a');
    linkEl.href = link;
    linkEl.textContent = `Dogy number ${++cnt}`;
    linkEl.style.display = 'block';
    divEl.appendChild(linkEl);
});

const div2El = document.createElement('div');
div2El.style.display = 'flex';
div2El.style.flexDirection = 'column';
div2El.style.gap = '10px';
bodyEl.insertBefore(div2El, scriptEl);

linkArr.forEach(link => {
    div2El.insertAdjacentHTML('beforeend', `
        <figure>
            <img src="${link}" alt="dog"/>
            <figcaption>Этого песика зовут ${link.split('breeds')[1].split('/')[1]}</figcaption>
        </figure>
        `
    );
});

const url = 'https://jsonplaceholder.typicode.com/users';

async function getData(url) {
    const response = await fetch(url);
    const jsonData = await response.json();
    return jsonData;
}

try {
    const userData = await getData(url);
    console.log(userData);
    userData.forEach(user => {
        div2El.insertAdjacentHTML('beforeend', `
            <h2>Name: ${user.name}</h2>
            <p>Email: ${user.email}</p>
            `
        );
    });
} catch (error) {
    console.log(error.message);
}

