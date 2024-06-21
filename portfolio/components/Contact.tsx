const ContactForm = () => {
    return (
        <section className="flex flex-col items-center justify-center w-full h-full py-8" id={"contact"}>
            <h1 className="text-5xl font-bold">Kontaktujte nás</h1>
            <div className="lg:flex justify-between w-full h-full py-10 space-y-10 lg:space-y-0">
                <form className="form-control flex flex-col lg:w-1/2 mx-auto space-y-2">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Name"
                           className="input input-bordered"/>

                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="Email"
                           className="input input-bordered"/>
                    <label className="label">
                        <span className="label-text">Message</span>
                    </label>
                    <textarea placeholder="Message"
                              className="textarea textarea-bordered h-32"/>
                    <button type="submit" className="btn btn-primary">Send</button>
                </form>

                <div className="flex flex-col lg:w-1/2 mx-auto space-y-8  items-center">
                    <div className="flex space-x-16 items-center my-4">
                        <div className="avatar flex flex-col space-y-4 items-center justify-center">
                            <div className="w-32 rounded-xl">
                                <img src="https://avatars.githubusercontent.com/u/50490412?v=4" alt="avatar"
                                     className="rounded-xl"/>
                            </div>
                            <span className="text-xl font-bold">Váš Jméno</span>
                        </div>
                        <div className="avatar flex flex-col space-y-4 items-center justify-center">
                            <div className="w-32 rounded-xl">
                                <img src="https://avatars.githubusercontent.com/u/50490412?v=4" alt="avatar"
                                     className="rounded-xl"/>
                            </div>
                            <span className="text-xl font-bold">Váš Jméno</span>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4 items-center justify-center">
                        <div className="flex items-center space-x-4">
                            <span className="link text-xl">LinkedIn: linkedin.com/in/vase-jmeno</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="link text-xl">GitHub: github.com/vase-jmeno</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <span className="link text-xl">Telefon: +420 123 456 789</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <a href="mailto:mar.horv22@gmail.com" className="link text-xl" target="_blank"
                               rel="noopener noreferrer">
                                Email: email@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
