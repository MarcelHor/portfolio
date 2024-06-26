import {Resend} from 'resend';

export default function ContactForm() {
    const sendEmail = async (formData: FormData) => {
        "use server";
        try {
            const resend = new Resend(process.env.RESEND_API_KEY);
            const name = formData.get("name") as string | null;
            const email = formData.get("email") as string | null;
            const message = formData.get("message") as string | null;

            if (email === null || message === null || name === null) {
                throw new Error("Param missing");
            }

            const {data, error} = await resend.emails.send({
                from: `${name} <onboarding@resend.dev>`,
                to: ["mar.horv22@gmail.com"],
                subject: "Portfolio - new message",
                react: message,
            });

            console.log("Email sent successfully:", data, error)
        } catch (error) {
            console.error("Error sending email:", error);
        }
    };


    return (
        <form className="form-control flex flex-col w-full md:w-1/2 mx-auto space-y-4" action={sendEmail}>
            <h3 className={"text-2xl uppercase text-secondary font-bold"}>Contact form</h3>
            <input type="text" placeholder="Name" name={"name"} className="input input-bordered" required/>
            <input type="email" placeholder="Email" name={"email"} required
                   className="input input-bordered"/>
            <textarea placeholder="Message" name={"message"}
                      className="textarea textarea-bordered h-32" required/>
            <button type="submit" className="btn btn-primary">Send</button>
        </form>
    );
}