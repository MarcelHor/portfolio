"use client"

import Carousel from "react-multi-carousel";
import {ResponsiveType} from "react-multi-carousel/lib/types";
import "react-multi-carousel/lib/styles.css";
import FadeIn from "@/components/FadeIn";
import {useTranslations} from "next-intl";

const responsive: ResponsiveType = {
    superLargeDesktop: {
        breakpoint: {max: 4000, min: 3000},
        items: 5
    },
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 6
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 2
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1
    }
};

export default function Technologies() {
    const t = useTranslations('technologies');

    return (
        <section className="w-full flex flex-col justify-center items-center overflow-hidden">
            <FadeIn as={"h2"} className="md:text-5xl text-4xl font-bold text-center uppercase mb-8">
                    <span className="text-primary">{t('title')}
                    </span> {t('title1')} <span className="text-primary">{t('title2')}</span>
            </FadeIn>
            <FadeIn className="w-full" delay={0.1}>
                <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000}
                          arrows={false} showDots={false} draggable={false} swipeable={false}
                          keyBoardControl={false}>
                    <div className="flex flex-col justify-center items-center space-y-2">
                        <img src="https://img.icons8.com/color/96/000000/python.png" alt="Python"/>
                        <span className="text-xs font-bold">Python</span>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-2">
                        <img src="https://img.icons8.com/color/96/000000/html-5.png" alt="HTML"/>
                        <span className="text-xs font-bold">HTML</span>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-2">
                        <img src="https://img.icons8.com/color/96/000000/css3.png" alt="CSS"/>
                        <span className="text-xs font-bold">CSS</span>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-2">
                        <img src="https://img.icons8.com/color/96/000000/javascript.png" alt="JavaScript"/>
                        <span className="text-xs font-bold">JavaScript</span>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-2">
                        <img src="https://img.icons8.com/color/96/000000/typescript.png" alt="TypeScript"/>
                        <span className="text-xs font-bold">TypeScript</span>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-2">
                        <img src="https://img.icons8.com/color/96/000000/react-native.png" alt="React"/>
                        <span className="text-xs font-bold">React.js</span>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-2">
                        <img src="https://img.icons8.com/color/96/000000/vue-js.png" alt="Vue.js"/>
                        <span className="text-xs font-bold">Vue.js</span>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-2">
                        <img src="https://img.icons8.com/?size=100&id=71257&format=png&color=000000" alt="AngularJS"/>
                        <span className="text-xs font-bold">AngularJS</span>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-2">
                        <img src="https://img.icons8.com/color/96/000000/nodejs.png" alt="Node.js"/>
                        <span className="text-xs font-bold">Node.js</span>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-2">
                        <img src="https://img.icons8.com/fluency/96/nextjs.png" alt="Next.js"/>
                        <span className="text-xs font-bold">Next.js</span>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-2">
                        <img src="https://img.icons8.com/color/96/000000/mongodb.png" alt="MongoDB"/>
                        <span className="text-xs font-bold">MongoDB</span>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-2">
                        <img src="https://img.icons8.com/color/96/000000/mysql-logo.png" alt="MySQL"/>
                        <span className="text-xs font-bold">MySQL</span>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-2">
                        <img src="https://img.icons8.com/color/96/000000/git.png" alt="Git"/>
                        <span className="text-xs font-bold">Git</span>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-2">
                        <img
                            src="https://img.icons8.com/external-those-icons-flat-those-icons/96/external-Docker-Logo-social-media-those-icons-flat-those-icons.png"
                            alt="Docker"/>
                        <span className="text-xs font-bold">Docker</span>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-2">
                        <img src="https://img.icons8.com/fluency/96/tailwind_css.png" alt="Tailwind CSS"/>
                        <span className="text-xs font-bold">Tailwind CSS</span>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-2">
                        <img src="https://img.icons8.com/color/96/000000/adobe-photoshop.png" alt="Photoshop"/>
                        <span className="text-xs font-bold">Photoshop</span>
                    </div>
                </Carousel>
            </FadeIn>
        </section>
    )
}