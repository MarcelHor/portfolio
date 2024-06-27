import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFaceSadTear} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function NotFound() {
    return(
     <section className={"flex flex-col items-center justify-center h-[calc(100vh-4rem)] space-y-8 p-8"}>
         <FontAwesomeIcon icon={faFaceSadTear} size={"6x"} className={""}/>
         <div className={"flex flex-col items-center justify-center space-y-4"}>
             <h1 className={"text-4xl font-bold uppercase"}>404 - PAGE NOT FOUND</h1>
             <p className={"text-lg"}>So sorry! The page you are looking for cannot be found.</p>
             <Link className={"btn btn-primary uppercase"} href={"/"}>
                 Back to homepage
             </Link>
         </div>
     </section>
    )
}