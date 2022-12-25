import React from "react";
import "@testing-library/jest-dom"
import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react"
import SearchBar from "./SearchBar";

test("type and get correct text on submit", async () => {

    const onSubmit = (text) => {
        expect(text).toBe("lion")
    }

    render(<SearchBar onSubmit={onSubmit} />)

    // Method 1 -> use @testing-library/user-event
    await userEvent.keyboard("lion{enter}")


    // Method 2 -> use @testing-library/react
    // const textbox = screen.getByRole("textbox")
    // fireEvent.change(textbox, {
    //     target: {
    //         value: "lion"
    //     }
    // })

    // const form = screen.getByRole("search")
    // fireEvent.submit(form)
})