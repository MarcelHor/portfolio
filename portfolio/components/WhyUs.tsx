function MojeKomponenta() {
    return (
        <section className="flex flex-col text-left space-y-8 relative w-2/3 my-32">
                <h1 className={"lg:text-6xl text-3xl font-bold uppercase z-10"}>
                    Řešení stvořené přesně pro vás
                </h1>
                <p className={"lg:w-2/5"}>
                    Každý projekt je jedinečný. Přizpůsobíme design, funkce a obsah tak, aby co nejlépe
                    odpovídaly
                    vašim potřebám a cílové skupině.
                    Chápeme důležitost prvního dojmu. Naše moderní a esteticky přitažlivé webové stránky
                    budou
                    vašim
                    vizitkou a zanechají trvalý dojem na vaše návštěvníky.
                </p>
                <img
                    src="https://www.tul.cz/wp-content/uploads/2021/03/Sni%CC%81mek-obrazovky-2021-03-24-v-18.36.37-1024x676.png"
                    alt="office" width={"550px"} className={" object-contain lg:absolute lg:right-24 lg:-top-10 rounded shadow-md"}/>
        </section>
    );
}

export default MojeKomponenta;
