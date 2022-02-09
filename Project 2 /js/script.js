List = document.querySelector( `.contact-list`);
Pagination = document.querySelector(`.pagination`)

listArray = Array.from(List.children);

// listLength = listArray.length;

// console.log(listLength);
// console.log(listArray[1]);

let current_page =1;
let rows = 10;
function DisplayNames(listArray,wrapper,rows_per_page,page) {
    wrapper.innerHTML = "";
    page--;

    let start = rows_per_page *page;
    let end = start + rows_per_page;
    let paginatedNames = listArray.slice(start,end);
      
    for(let i =0; i< paginatedNames.length;i++){
        let name = paginatedNames[i];
        wrapper.appendChild(name);
        // console.log(name);
    }
}

function buttoncount(listArray,wrapper,rows_per_page) {
    wrapper.innerHTML = "";
    let page_count = Math.ceil(listArray.length/rows_per_page);
     for (let i=1;i <page_count+1; i++) {
        let btn = createBtn(i,listArray);
        wrapper.appendChild(btn);
     }      
}


function createBtn(page, listArray) {
    let button = document.createElement('button');
    button.innerText = page;
    
    button.addEventListener('click', function (){
        current_page = page;
        DisplayNames(listArray,List,rows,current_page);
    })

    return button;
}
DisplayNames(listArray,List,rows,current_page);
buttoncount(listArray,Pagination,rows);