"use client";
import {sendEmail} from "@/actions/contactAction";
import {FormEvent, useRef, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle, faExclamationCircle} from "@fortawesome/free-solid-svg-icons";
import {useTranslations} from "next-intl";

export default function ContactForm() {
    const t = useTranslations('contact');
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
        <form className="form-control flex flex-col w-full mx-auto space-y-4" onSubmit={handleSubmit}
              ref={formRef}>
            <h3 className="text-2xl uppercase text-secondary font-bold">{t('formTitle')}</h3>
            <input type="text" placeholder={t('namePlaceholder')} name="name" className="input input-bordered" minLength={3}
                   maxLength={100}
                   required/>
            <input type="email" placeholder={t('emailPlaceholder')} name="email" className="input input-bordered" minLength={3}
                   maxLength={100}
                   required/>
            <textarea placeholder={t('messagePlaceholder')} name="message" className="textarea textarea-bordered h-32" minLength={3}
                      maxLength={1000} required/>
            <button type="submit" className="btn btn-primary">
                {formStatus === "loading" ? <span className="loading loading-spinner"/> : t('sendButtonText')}
            </button>
            <div className="w-full flex flex-col min-h-14 items-center justify-center">
                {formStatus === "success" &&
                    <div role="alert" className="alert alert-success h-14 text-white flex items-center">
                        <FontAwesomeIcon icon={faCheckCircle} className="mr-2"/>
                        {t('sendingStatus.success')}
                    </div>
                }

                {formStatus === "error" &&
                    <div role="alert" className="alert alert-error h-14 flex items-center text-white">
                        <FontAwesomeIcon icon={faExclamationCircle} className="mr-2"/>
                        {t('sendingStatus.error')}
                    </div>
                }
            </div>
        </form>
    );
}
