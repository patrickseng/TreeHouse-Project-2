
// Global Variables
const studentsItem = document.getElementsByClassName('student-item');
const studentsPerPage = 10;
const pageClass = document.querySelector('.page');
let page = 1

// Show/hide the appropriate students

const showPage = (list, page) => {

  for ( i = 0; i < list.length ; i += 1){
    if ( i >= ((page * (studentsPerPage)) - (studentsPerPage)) && i <= (page * studentsPerPage - 1))
    { list[i].style.display = "block" }
    else
    { list[i].style.display = "none"  }
  }

  };

//Create and append the pagination links

const appendPageLinks = (list) => {
      const ul = document.createElement("ul");

      const maxNumPages = Math.ceil(list.length / studentsPerPage);

      const div = document.createElement("div");
        div.classList.add('pagination');
        pageClass.appendChild(div);
        div.appendChild(ul);


      for ( i = 0; i < maxNumPages ; i += 1) {
          const li = document.createElement('li');

          const a = document.createElement('a') ;
            a.textContent = i + 1 ;
            a.href = "#";
            li.appendChild(a);
            ul.appendChild(li);
            };

// Add functionality to pagination links with an event listener
          const pageButtons = document.querySelectorAll('a');
            pageButtons[0].className = 'active';

          ul.addEventListener('click', (e) => {
            if (e.target.tagName == 'A') {
            showPage(studentsItem, e.target.textContent);
          }

          pageButtons[0].className += "remove";
        }
      );

   }

showPage(studentsItem, page);
appendPageLinks(studentsItem);
