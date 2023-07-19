const URL = 'https://pixabay.com/api/';
const key = '36775018-abad017b89dacc6f8ffcc7875';

const getImages = (data) => {
    fetch(`${URL}/?${key}&q`)
    .then((res) => {
        res.json(console.log())
       
    })
}

getImages('data')