const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

const breakfastMenuItemHTML = breakfastMenu.map((item,index) => `<p>Item ${index+1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemHTML;

let maincourseItem = '';
mainCourseMenu.forEach((item,index) => {
    maincourseItem += `<p>Item ${index+1}: ${item}</p>`;
});
document.getElementById('maincourseMenuItems').innerHTML = maincourseItem;

let desserItem = '';
for(let i=0;i<dessertMenu.length;i++){
    desserItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = desserItem;
