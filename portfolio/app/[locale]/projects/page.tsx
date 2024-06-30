import Projects from "@/components/Projects";
import {unstable_setRequestLocale} from "next-intl/server";

export default function ProjectsPage({params: {locale}}: { params: { locale: string } }) {
    unstable_setRequestLocale(locale);

    return (
        <div className="max-w-7xl flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-4">
            <Projects/>
        </div>
    )
}