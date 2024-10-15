import React from "react";
import {
    Input,
    Textarea,
    FormControl,
    FormLabel,
    Button,
} from "@chakra-ui/react";
import { useForm, ValidationError } from "@formspree/react";
function ContactForm() {
    const [state, handleSubmit] = useForm("mnqkgelp");
    if (state.succeeded) {
        return <p>Thanks for reaching out!</p>;
    }
    return (
        <form onSubmit={handleSubmit}>
            <FormControl>
                <FormLabel>Name:</FormLabel>
                <Input
                    placeholder="First and last name"
                    id="name"
                    type="name"
                    name="name"
                    mb={4}
                    borderColor="black"
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <FormLabel>Email address:</FormLabel>
                <Input
                    placeholder="email@domain.com"
                    id="email"
                    type="email"
                    name="email"
                    mb={4}
                    borderColor="black"
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <FormLabel>Message:</FormLabel>
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <Textarea
                    placeholder="Enter message here"
                    id="message"
                    name="message"
                    borderColor="black"
                />
                <Button
                    type="submit"
                    disabled={state.submitting}
                    mt={4}
                    mb={2}
                    width="140px"
                    bg="#ddf0ff"
                    borderWidth="1px" // Add border width to make it visible
                    borderColor="black" // Set the border color
                    borderStyle="solid" // Set the border style (solid, dashed, etc.)
                >
                    Submit
                </Button>
            </FormControl>
        </form>
    );
}

export default ContactForm;
