const ul = document.querySelector('.student-list');
const studentsItem = document.getElementsByClassName('student-item');
const studentsPerPage = 10;
const pageClass = document.querySelector('.page');
;


const showPage = (list, page) => {
  for ( i = 0; i < list.length ; i += 1){
    if ( i >= ((page * (studentsPerPage)) - (studentsPerPage)) && i <= (page * studentsPerPage - 1))
      { list[i].style.display = "block" }
    else
      { list[i].style.display = "none"  }
  }
}


const appendPageLinks = (list) => {

      const maxNumPages = Math.ceil(list.length / studentsPerPage);

      var div = document.createElement("div");
        div.classList.add('pagination');
        pageClass.appendChild(div);

      const ul = document.createElement("ul");
        div.appendChild(ul);


      for ( i = 0; i < maxNumPages ; i += 1) {
          const li = document.createElement('li');
          const a = document.createElement('a') ;
          a.textContent = i + 1;
          a.href = "#"
          li.appendChild(a);
          ul.appendChild(li);
        }

}
showPage(studentsItem, 4);
appendPageLinks(studentsItem);
