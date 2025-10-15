import {test, expect, beforeEach, afterEach} from "vitest";
import {fireEvent, render, screen, cleanup} from "@testing-library/react"
import BookList from "../components/BookList";

beforeEach(() => {
    render(<BookList/>)
})

afterEach(() => {
    cleanup()
})

// test ("add two numbers", () => {
//     let sum = 2+1;
//     expect(sum).toBe(3);
// })

test("that the booklist rendered on the screen", () =>{
   // render(<BookList/>)
    const listItem = screen.getAllByRole("listitem")
    expect(listItem.length).toBe(4)
})

test("that I can delete a book", () =>{
    // render(<BookList/>)
    const deleteBtn = screen.getAllByText(/delete/i)
    fireEvent.click(deleteBtn[0])
    const listItem = screen.getAllByRole("listitem")
    expect(listItem.length).toBe(3);
})

test("that I can add a book", () =>{
    const input = screen.getByPlaceholderText(/add a book/i)
    const addBookForm = input.closest("form")

    fireEvent.change(input, {target: {value: "Eze goes to school"}})
    fireEvent.submit(addBookForm)

    const result = screen.getByText(/Eze goes to school/i)
    expect(result).toBeTruthy();

})

test("that I can search a book", () =>{
    const input = screen.getByPlaceholderText(/search books/i)
    const searchBookForm = input.closest("form")
    fireEvent.input(input, {target: {value: "The Trial"}})
    expect(searchBookForm.length).toBe(1);
})