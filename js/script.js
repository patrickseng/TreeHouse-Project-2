


const studentsItem = document.getElementsByClassName('student-item');

const studentsPerPage = 10


const showPage = (list, page) => {
  for ( i = 0; i < list.length ; i += 1){
    if ( i >= ((page * (studentsPerPage)) - (studentsPerPage - 1)) && i <= (page * studentsPerPage))
      { list[i].style.display = "block" }
    else
      { list[i].style.display = "none"  }
  }
}


console.log (showPage(studentsItem, 1));


/*
Loop over items in the list parameter
-- If the index of a list item is >= the index of the first
item that should be shown on the page
-- && the list item index is <= the index of the last item
that should be shown on the page, show it
*/


/*
Loop over items in the list parameter
-- If the index of a list item is >= the index of the first
item that should be shown on the page
-- && the list item index is <= the index of the last item
that should be shown on the page, show it
*/

/***
   Create the `appendPageLinks function` to generate, append, and add
   functionality to the pagination buttons.
***/

const appendPageLinks = (list) => {
/*
1. Determine how many pages are needed for the list by dividing the
total number of list items by the max number of items per page
2. Create a div, give it the “pagination” class, and append it to the .page div
3. Add a ul to the “pagination” div to store the pagination links
4. for every page, add li and a tags with the page number text
5. Add an event listener to each a tag. When they are clicked
call the showPage function to display the appropriate page
6. Loop over pagination links to remove active class from all links
7. Add the active class to the link that was just clicked. You can identify that
clicked link using event.target
*/
}

// Remember to delete the comments that came with this file, and replace them with your own code comments.
