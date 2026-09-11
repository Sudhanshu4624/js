// const code = ["js","java","python","cpp","ruby"]

// const values = code.forEach( (item) => {
//     console.log(item);
//     return item
// } )

// console.log(values);
/* o/p-->
js
java
python
cpp
ruby
undefined

even if we write return statement it returns undefined, foreach does not return anything
*/

// filters ******** automatically returns values unlike foreach
const num = [1,2,3,4,5,6,7,8,9]

// const newnum = num.filter(nums => nums>4)
// const newnum = num.filter((nums) => { nums > 4 }) // this will return an empty array, common mistake! missed return when using {} as we are opening scope

// const newnum = num.filter((nums) => { return nums > 4 })

//using foreach
// const newnum = []
// num.forEach(nums => {
//     if (nums > 4) {
//         newnum.push(nums)
//     }
// });

// console.log(newnum);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   const userBooks = books.filter((bk) => bk.genre === 'Science')

  const userBooks = books.filter((bk) => bk.genre == 'Science' && bk.publish > 2000 && bk.edition > 2015)

  console.log(userBooks);
  
