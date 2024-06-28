import {useTranslations} from "next-intl";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function ServiceCard({icon, titleKey, descriptionKey}: {
    icon: any,
    titleKey: string,
    descriptionKey: string
}) {
    const t = useTranslations('services');

    return (
        <>
            <FontAwesomeIcon icon={icon} size={"3x"} className={"mb-2"}/>
            <h3 className="text-2xl font-bold mb-8">{t(titleKey)}</h3>
            <p>{t(descriptionKey)}</p>
            <div className="absolute bottom-0 left-0 right-0 my-8 mx-16 flex justify-center items-center space-x-4">
                <span className={"opacity-10"}>&lt;&gt;</span>
                <hr className="border-2 border-white border-opacity-10 w-full"/>
                <span className={"opacity-10"}>&lt;/&gt;</span>
            </div>
        </>
    );
};