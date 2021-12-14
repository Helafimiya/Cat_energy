const range = document.querySelector('#range');
const cats__before = document.querySelector('#cats__before');
const cats__after = document.querySelector('#cats__after');

function before() {
    range.classList.remove('cats__range_after');
    cats__before.classList.remove('cats__cat_hidden');
    cats__after.classList.add("cats__cat_hidden");
};

function after() {
    range.classList.add('cats__range_after');
    cats__before.classList.add('cats__cat_hidden');
    cats__after.classList.remove("cats__cat_hidden");
};