const refs = {
  listCategories: document.querySelector('#categories'),
  itemLi: document.querySelectorAll('.item'),
};

console.log(`Total number of categories: ${refs.itemLi.length}`);

refs.itemLi.forEach(item => {
  const itemTitle = item.querySelector('h2').textContent;
  console.log(`Title of category is ${itemTitle}`);

  const itemsQuantity = item.querySelectorAll('li').length;
  console.log(
    `The quantity of subcategories in category ${itemTitle} is ${itemsQuantity}`,
  );
});
