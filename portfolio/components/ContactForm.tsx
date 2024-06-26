"use client";
import {sendEmail} from "@/actions/contactAction";
import {FormEvent, useRef, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faExclamationCircle} from "@fortawesome/free-solid-svg-icons";

export default function ContactForm() {
    const formRef = useRef<HTMLFormElement>(null);
    const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (formStatus === "loading") {
            return;
        }
        if (!formRef.current) {
            return;
        }

        const formData = new FormData(formRef.current);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const message = formData.get("message") as string;

        try {
            setFormStatus("loading");
            await sendEmail(name, email, message);
            formRef.current?.reset();
            setFormStatus("success");
            setTimeout(() => setFormStatus("idle"), 3500);
        } catch (error) {
            console.error("Error sending email:", error);
            setFormStatus("error");
            setTimeout(() => setFormStatus("idle"), 3500);
        }
    }

    return (
        <form className="form-control flex flex-col w-full md:w-1/2 mx-auto space-y-4" onSubmit={handleSubmit}
              ref={formRef}>
            <h3 className="text-2xl uppercase text-secondary font-bold">Contact form</h3>
            <input type="text" placeholder="Name" name="name" className="input input-bordered" minLength={3}
                   maxLength={100}
                   required/>
            <input type="email" placeholder="Email" name="email" className="input input-bordered" minLength={3}
                   maxLength={100}
                   required/>
            <textarea placeholder="Message" name="message" className="textarea textarea-bordered h-32" minLength={3}
                      maxLength={1000} required/>
            <button type="submit" className="btn btn-primary">
                {formStatus === "loading" ? <span className="loading loading-spinner"/> : "Send"}
            </button>
            {formStatus === "success" && (
                <div role="alert" className="alert alert-success">
                    <FontAwesomeIcon icon={faCheckCircle} className="mr-2"/>
                    Message sent successfully!
                </div>
            )}
            {formStatus === "error" && (
                <div role="alert" className="alert alert-error">
                    <FontAwesomeIcon icon={faExclamationCircle} className="mr-2"/>
                    Failed to send message. Please try again later.
                </div>
            )}
        </form>
    );
}
