// const getData = async () => {
//     const response = await fetch('tacos.json');
//     let data = await response.json();
//     data = data.data;
//     console.log(data);

//     document.querySelector('.cards').innerHTML = data.map(item => {
//         console.log(item.name);
//         const hasImage = item.thumbnail.data && item.thumbnail.data.absolute_url;
//         if (!hasImage) return '';
//         const imgURL = item.thumbnail.data.absolute_url;
//         return `<section class="card">
//             <div class="card-info">
//                 <h2>${item.name}</h2>
//                 ${item.short_description || ''}
//                 <p>${item.price.regular_low_formatted}</p>
//             </div>
//             <div class="image" style="background-image: url('${imgURL}')"></div>
//         </section>`
//     }).join('');
// }


// //getData();