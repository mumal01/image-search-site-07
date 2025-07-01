// const apiKey = 'V4jHZSLujbG5fMKzcwUrobf7-mxx1kCFTCzwVlskj9U';
// const apiUrl = 'https://api.unsplash.com/photos';
// const error = document.getElementById('error');

// let currentPage =1;
// let currentQuery = '';

// const searchImages = () =>{
//     const query = document.getElementById('searchInput').value.trim();
//     if(!query){
//         error.textContent = 'Please enter a search term';
//         return;
//     }

//     error.textContent = '';
//     currentQuery =query;
//     currentPage = 1;
//     document.getElementById('image-container').innerHTML = '';
//     fetchImages();

// };

// const loadMoreImages = () =>{
//     currentPage++;
//     fetchImages();
// };

// const fetchImages = () =>{
//     fetch(${apiUrl}?query=${currentQuery}&per_page=10&page=${currentPage}&client_id=${apiKey})

//     .then(res = res.json())
//     .then(data =>{
//         const container = document.getElementById('image-container');
//         data.results.forEach(img =>{
//             const link = document.createElement('a');
//             link.href = img.links.html;
//             link.target = '_blank';
//             const image = document.createElement('img');
//             image.src = img.urls.small;
//             link.appendChild(image);
//             container.appendChild(link);
//         });
//         if(data.results.length > 0){
//             document.getElementById('loadMoreContainer').style.display = 'block';
//         }
//         else{
//             error.innerHTML = '<p>No Images Found. Try Different Search </p>';
//             document.getElementById('loadMoreContainer').style.display = 'none';
//         }
//     })
// };              







const apiKey = 'V4jHZSLujbG5fMKzcwUrobf7-mxx1kCFTCzwVlskj9U';
const apiUrl = 'https://api.unsplash.com/search/photos';
const error = document.getElementById('error');

let currentPage = 1;
let currentQuery = '';

const searchImages = () => {
    const query = document.getElementById('searchInput').value.trim();
    if (!query) {
        error.textContent = 'Please enter a search term';
        return;
    }

    error.textContent = '';
    currentQuery = query;
    currentPage = 1;
    document.getElementById('image-container').innerHTML = '';
    fetchImages();
};

const loadMoreImages = () => {
    currentPage++;
    fetchImages();
};

const fetchImages = () => {
    fetch(`${apiUrl}?query=${currentQuery}&per_page=10&page=${currentPage}&client_id=${apiKey}`)
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById('image-container');
            if (data.results.length === 0 && currentPage === 1) {
                error.innerHTML = 'No images found. Try a different search.';
                document.getElementById('loadMoreContainer').style.display = 'none';
                return;
            }

            data.results.forEach(img => {
                const link = document.createElement('a');
                link.href = img.links.html;
                link.target = '_blank';

                const image = document.createElement('img');
                image.src = img.urls.small;

                link.appendChild(image);
                container.appendChild(link);
            });

            document.getElementById('loadMoreContainer').style.display = data.results.length > 0 ? 'block' : 'none';
        })
        .catch(err => {
            console.error(err);
            error.innerHTML = 'Something went wrong. Please try again later.';
        });
};
