import '../css/index.css'

import search from './search';
import render from './render';

const id = prompt('test babel?');

search(id).then((data) => {
    render(data);
}).catch(()=>{
    console.log('error');
});


