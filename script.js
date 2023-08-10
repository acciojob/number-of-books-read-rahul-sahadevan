const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];
let count=0;
const numberOfBooksRead = () => {
	for(let i in library){
		if(library[i].readingStatus == true){
			count++;
		}
		
	}
	return count;
  // write your code here
};

// Do not change the code below

alert(numberOfBooksRead());
