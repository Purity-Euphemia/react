import { useState } from "react"
import styles from "./bookList.module.css"


const BookList = () => {

    const listOfBooks = [
        "The Wise Man's Fear",
        "Name of the Wind",
        "Kafka on the Shore",
        "The Master and the Margarita"
    ]

    const [books, setBooks] = useState(listOfBooks)
    const [newBook, setNewBook] = useState("")

    const handleDelete = (clickedBook)=>{
        setBooks(books.filter((book)=> (book !== clickedBook)));  
    }

    const handleTextChange = (e) =>{
        setNewBook(e.target.value.trim());
    }

    const addBookHandler = (e) =>{
        e.preventDefault();
        if(newBook) {
            setBooks((prevBook)=>([...prevBook, newBook]));
        }
    }

    const handleSearch = (e) =>{
        const searched = e.target.value.trim();
        const result = listOfBooks.filter((book)=> book.toLowerCase().includes(searched.toLowerCase()));
        setBooks(result);
    }
        

    return(
        <div className={styles.wrapper}>

	    <header>
	    	<div className={styles.pageBanner}>
	    		<h1 className={styles.title}> Book Collections</h1>
                <p>Books</p>
                <form className={styles.searchBooks}>
                    <input type="text" onChange={handleSearch} placeholder="Search books..." />
                </form>
	    	</div>
	    </header>
	    <div className={styles.bookList}>
	    	<h2 className={styles.title}>Books to Read</h2>
            <ul>
                {
                    books.map((book, index)=>(
                        <li key={index}>
                            <span className={styles.name}>{book}</span>
                            <span className={styles.delete} onClick={()=>handleDelete(book)}>delete</span>
                        </li>
                    
                    ))
                }
            </ul>

	    </div>
	    <form type="submit" onSubmit={addBookHandler} className={styles.addBook}>
	    	<input type="text" onChange={handleTextChange} placeholder="Add a book..." />
	    	<button>Add</button>
	    </form>

    </div>
    )
}

export default BookList;

